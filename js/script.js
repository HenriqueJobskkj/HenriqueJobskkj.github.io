"use strict";



/* ---------- 1. Funções auxiliares ---------- */

const NS_SVG = "http://www.w3.org/2000/svg";


function criar(tag, classe, texto) {
    const elemento = document.createElement(tag);
    if (classe) {
        elemento.className = classe;
    }
    if (texto) {
        elemento.textContent = texto;
    }
    return elemento;
}

// Cria um ícone SVG que reaproveita um símbolo definido no index.html
function criarIcone(idSimbolo, tamanho, classeExtra) {
    const svg = document.createElementNS(NS_SVG, "svg");
    svg.setAttribute("class", classeExtra ? "icone " + classeExtra : "icone");
    svg.setAttribute("width", tamanho);
    svg.setAttribute("height", tamanho);
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");

    const uso = document.createElementNS(NS_SVG, "use");
    uso.setAttribute("href", "#" + idSimbolo);
    svg.appendChild(uso);

    return svg;
}

// Só aceita endereços http ou https 
function urlSegura(texto) {
    try {
        const url = new URL(String(texto || "").trim());
        if (url.protocol === "https:" || url.protocol === "http:") {
            return url.href;
        }
    } catch (erro) {
        // endereço inválido
    }
    return "";
}

function emailValido(texto) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(texto || "").trim());
}

// Pega as iniciais de um título 
function iniciais(titulo) {
    return String(titulo || "")
        .split(" ")
        .filter(function (palavra) { return palavra.length > 2; })
        .slice(0, 2)
        .map(function (palavra) { return palavra[0].toUpperCase(); })
        .join("");
}


/* ---------- 2. Contatos e foto ---------- */

function preencherContatos() {
    const email = String(perfil.email || "").trim();
    const whatsapp = String(perfil.whatsapp || "").replace(/\D/g, "");

    
    const enderecos = {
        github: urlSegura(perfil.github),
        linkedin: urlSegura(perfil.linkedin),
        email: emailValido(email) ? "mailto:" + email : "",
        whatsapp: (whatsapp.length >= 10 && whatsapp.length <= 15) ? "https://wa.me/" + whatsapp : ""
    };

    
    document.querySelectorAll("[data-link]").forEach(function (link) {
        const endereco = enderecos[link.dataset.link];
        if (endereco) {
            link.href = endereco;
            link.hidden = false;
        }
    });

    
    document.querySelectorAll("[data-texto='email']").forEach(function (elemento) {
        elemento.textContent = email;
    });

    
    document.querySelectorAll(".redes, .contato-info").forEach(function (bloco) {
        bloco.hidden = !bloco.querySelector("[data-link]:not([hidden])");
    });
}

function preencherFoto() {
    const caixa = document.getElementById("foto-perfil");
    if (!caixa || !perfil.foto) {
        return;
    }

    const imagem = criar("img");
    imagem.src = perfil.foto;
    imagem.alt = "Foto de " + perfil.nome;
    imagem.width = 640;
    imagem.height = 640;
    imagem.loading = "lazy";

   
    imagem.addEventListener("error", function () {
        caixa.hidden = true;
    });

    caixa.appendChild(imagem);
    caixa.hidden = false;
}


/* ---------- 3. Tecnologias ---------- */

function montarTecnologias() {
    const container = document.getElementById("lista-tecnologias");
    if (!container) {
        return;
    }

    
    const marcadas = tecnologias.filter(function (tec) {
        return tec.conheco !== false;
    });

    
    const grupos = new Map();
    marcadas.forEach(function (tec) {
        const categoria = tec.categoria || "Outras";
        if (!grupos.has(categoria)) {
            grupos.set(categoria, []);
        }
        grupos.get(categoria).push(tec);
    });

    if (grupos.size === 0) {
        container.appendChild(criar("p", "aviso-noscript", "Nenhuma tecnologia marcada ainda."));
        return;
    }

    grupos.forEach(function (lista, categoria) {
        const grupo = criar("div", "tec-grupo");
        grupo.appendChild(criar("h3", "tec-grupo-titulo", categoria));

        const ul = criar("ul", "tec-lista");

        lista.forEach(function (tec) {
            const card = criar("li", "tec-card");

            if (tec.icone) {
                const icone = criar("i", tec.icone + " tec-icone");
                icone.setAttribute("aria-hidden", "true");
                card.appendChild(icone);
            } else if (tec.simbolo) {
                card.appendChild(criarIcone(tec.simbolo, 42, "tec-icone"));
            }

            card.appendChild(criar("span", "tec-nome", tec.nome));

            if (tec.nivel) {
                card.appendChild(criar("span", "tec-nivel", tec.nivel));
            }

            ul.appendChild(card);
        });

        grupo.appendChild(ul);
        container.appendChild(grupo);
    });
}


/* ---------- 4. Projetos ---------- */

function criarLinkProjeto(texto, endereco, classe, simbolo, titulo) {
    const link = criar("a", "botao botao-pequeno " + classe);
    link.href = endereco;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", texto + " do projeto " + titulo + " (abre em outra aba)");
    link.appendChild(criarIcone(simbolo, 16));
    link.appendChild(document.createTextNode(texto));
    return link;
}

function montarProjetos() {
    const container = document.getElementById("lista-projetos");
    if (!container) {
        return;
    }

    projetos.forEach(function (projeto) {
        const card = criar("article", "projeto-card");

        
        const midia = criar("div", "projeto-midia");
        if (projeto.imagem) {
            const imagem = criar("img", "projeto-imagem");
            imagem.src = projeto.imagem;
            imagem.alt = projeto.alt || "Prévia do projeto " + projeto.titulo;
            imagem.width = 640;
            imagem.height = 360;
            imagem.loading = "lazy";
            midia.appendChild(imagem);
        } else {
            const iniciaisProjeto = criar("span", "projeto-placeholder", iniciais(projeto.titulo));
            iniciaisProjeto.setAttribute("aria-hidden", "true");
            midia.appendChild(iniciaisProjeto);
        }

        // Exemplo
        if (projeto.exemplo) {
            midia.appendChild(criar("span", "projeto-selo", "Exemplo"));
        }
        card.appendChild(midia);

        // Texto do card
        const corpo = criar("div", "projeto-corpo");
        corpo.appendChild(criar("h3", "projeto-titulo", projeto.titulo));
        corpo.appendChild(criar("p", "projeto-descricao", projeto.descricao));

        const tags = criar("ul", "projeto-tags");
        (projeto.tecnologias || []).forEach(function (nome) {
            tags.appendChild(criar("li", "tag", nome));
        });
        corpo.appendChild(tags);

        
        const links = criar("div", "projeto-links");
        const urlDemo = urlSegura(projeto.demo);
        const urlCodigo = urlSegura(projeto.codigo);

        if (urlDemo) {
            links.appendChild(criarLinkProjeto("Ver demonstração", urlDemo, "botao-primario", "icone-externo", projeto.titulo));
        }
        if (urlCodigo) {
            links.appendChild(criarLinkProjeto("Código no GitHub", urlCodigo, "botao-secundario", "icone-github", projeto.titulo));
        }
        if (links.children.length > 0) {
            corpo.appendChild(links);
        }

        card.appendChild(corpo);
        container.appendChild(card);
    });
}


/* ---------- 5. Menu do celular ---------- */

function iniciarMenu() {
    const botao = document.getElementById("menu-botao");
    const menu = document.getElementById("menu-principal");
    if (!botao || !menu) {
        return;
    }

    
    function definirMenu(aberto) {
        menu.classList.toggle("aberto", aberto);
        botao.setAttribute("aria-expanded", String(aberto));
        botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    }

    botao.addEventListener("click", function () {
        definirMenu(!menu.classList.contains("aberto"));
    });

   
    menu.querySelectorAll(".menu-link").forEach(function (link) {
        link.addEventListener("click", function () {
            definirMenu(false);
        });
    });

  
    document.addEventListener("keydown", function (evento) {
        if (evento.key === "Escape" && menu.classList.contains("aberto")) {
            definirMenu(false);
            botao.focus();
        }
    });

   
    document.addEventListener("click", function (evento) {
        const clicouFora = !menu.contains(evento.target) && !botao.contains(evento.target);
        if (clicouFora && menu.classList.contains("aberto")) {
            definirMenu(false);
        }
    });

   
    window.matchMedia("(min-width: 880px)").addEventListener("change", function (evento) {
        if (evento.matches) {
            definirMenu(false);
        }
    });
}


/* ---------- 6. Cabeçalho e seção ativa ---------- */

function iniciarCabecalho() {
    const cabecalho = document.getElementById("cabecalho");
    if (!cabecalho) {
        return;
    }

    function atualizar() {
        cabecalho.classList.toggle("rolado", window.scrollY > 10);
    }

    window.addEventListener("scroll", atualizar, { passive: true });
    atualizar();
}

// Destaca no menu a seção que está na tela
function iniciarSecaoAtiva() {
    if (!("IntersectionObserver" in window)) {
        return;
    }

    const links = document.querySelectorAll(".menu-link");
    const secoes = new Map();

    links.forEach(function (link) {
        const secao = document.getElementById(link.getAttribute("href").slice(1));
        if (secao) {
            secoes.set(secao, link);
        }
    });

    const observador = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (entrada) {
            if (!entrada.isIntersecting) {
                return;
            }

            links.forEach(function (link) {
                link.classList.remove("ativo");
                link.removeAttribute("aria-current");
            });

            const linkAtivo = secoes.get(entrada.target);
            linkAtivo.classList.add("ativo");
            linkAtivo.setAttribute("aria-current", "true");
        });
    }, { rootMargin: "-40% 0px -55% 0px" }); 

    secoes.forEach(function (link, secao) {
        observador.observe(secao);
    });
}


/* ---------- 7. Animações ao rolar ---------- */

function iniciarRevelar() {
    
    const menosMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (menosMovimento || !("IntersectionObserver" in window)) {
        return;
    }

    const elementos = document.querySelectorAll("[data-revelar], .tec-card, .projeto-card");

    const observador = new IntersectionObserver(function (entradas, obs) {
        entradas.forEach(function (entrada) {
            if (!entrada.isIntersecting) {
                return;
            }

            const elemento = entrada.target;
            elemento.classList.add("visivel");
            obs.unobserve(elemento);

            // Depois que a animação termina, remove as classes e o atraso, para não
            // atrapalhar o efeito de passar o mouse nos cards
            setTimeout(function () {
                elemento.classList.remove("revelar", "visivel");
                elemento.style.transitionDelay = "";
            }, 1300);
        });
    }, { threshold: 0.12 });

    elementos.forEach(function (elemento, indice) {
        elemento.classList.add("revelar");
        elemento.style.transitionDelay = (indice % 4) * 80 + "ms"; // pequeno atraso em sequência
        observador.observe(elemento);
    });
}


/* ---------- 8. Formulário de contato ---------- */

function iniciarFormulario() {
    const formulario = document.getElementById("form-contato");
    if (!formulario) {
        return;
    }

    const botao = document.getElementById("form-botao");
    const status = document.getElementById("form-status");
    const textoOriginal = botao.textContent;
    const campos = Array.from(formulario.querySelectorAll("input[required], textarea[required]"));
    let enviando = false;

    
    function mostrarStatus(texto, tipo) {
        status.textContent = texto;
        status.className = tipo ? "form-status " + tipo : "form-status";
    }

    
    function textoDoErro(campo) {
        const valor = campo.value.trim();

        if (valor === "") {
            return "Preencha este campo.";
        }
        if (campo.type === "email" && !emailValido(valor)) {
            return "Digite um e-mail válido, como nome@exemplo.com.";
        }
        if (campo.minLength > 0 && valor.length < campo.minLength) {
            return "Digite pelo menos " + campo.minLength + " caracteres.";
        }
        return "";
    }

    
    function validarCampo(campo) {
        const erro = textoDoErro(campo);
        const aviso = document.getElementById("erro-" + campo.id);

        campo.setAttribute("aria-invalid", erro ? "true" : "false");
        if (aviso) {
            aviso.textContent = erro;
        }
        return erro === "";
    }

    
    campos.forEach(function (campo) {
        campo.addEventListener("blur", function () {
            validarCampo(campo);
        });
        campo.addEventListener("input", function () {
            if (campo.getAttribute("aria-invalid") === "true") {
                validarCampo(campo);
            }
        });
    });

    formulario.addEventListener("submit", async function (evento) {
        evento.preventDefault(); 

        if (enviando) {
            return;
        }
        mostrarStatus("", "");

        
        let primeiroInvalido = null;
        campos.forEach(function (campo) {
            if (!validarCampo(campo) && !primeiroInvalido) {
                primeiroInvalido = campo;
            }
        });
        if (primeiroInvalido) {
            primeiroInvalido.focus();
            mostrarStatus("Corrija os campos destacados e tente novamente.", "erro");
            return;
        }

        
        if (formulario.elements["_gotcha"].value !== "") {
            mostrarStatus("Mensagem enviada com sucesso!", "sucesso");
            formulario.reset();
            return;
        }

       
        const configuracao = perfil.formulario || {};
        if (!configuracao.endpoint) {
            mostrarStatus("O envio de mensagens ainda não está configurado. Por enquanto, use os outros canais de contato.", "erro");
            return;
        }

        
        const dados = Object.assign({
            nome: formulario.elements["nome"].value.trim(),
            email: formulario.elements["email"].value.trim(),
            assunto: formulario.elements["assunto"].value.trim(),
            mensagem: formulario.elements["mensagem"].value.trim()
        }, configuracao.camposExtras || {});

        enviando = true;
        botao.disabled = true;
        botao.textContent = "Enviando...";
        formulario.setAttribute("aria-busy", "true");

        // Cancela o envio se passar de 15 segundos
        const controlador = new AbortController();
        const limite = setTimeout(function () {
            controlador.abort();
        }, 15000);

        try {
            const resposta = await fetch(configuracao.endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json", "Accept": "application/json" },
                body: JSON.stringify(dados),
                signal: controlador.signal
            });

           
            const retorno = await resposta.json().catch(function () { return {}; });
            const deuCerto = resposta.ok && retorno.success !== false && retorno.ok !== false;

            if (!deuCerto) {
                throw new Error("Falha no envio");
            }

            mostrarStatus("Mensagem enviada com sucesso! Obrigado pelo contato, responderei assim que possível.", "sucesso");
            formulario.reset();
            campos.forEach(function (campo) {
                campo.setAttribute("aria-invalid", "false");
            });

        } catch (erro) {
            let mensagem = "Não foi possível enviar a mensagem agora. Tente novamente em instantes";
            if (emailValido(perfil.email)) {
                mensagem += " ou escreva para " + String(perfil.email).trim();
            }
            mostrarStatus(mensagem + ".", "erro");

        } finally {
            clearTimeout(limite);
            enviando = false;
            botao.disabled = false;
            botao.textContent = textoOriginal;
            formulario.removeAttribute("aria-busy");
        }
    });
}


/* ---------- 9. Início ---------- */

function atualizarAno() {
    const elemento = document.getElementById("ano-atual");
    if (elemento) {
        elemento.textContent = new Date().getFullYear();
    }
}

function iniciar() {
    // Se o dados.js tiver algum erro, avisa no Console em vez de quebrar em silêncio
    if (typeof perfil === "undefined" || typeof tecnologias === "undefined" || typeof projetos === "undefined") {
        console.error("Não foi possível ler o js/dados.js. Confira se o arquivo foi salvo e se não há erro de digitação (aspas ou vírgulas).");
        return;
    }

    atualizarAno();
    preencherContatos();
    preencherFoto();
    montarTecnologias();
    montarProjetos();
    iniciarMenu();
    iniciarCabecalho();
    iniciarSecaoAtiva();
    iniciarFormulario();
    iniciarRevelar();
}

iniciar();
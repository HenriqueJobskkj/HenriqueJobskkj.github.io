# 💼 Portfólio Pessoal | Henrique Jobstraibizer

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?logo=githubpages&logoColor=white)

Meu portfólio profissional, desenvolvido do zero com HTML, CSS e JavaScript, para apresentar minha trajetória, minhas tecnologias, meus projetos e meu currículo a recrutadores e empresas de tecnologia.

🔗 **Site online:** [henriquejobskkj.github.io](https://henriquejobskkj.github.io)

---

## 📌 Sobre o projeto

Sou estudante de Sistemas de Informação, com formação técnica em Eletromecânica pelo SENAI e atuação na área de logística, em transição para a área de tecnologia. Este site reúne o que já construí e o que sei, de forma honesta e organizada.

**Objetivo:** praticar desenvolvimento web com um projeto real, publicado na internet, e apresentar meu trabalho para oportunidades de estágio em TI ou desenvolvedor júnior.

---

## ✨ Seções do site

- **Início:** apresentação e atalhos para projetos, currículo e contato
- **Sobre mim:** trajetória, formação e objetivos
- **Tecnologias:** cards agrupados por categoria, com etiqueta de nível
- **Projetos:** galeria com descrição, tecnologias e links para o código
- **Currículo:** download do PDF
- **Contato:** formulário que envia mensagens para o meu e-mail e links para minhas redes

---

## 🛠️ Tecnologias

| Item | Uso |
|---|---|
| HTML5 | Estrutura semântica da página |
| CSS3 | Layout responsivo (Grid e Flexbox), variáveis CSS, tema escuro e animações |
| JavaScript | Cards montados a partir de dados, menu do celular, validação e envio do formulário |
| Devicon | Ícones das tecnologias (via CDN) |
| Google Fonts (Inter) | Tipografia |
| Web3Forms | Envio das mensagens do formulário para o e-mail |
| GitHub Pages | Hospedagem gratuita |

---

## 🧠 Destaques técnicos

- **Conteúdo separado do código:** perfil, tecnologias e projetos ficam em `js/dados.js`. Para atualizar o site, basta editar esse arquivo.
- **Responsivo (mobile first):** testado em celular, tablet e computador.
- **Acessibilidade:** HTML semântico, link para pular o menu, foco visível no teclado, textos alternativos, contraste adequado e respeito à preferência por menos movimento (`prefers-reduced-motion`).
- **SEO:** título, descrição e metadados para compartilhamento (Open Graph).
- **Formulário funcional:** validação campo a campo, proteção contra clique duplo, campo-armadilha contra robôs e tratamento de erros. A chave do Web3Forms é pública por design e só permite enviar mensagens para mim.
- **Segurança:** links externos com `rel="noopener noreferrer"`, validação dos endereços usados nos links e conteúdo montado com `textContent`, evitando injeção de código.
- **Sem frameworks:** o site é leve e carrega rápido.

---

## 🗂️ Estrutura do projeto

```
portfolio/
│
├── index.html            # Estrutura da página
├── README.md
├── .gitignore
│
├── css/
│   └── style.css         # Visual do site
│
├── js/
│   ├── dados.js          # Dados editáveis (perfil, tecnologias e projetos)
│   └── script.js         # Comportamento do site
│
└── assets/
    ├── curriculo.pdf     # Currículo para download
    └── img/
        ├── favicon.svg
        └── projetos/     # Imagens dos cards de projetos
```

---

## 🚀 Como executar localmente

1. Baixe o projeto:

```powershell
git clone https://github.com/HenriqueJobskkj/HenriqueJobskkj.github.io.git
cd HenriqueJobskkj.github.io
```

2. Abra a pasta no **Visual Studio Code** e use a extensão **Live Server** (botão direito no `index.html`, **Open with Live Server**).

   Ou, com o Python instalado, rode no terminal e abra `http://localhost:5500`:

```powershell
python -m http.server 5500
```

---

## ✏️ Como editar o conteúdo

- **Links, projetos e tecnologias:** edite o arquivo `js/dados.js`.
- **Currículo:** substitua o arquivo `assets/curriculo.pdf`.
- **Textos do "Sobre mim":** edite a seção correspondente no `index.html`.

Para publicar uma atualização:

```powershell
git add .
git commit -m "Descreva o que mudou"
git push
```

O GitHub Pages atualiza o site em alguns minutos.

---

## 🖼️ Imagens do projeto

> Adicione os prints na pasta `docs/screenshots/` e troque cada espaço abaixo pela imagem.

### Versão para computador
*(espaço para o print do site no computador)*
<!-- ![Portfólio no computador](docs/screenshots/desktop.png) -->

### Versão para celular
*(espaço para o print do site no celular)*
<!-- ![Portfólio no celular](docs/screenshots/celular.png) -->

---

## 🔮 Melhorias futuras

- Blog ou seção de artigos sobre o que estou aprendendo
- Alternância entre tema claro e escuro
- Versão do site em inglês
- Pré-visualização personalizada ao compartilhar o link (imagem Open Graph)
- Domínio próprio

---

## 👤 Contato

**Henrique Jobstraibizer**

- GitHub: [github.com/HenriqueJobskkj](https://github.com/HenriqueJobskkj)
- LinkedIn: [linkedin.com/in/henrique-jobstraibizer](https://www.linkedin.com/in/henrique-jobstraibizer)

&copy; 2026 Henrique Jobstraibizer. Todos os direitos reservados.
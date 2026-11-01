
/* ---------- dados pessoais e links ---------- */
const perfil = {
    nome: "Henrique Jobstraibizer",

    
    email: "rickjob123@gmail.com",                 
    linkedin: "https://www.linkedin.com/in/henrique-jobstraibizer",
    github: "https://github.com/HenriqueJobskkj",
    whatsapp: "14988368923",              

    
    foto: "",

    // Envio do formulário de contato (serviço Web3Forms)
    formulario: {
        endpoint: "https://api.web3forms.com/submit",
        camposExtras: {
            access_key: "0625b492-0a57-4c2d-b230-0a4c914829b5",
            subject: "Nova mensagem pelo portfólio",
            from_name: "Portfólio Henrique Jobstraibizer"
        }
    }
};


/* ---------- 2. Tecnologias ----------
   Campos de cada tecnologia:
   - nome:      texto do card
   - categoria: o grupo onde o card aparece
   - icone:     classe do ícone do Devicon (veja em devicon.dev)
   - simbolo:   ícone próprio do index.html, usado quando não há ícone no Devicon
   - nivel:     etiqueta opcional 
   - conheco:   true = aparece no site | false = fica escondida*/

const tecnologias = [

    // ----- Linguagens de programação -----
    { nome: "Python",     categoria: "Linguagens de programação", icone: "devicon-python-plain colored",     nivel: "", conheco: true },
    { nome: "JavaScript", categoria: "Linguagens de programação", icone: "devicon-javascript-plain colored", nivel: "", conheco: true },
    { nome: "C++",        categoria: "Linguagens de programação", icone: "devicon-cplusplus-plain colored",  nivel: "", conheco: true },
    { nome: "C#",         categoria: "Linguagens de programação", icone: "devicon-csharp-plain colored",     nivel: "", conheco: true },
    { nome: "Java",       categoria: "Linguagens de programação", icone: "devicon-java-plain colored",       nivel: "", conheco: true },

    // ----- Desenvolvimento web -----
    { nome: "HTML5", categoria: "Desenvolvimento web", icone: "devicon-html5-plain colored", nivel: "", conheco: true },
    { nome: "CSS3",  categoria: "Desenvolvimento web", icone: "devicon-css3-plain colored",  nivel: "", conheco: true },
    { nome: "Flask", categoria: "Desenvolvimento web", icone: "devicon-flask-original",      nivel: "", conheco: true },

    // ----- Dados e bancos de dados -----
    { nome: "SQL Server", categoria: "Dados e bancos de dados", icone: "devicon-microsoftsqlserver-plain colored", nivel: "",              conheco: true },
    { nome: "MySQL",      categoria: "Dados e bancos de dados", icone: "devicon-mysql-plain colored",              nivel: "",              conheco: true },
    { nome: "Excel",      categoria: "Dados e bancos de dados", simbolo: "icone-tabela",                            nivel: "Intermediário", conheco: true },
    { nome: "Power BI",   categoria: "Dados e bancos de dados", simbolo: "icone-grafico",                           nivel: "Dashboards",    conheco: true },

    // ----- Sistemas e ferramentas -----
    { nome: "SAP",    categoria: "Sistemas e ferramentas", simbolo: "icone-camadas",              nivel: "", conheco: true },
    { nome: "Git",    categoria: "Sistemas e ferramentas", icone: "devicon-git-plain colored",    nivel: "", conheco: true },
    { nome: "GitHub", categoria: "Sistemas e ferramentas", icone: "devicon-github-original",      nivel: "", conheco: true }
];


/* ---------- 3. Projetos ----------
   Campos de cada projeto:
   - titulo, descricao
   - tecnologias: lista de textos que viram etiquetas
   - imagem:  caminho da imagem do card (ex.: "assets/img/projetos/estoque.png"). Vazio = mostra as iniciais
   - alt:     descrição da imagem para leitores de tela
   - demo:    link da demonstração ao vivo ou de um vídeo. Vazio = o botão não aparece
   - codigo:  link do repositório no GitHub. Vazio = o botão não aparece
   - exemplo: true = mostra a etiqueta "Exemplo" (use nos que ainda não são seus projetos reais)

   Para ADICIONAR um projeto, copie um bloco inteiro (de { até },) e mude os dados.
   Para REMOVER, apague o bloco inteiro. */
const projetos = [

    {
        titulo: "Sistema de Controle de Estoque",
        descricao: "Sistema web para controle de estoque: cadastro de produtos, entradas e saídas com atualização automática do saldo, histórico com filtros, dashboard com gráficos e relatórios exportáveis em CSV. Usa transações no SQL Server para manter o estoque e o histórico sempre consistentes.",
        tecnologias: ["Python", "Flask", "SQL Server", "JavaScript", "Chart.js"],
        imagem: "assets/img/CARDsistemaEstoque.png",
        alt: "Tela do dashboard do Sistema de Controle de Estoque, com cards de números e gráficos",
        demo: "",
        codigo: "https://github.com/HenriqueJobskkj/sistema-estoque",
        exemplo: false
    },

    {
        titulo: "Portfólio Pessoal",
        descricao: "Este site: portfólio responsivo com tema escuro, conteúdo editável por um arquivo de dados, menu para celular, animações discretas, acessibilidade e formulário de contato funcional.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        imagem: "assets/img/favicon.svg",
        alt: "Tela inicial do portfólio",
        demo: "",
        codigo: "https://henriquejobskkj.github.io",
        exemplo: false
    },

    {
        titulo: "Relogio web",
        descricao: "Relógio digital moderno desenvolvido com HTML, CSS e JavaScript, exibindo horas, minutos, segundos e data atual em tempo real. Possui design responsivo, animações suaves e alternância entre tema claro e escuro.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        imagem: "assets/img/CARDrelogio.png",
        alt: "Tela do relogio web",
        demo: "",
        codigo: "https://github.com/HenriqueJobskkj/Relogio-WEB",
        exemplo: false
    },

    {
        titulo: "Sistema de Cadastro",
        descricao: "Formulário de cadastro com validação dos campos e armazenamento das informações.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        imagem: "",
        alt: "",
        demo: "",
        codigo: "",
        exemplo: true
    }

    /* MODELO PARA UM NOVO PROJETO
    
    {
        titulo: "Nome do projeto",
        descricao: "O que o projeto faz, em uma ou duas frases.",
        tecnologias: ["Tecnologia 1", "Tecnologia 2"],
        imagem: "assets/img/projetos/nome-da-imagem.png",
        alt: "Descrição da imagem",
        demo: "https://link-da-demonstracao",
        codigo: "https://github.com/HenriqueJobskkj/nome-do-repositorio",
        exemplo: false
    }
    */
];
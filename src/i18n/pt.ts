import type { Translation } from "./types";

export const pt: Translation = {
  hero: {
    desc1: "Desenvolvendo sistemas escaláveis,",
    desc2: "aplicações robustas e arquitetura modernas para",
    desc3: "produtos digitais de alta performance.",
    contactLabel: "[ CONTATO ]",
    contactBtn: "INICIAR CONEXÃO",
  },
  scramble: {
    nameLabel: "NOME // ",
    roleLabel: "FUNÇÃO // ",
    expLabel: "EXPERIÊNCIA // ",
    expValue: "6 anos",
    roles: ["Fullstack Developer", "Frontend Developer", "Backend Developer"],
  },
  tools: {
    label: "// ARSENAL DE TECNOLOGIAS",
  },
  experience: {
    sectionTag: "// TRAJETÓRIA",
    sectionLabel: "EXPERIÊNCIA",
    headingWhite: "Processos reais",
    headingRed: "soluções escaláveis",
    headerRight:
      "Atuação em projetos full stack com foco em arquitetura moderna, integrações e evolução contínua de aplicações produtivas.",
    entries: [
      {
        id: "01",
        period: "04/2026 – Atual",
        role: "Senior Python Engineer, Systems Integration",
        description:
          "Integração enterprise real: conectei SAP S/4HANA, Salesforce, Siebel, Oracle e Databricks com Python, FastAPI e Apache Kafka. Em três meses entreguei cerca de 20 integrações cobrindo 47 itens de backlog em 7 repositórios, inclusive uma família de 32 tabelas num único merge request. Cada entrega partiu da especificação funcional e do mapeamento de dados, passou pela validação contra DDL e banco real, e chegou ao contrato OpenAPI publicado. 56 tópicos Kafka com Avro e Schema Registry, dead-letter queues e observabilidade estruturada: mensagem que falha é retida para reprocessamento, não descartada em silêncio.",
      },
      {
        id: "02",
        period: "08/2024 – 04/2026",
        role: "Full Stack Engineer",
        description:
          "Segundo maior contribuidor do front-end da Sphera, plataforma interna de campanhas de marketing de influência: 461 de 1.592 commits em 19 meses com React.js, TypeScript e Next.js. Entreguei exclusividade de influenciadores de ponta a ponta em Python e FastAPI, uma SQLAlchemy hybrid property resolvendo conflitos entre propostas, cenários, campanhas, marcas e clientes. Criei os component sets de campanha e influenciador usados em todas as abas, reduzindo a entrega de uma nova tela de três dias para meio dia.",
      },
      {
        id: "04",
        period: "02/2024 – 08/2024",
        role: "Desenvolvedor Web Full Stack",
        description:
          "Experiência intensa em um ambiente multi-stack real: em seis meses trabalhei com React, Angular, Next.js, Node.js, Python e .NET — às vezes no mesmo sprint. Containerizei serviços com Docker, otimizei queries no PostgreSQL e participei de code reviews que realmente moldaram minha visão sobre arquitetura. A proximidade com os times de produto e UX me ensinou a pensar em funcionalidade antes de tecnologia.",
      },
      {
        id: "05",
        period: "02/2022 – 02/2024",
        role: "Desenvolvedor Web Full Stack",
        description:
          "Dois anos dentro de uma plataforma de comunicação ativa, onde cada mudança afeta usuários reais em tempo real. Fui responsável por integrações com serviços externos, automação do pipeline de deploy e testes, e pela implementação de camadas de segurança — autenticação robusta e proteção de dados sensíveis. Aprendi que em sistemas de comunicação, estabilidade não é diferencial, é pré-requisito.",
      },
      {
        id: "06",
        period: "04/2022 – 03/2023",
        role: "Monitor de Desenvolvimento Web",
        description:
          "Meu ponto de virada: além de desenvolver com Vue.js, Node.js e SQL, eu ensinava. Auxiliar outros alunos me forçou a entender os fundamentos de verdade — não dá pra explicar o que não se compreende. Em paralelo, entregava automações comerciais reais com integrações de API, e documentava cada solução com o cuidado de quem sabe que código sem contexto é código perdido.",
      },
      {
        id: "07",
        period: "07/2020 – 12/2021",
        role: "Desenvolvedor Web Full Stack",
        description:
          "Onde tudo começou: integrei serviços de automação comercial e mobilidade corporativa numa plataforma que precisava crescer sem quebrar. Desenvolvi scripts que eliminavam horas de trabalho manual, implementei criptografia e autenticação multifator antes disso virar pauta obrigatória no mercado, e documentei cada decisão técnica — um hábito que carrego até hoje.",
      },
    ],
  },
  projects: {
    sectionTag: "// SOLUÇÕES",
    sectionLabel: "PROJETOS E CASES",
    headingWhite: "Projetos em",
    headingRed: "produção",
    headerRight:
      "Projetos focados em arquitetura moderna, integração de sistemas e experiências digitais performáticas.",
    accessDenied: "[ ACESSO NEGADO ]",
    confidentialSub: "// PROJETO CONFIDENCIAL",
    inDev: "// EM DESENVOLVIMENTO",
    viewLive: "VER EM PRODUÇÃO →",
    viewGithub: "VER NO GITHUB →",
    denied: "[ NEGADO ]",
    confidentialCard: "PROJETO CONFIDENCIAL ×",
    public: [
      {
        id: "P.010",
        description:
          "GUI para modding de voz de Monster Hunter World. Abre .nbnk/.bnk (Wwise SoundBank), mapeia grupos de ação via hierarquia HIRC, extrai e substitui áudio com match automático por duração.",
      },
      {
        id: "P.001",
        description:
          "Companion app completo para Monster Hunter World em PT-BR. Árvore de ingredientes interativa, rastreador de missões com filtros por rank/tipo/objetivo e árvore de forja de armas e armaduras.",
      },
      {
        id: "P.002",
        description:
          "Aplicativo completo para o board game Digimon Board Clash. Sistema de combate D20, evolução com XP oculto, 466 Digimons cadastrados e painel administrativo para partidas de 2 a 6 jogadores.",
      },
      {
        id: "P.003",
        description:
          "App desktop multiplataforma para controle financeiro pessoal. Gerenciamento de transações por categorias, relatórios de gastos e receitas com SQLite para uso 100% offline.",
      },
      {
        id: "P.004",
        description:
          "Ferramenta web para criação de cards customizados para o board game de Resident Evil 3. Geração de imagens via canvas, importação por spec e deploy automatizado na Vercel.",
      },
      {
        id: "P.005",
        description:
          "Guia interativo e rastreador de missões para Divinity: Original Sin 2. Interface dark responsiva com progresso persistido localmente via SQLite (sql.js), organizado por ato.",
      },
      {
        id: "P.006",
        description:
          "Catálogo digital com área admin restrita ao ambiente de desenvolvimento. Exporta snapshot do banco SQLite no build para operar como site estático em produção sem custo de API.",
      },
      {
        id: "P.008",
        description:
          "Site institucional em Next.js com suporte a internacionalização. Seções de hero, projetos, serviços e contato com design responsivo e traduções gerenciadas via arquivos de configuração.",
      },
      {
        id: "P.009",
        description:
          "Fork do boss tracker para Elden Ring traduzido e adaptado integralmente para PT-BR. Rastreia chefes em tempo real via leitura do save file, overlay para OBS, suporte ao DLC Shadow of the Erdtree e instalador Windows.",
      },
    ],
    confidential: [
      {
        id: "C.001",
        description:
          "Serviço de integração entre plataforma comercial proprietária e APIs externas de parceiros. Processamento assíncrono, assinatura HMAC e sincronização bidirecional de inventário. Projeto de empresa do setor logístico.",
      },
      {
        id: "C.002",
        description:
          "Sistema de autenticação para SaaS multi-tenant com isolamento de dados por organização. JWT com rotação de refresh tokens, permissões granulares e suporte a SSO. Projeto interno de empresa B2B.",
      },
      {
        id: "C.003",
        description:
          "Scripts de automação para onboarding, relatórios e fluxos operacionais recorrentes. Integração com APIs externas via webhooks, agendamento com cron e logs estruturados. Substituiu trabalho manual da equipe em empresa de comunicação corporativa.",
      },
      {
        id: "C.004",
        description:
          "Painel de métricas em tempo real para monitoramento de operações de campo. KPIs configuráveis, alertas e exportação de relatórios. Utilizado por equipes de gestão em empresa de mobilidade corporativa.",
      },
      {
        id: "C.005",
        description:
          "Plataforma B2B com catálogo dinâmico, gestão de pedidos e gateway de pagamento integrado. Multi-estoque, precificação por perfil de cliente e painel administrativo. Cliente do setor varejista.",
      },
      {
        id: "C.006",
        description:
          "Módulo de comunicação em tempo real integrado à plataforma de atendimento. WebSockets com salas por contexto, histórico persistido e notificações push. Componente crítico com milhares de usuários ativos.",
      },
      {
        id: "C.007",
        description:
          "Containerização de plataforma multi-stack com ambientes dev, staging e produção isolados. Pipelines de CI/CD, health checks e automação de rollback. Desenvolvido para stack interna de empresa de tecnologia.",
      },
      {
        id: "C.008",
        description:
          "CRM para equipe comercial de empresa B2B com funil de vendas customizável, automação de follow-ups, integração com e-mail e relatórios de performance por consultor. Uso interno, não disponível publicamente.",
      },
      {
        id: "C.009",
        description:
          "Plataforma de marketing de influenciadores com painel administrativo em Next.js e API em FastAPI. Gestão de campanhas, propostas, contratos e marcas com fluxos complexos. Deploy em Azure com Docker e pipelines de CI/CD.",
      },
    ],
  },
  about: {
    sectionTag1: "// SOBRE O DESENVOLVEDOR",
    headingWhite: "Tecnologia com",
    headingRed: "visão estratégica",
    headerRight:
      "Engenheiro de software com mais de 6 anos de experiência em desenvolvimento full stack, especializado em aplicações modernas, integrações robustas e arquitetura escalável.",
    cards: [
      {
        category: "// PERFIL",
        title: "Mais de 6 anos criando aplicações modernas e escaláveis",
        desc: "Experiência em desenvolvimento full stack com foco em performance,\narquitetura moderna e integrações robustas.",
      },
      {
        category: "// ESPECIALIDADES",
        title: "React, Node.js, Python e ecossistemas modernos",
        desc: "Atuação prática com APIs REST, automações, componentização e\ndesenvolvimento orientado à escalabilidade.",
      },
      {
        category: "// DIFERENCIAL",
        title: "Código limpo, visão estratégica e evolução contínua",
        desc: "Colaboração próxima entre produto, design e engenharia para\nconstruir experiências digitais mais sólidas.",
      },
    ],
  },
  faq: {
    sectionTag: "// CONTATO",
    headingWhite: "Perguntas",
    headingRed: "frequentes",
    headerRight:
      "Dúvidas comuns sobre experiência, stack, forma de trabalho e disponibilidade para novos projetos.",
    items: [
      {
        q: "Você se considera Pleno ou Sênior?",
        a: "Hoje atuo entre os níveis pleno e sênior, dependendo do escopo e responsabilidades da posição. Em geral minha atuação é mais próxima de pleno, mas já assumi projetos integralmente, conduzindo decisões técnicas, manutenção e evolução das aplicações.",
      },
      {
        q: "Você trabalhou com Angular? Em quais projetos?",
        a: "Sim. Parte da minha experiência com Angular aconteceu em software houses, onde atuei em múltiplos projetos simultaneamente. Como eram ambientes com várias demandas e tecnologias diferentes, optei por resumir algumas experiências no currículo destacando os pontos mais relevantes.",
      },
      {
        q: "Como você usa IA no seu workflow?",
        a: "Hoje utilizo ferramentas como ChatGPT, Cursor, Claude, Codex e GitHub Copilot para apoiar arquitetura, revisão de código, refatorações, debug, documentação e ganho de produtividade. Uso a IA como apoio no desenvolvimento, sempre validando e ajustando as soluções antes da implementação.",
      },
      {
        q: "Qual foi seu projeto mais desafiador?",
        a: "Um dos projetos mais desafiadores foi uma plataforma de gerenciamento de campanhas com alto volume de dados e regras de negócio complexas. O maior desafio foi equilibrar performance, experiência do usuário e manutenção da aplicação, exigindo otimizações tanto no frontend quanto na integração entre sistemas.",
      },
      {
        q: "Como funciona seu fluxo de desenvolvimento?",
        a: "Normalmente começo entendendo a regra de negócio e o impacto da tarefa no produto. Depois analiso o código existente, implemento seguindo padrões do projeto, realizo testes, reviso o código e acompanho o processo até o PR/deploy.",
      },
      {
        q: "Como você lida com código legado?",
        a: "Procuro primeiro entender contexto e impacto antes de alterar qualquer coisa. Prefiro evoluir gradualmente, reduzindo débito técnico aos poucos e evitando mudanças grandes sem necessidade.",
      },
      {
        q: "Como lida com feedback em code review?",
        a: "Vejo code review como oportunidade de melhoria. Gosto da troca técnica porque normalmente ela ajuda a aumentar a qualidade do código e evoluir a forma de pensar soluções.",
      },
      {
        q: "Como você aprendeu tantas tecnologias?",
        a: "Boa parte veio da atuação em software houses, onde diferentes projetos exigiam stacks variadas. Isso me deu bastante adaptabilidade e facilidade para aprender novas tecnologias rapidamente.",
      },
      {
        q: "Qual seu nível de inglês?",
        a: "Tenho inglês avançado para leitura, escrita e comunicação em ambientes profissionais. Consigo participar de reuniões técnicas, compreender documentação e interagir em contextos internacionais.",
      },
      {
        q: "Por que deveríamos contratar você?",
        a: "Além da experiência técnica, gosto de entender o contexto do produto e pensar no impacto real das soluções. Tento unir qualidade técnica, colaboração e foco em resolver problemas de forma simples e sustentável.",
      },
    ],
  },
  cta: {
    tagLeft: "// PRONTO PARA ESCALAR",
    line1: "TECNOLOGIA COM",
    line2: "ESTRUTURA,",
    line3: "PERFORMANCE",
    line4: "E ESCALABILIDADE.",
    desc: "Projetos modernos exigem arquitetura sólida, código limpo e decisões inteligentes desde a base.",
    btn: "ENTRAR EM CONTATO →",
  },
  footer: {
    tags: ["Desenvolvimento Full Stack", "Arquitetura Moderna", "Integrações & Automação"],
    servicesLabel: "// SERVIÇOS",
    services: ["Ferramentas", "Projetos", "Experiências", "FAQ", "Contato"],
    contactLabel: "// CONTATO",
    contactMe: "Contacte-me",
    copyright: "© 2025 Crimsom Mind Tech – Todos os direitos reservados",
  },
  nav: {
    items: [
      { label: "Ferramentas", href: "#ferramentas" },
      { label: "Projetos",    href: "#projetos" },
      { label: "Experiência", href: "#experiencia" },
      { label: "Sobre",       href: "#sobre" },
      { label: "FAQ",         href: "#faq" },
    ],
    contact: "Contato",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },
};

"use client";

import { useState, useEffect } from "react";
import {
  ProjectsSection,
  ProjectsInner,
  SectionHeader,
  HeaderLeft,
  SectionNumber,
  SectionTag,
  HeaderCenter,
  HeadingWhite,
  HeadingRed,
  HeaderRight,
  Divider,
  ProjectsGrid,
  MarqueeTrack,
  MarqueeRow,
  ProjectCard,
  CardImageWrap,
  CardImageEl,
  CardImageOverlay,
  CardTop,
  CardName,
  CardTech,
  CardDescription,
  CardDeploy,
  AccessOverlay,
  AccessTitle,
  AccessSub,
} from "./styles";

interface Project {
  id: string;
  name: string;
  tech: string;
  year: string;
  description: string;
  url?: string;
  image?: string;
  images?: string[]; /* múltiplas imagens — ativa cycling automático */
  inDev?: boolean;   /* exibe badge "em desenvolvimento" */
}

/* ── Projetos públicos (GitHub) ── */
const PROJECTS_PUBLIC: Project[] = [
  {
    id: "P.010",
    name: "MHW Voice Modder",
    tech: "PYTHON",
    year: "2026",
    url: "https://github.com/felipesantosdd/mhw-voice-modder",
    images: ["/projects/mhw-voice-modder.png"],
    description:
      "GUI para modding de voz de Monster Hunter World. Abre .nbnk/.bnk (Wwise SoundBank), mapeia grupos de ação via hierarquia HIRC, extrai e substitui áudio com match automático por duração.",
  },
  {
    id: "P.001",
    name: "Astera Data Bank",
    tech: "NEXT.JS",
    year: "2025",
    url: "https://astera-data-bank.vercel.app",
    inDev: true,
    images: [
      "/projects/astera-1.png",
      "/projects/astera-2.png",
      "/projects/astera-3.png",
    ],
    description:
      "Companion app completo para Monster Hunter World em PT-BR. Árvore de ingredientes interativa, rastreador de missões com filtros por rank/tipo/objetivo e árvore de forja de armas e armaduras.",
  },
  {
    id: "P.002",
    name: "Digimon Board Clash",
    tech: "NEXT.JS",
    year: "2025",
    url: "https://digimon-board-clash-assistant-1fdh.vercel.app",
    images: [
      "/projects/digimon-1.png",
      "/projects/digimon-2.png",
      "/projects/digimon-3.png",
      "/projects/digimon-4.png",
      "/projects/digimon-5.png",
      "/projects/digimon-6.png",
      "/projects/digimon-7.png",
    ],
    description:
      "Aplicativo completo para o board game Digimon Board Clash. Sistema de combate D20, evolução com XP oculto, 466 Digimons cadastrados e painel administrativo para partidas de 2 a 6 jogadores.",
  },
  {
    id: "P.003",
    name: "Cash Control",
    tech: "ELECTRON",
    year: "2025",
    url: "https://github.com/felipesantosdd/cash-control",
    description:
      "App desktop multiplataforma para controle financeiro pessoal. Gerenciamento de transações por categorias, relatórios de gastos e receitas com SQLite para uso 100% offline.",
  },
  {
    id: "P.004",
    name: "RE3 Card Creator",
    tech: "TYPESCRIPT",
    year: "2026",
    url: "https://re-board-game-card-creator.vercel.app",
    images: [
      "/projects/re-1.png",
      "/projects/re-2.png",
      "/projects/re-3.png",
    ],
    description:
      "Ferramenta web para criação de cards customizados para o board game de Resident Evil 3. Geração de imagens via canvas, importação por spec e deploy automatizado na Vercel.",
  },
  {
    id: "P.005",
    name: "Divinit-2-Path",
    tech: "VITE",
    year: "2026",
    url: "https://divinit-2-path.vercel.app",
    inDev: true,
    images: [
      "/projects/divinit-2-path.png",
      "/projects/divinity-1.png",
      "/projects/divinity-2.png",
    ],
    description:
      "Guia interativo e rastreador de missões para Divinity: Original Sin 2. Interface dark responsiva com progresso persistido localmente via SQLite (sql.js), organizado por ato.",
  },
  {
    id: "P.006",
    name: "Recheiae",
    tech: "PYTHON",
    year: "2025",
    url: "https://github.com/felipesantosdd/Recheiae",
    images: [
      "/projects/recheiae-1.png",
      "/projects/recheiae-2.png",
      "/projects/recheiae-3.png",
    ],
    description:
      "Catálogo digital com área admin restrita ao ambiente de desenvolvimento. Exporta snapshot do banco SQLite no build para operar como site estático em produção sem custo de API.",
  },
  {
    id: "P.008",
    name: "Talessa",
    tech: "NEXT.JS",
    year: "2025",
    url: "https://github.com/felipesantosdd/talessa-page",
    inDev: true,
    images: [
      "/projects/talessa-1.png",
      "/projects/talessa-2.png",
    ],
    description:
      "Site institucional em Next.js com suporte a internacionalização. Seções de hero, projetos, serviços e contato com design responsivo e traduções gerenciadas via arquivos de configuração.",
  },
  {
    id: "P.009",
    name: "Crônicas do Maculado",
    tech: "PYTHON",
    year: "2025",
    url: "https://github.com/felipesantosdd/Cronicas-do-Maculado",
    images: [
      "/projects/maculado-1.png",
      "/projects/maculado-2.png",
      "/projects/maculado-3.png",
    ],
    description:
      "Fork do boss tracker para Elden Ring traduzido e adaptado integralmente para PT-BR. Rastreia chefes em tempo real via leitura do save file, overlay para OBS, suporte ao DLC Shadow of the Erdtree e instalador Windows.",
  },
];

/* ── Projetos confidenciais (clientes / empresas) ── */
const PROJECTS_CONFIDENTIAL: Project[] = [
  {
    id: "C.001",
    name: "Sistema de Integração",
    tech: "PYTHON",
    year: "2025",
    description:
      "Serviço de integração entre plataforma comercial proprietária e APIs externas de parceiros. Processamento assíncrono, assinatura HMAC e sincronização bidirecional de inventário. Projeto de empresa do setor logístico.",
  },
  {
    id: "C.002",
    name: "Autenticação Multi-tenant",
    tech: "TYPESCRIPT",
    year: "2025",
    description:
      "Sistema de autenticação para SaaS multi-tenant com isolamento de dados por organização. JWT com rotação de refresh tokens, permissões granulares e suporte a SSO. Projeto interno de empresa B2B.",
  },
  {
    id: "C.003",
    name: "Automação de Processos",
    tech: "PYTHON",
    year: "2023",
    description:
      "Scripts de automação para onboarding, relatórios e fluxos operacionais recorrentes. Integração com APIs externas via webhooks, agendamento com cron e logs estruturados. Substituiu trabalho manual da equipe em empresa de comunicação corporativa.",
  },
  {
    id: "C.004",
    name: "Dashboard Analytics",
    tech: "REACT",
    year: "2024",
    description:
      "Painel de métricas em tempo real para monitoramento de operações de campo. KPIs configuráveis, alertas e exportação de relatórios. Utilizado por equipes de gestão em empresa de mobilidade corporativa.",
  },
  {
    id: "C.005",
    name: "Plataforma E-commerce",
    tech: "NEXT.JS",
    year: "2024",
    description:
      "Plataforma B2B com catálogo dinâmico, gestão de pedidos e gateway de pagamento integrado. Multi-estoque, precificação por perfil de cliente e painel administrativo. Cliente do setor varejista.",
  },
  {
    id: "C.006",
    name: "Chat em Tempo Real",
    tech: "NODE.JS",
    year: "2024",
    description:
      "Módulo de comunicação em tempo real integrado à plataforma de atendimento. WebSockets com salas por contexto, histórico persistido e notificações push. Componente crítico com milhares de usuários ativos.",
  },
  {
    id: "C.007",
    name: "Orquestração de Infra",
    tech: "DOCKER",
    year: "2024",
    description:
      "Containerização de plataforma multi-stack com ambientes dev, staging e produção isolados. Pipelines de CI/CD, health checks e automação de rollback. Desenvolvido para stack interna de empresa de tecnologia.",
  },
  {
    id: "C.008",
    name: "CRM Corporativo",
    tech: "ANGULAR",
    year: "2023",
    description:
      "CRM para equipe comercial de empresa B2B com funil de vendas customizável, automação de follow-ups, integração com e-mail e relatórios de performance por consultor. Uso interno, não disponível publicamente.",
  },
  {
    id: "C.009",
    name: "Spark — Sphera",
    tech: "NEXT.JS",
    year: "2026",
    description:
      "Plataforma de marketing de influenciadores com painel administrativo em Next.js e API em FastAPI. Gestão de campanhas, propostas, contratos e marcas com fluxos complexos. Deploy em Azure com Docker e pipelines de CI/CD.",
  },
];

/* ── Card ── */
function Card({ project }: { project: Project }) {
  const [denied, setDenied] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  /* Cycling automático quando o projeto tem múltiplas imagens */
  useEffect(() => {
    if (!project.images || project.images.length < 2) return;
    const timer = setInterval(() => {
      setActiveImg((i) => (i + 1) % project.images!.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [project.images]);

  const handleClick = () => {
    if (project.url) {
      window.open(project.url, "_blank", "noopener,noreferrer");
    } else {
      setDenied(true);
      setTimeout(() => setDenied(false), 2500);
    }
  };

  /* Resolve qual imagem exibir: images[] tem prioridade sobre image */
  const hasImages = project.images && project.images.length > 0;
  const hasSingleImage = !!project.image;
  const showImage = hasImages || hasSingleImage;

  return (
    <ProjectCard $denied={denied} onClick={handleClick}>
      {denied && (
        <AccessOverlay>
          <AccessTitle>[ ACESSO NEGADO ]</AccessTitle>
          <AccessSub>// PROJETO CONFIDENCIAL</AccessSub>
          <AccessSub>CLEARANCE LEVEL INSUFFICIENT</AccessSub>
        </AccessOverlay>
      )}

      {showImage && (
        <CardImageWrap>
          {hasImages ? (
            /* Cross-fade entre as imagens do array */
            project.images!.map((src, i) => (
              <CardImageEl
                key={src}
                src={src}
                alt={`${project.name} — tela ${i + 1}`}
                style={{
                  position: i === 0 ? "relative" : "absolute",
                  inset: 0,
                  opacity: i === activeImg ? 1 : 0,
                  transition: "opacity 0.8s ease",
                  zIndex: i === activeImg ? 1 : 0,
                }}
              />
            ))
          ) : (
            <CardImageEl src={project.image} alt={project.name} />
          )}
          <CardImageOverlay style={{ zIndex: 2 }} />
        </CardImageWrap>
      )}

      <CardTop $compact={showImage}>
        <CardName>{project.name}</CardName>
        <CardTech>{project.tech}</CardTech>
      </CardTop>

      {!showImage && (
        <CardDescription>{project.description}</CardDescription>
      )}

      <CardDeploy $denied={denied} $public={!!project.url} $inDev={project.inDev}>
        {project.inDev
          ? "// EM DESENVOLVIMENTO"
          : project.url
          ? project.images
            ? "VER EM PRODUÇÃO →"
            : "VER NO GITHUB →"
          : denied
          ? "[ NEGADO ]"
          : "PROJETO CONFIDENCIAL ×"}
      </CardDeploy>
    </ProjectCard>
  );
}

/* ── Section ── */
export default function Projects() {
  const repeat = (arr: Project[], n = 8) =>
    Array(n).fill(arr).flat() as Project[];

  const row1 = repeat(PROJECTS_PUBLIC);
  const row2 = repeat(PROJECTS_CONFIDENTIAL);

  return (
    <ProjectsSection>
      <ProjectsInner>
        <SectionHeader>
          <HeaderLeft>
            <SectionNumber>04</SectionNumber>
            <SectionTag>// SOLUÇÕES</SectionTag>
            <SectionTag>PROJETOS E CASES</SectionTag>
          </HeaderLeft>

          <HeaderCenter>
            <HeadingWhite>Projetos em</HeadingWhite>
            <HeadingRed>produção</HeadingRed>
          </HeaderCenter>

          <HeaderRight>
            Projetos focados em arquitetura moderna, integração de sistemas
            e experiências digitais performáticas.
          </HeaderRight>
        </SectionHeader>

        <Divider />
      </ProjectsInner>

      <ProjectsGrid>
        <MarqueeTrack>
          <MarqueeRow $dir="left">
            {row1.map((p, i) => (
              <Card key={`r1-${i}`} project={p} />
            ))}
          </MarqueeRow>
        </MarqueeTrack>

        <MarqueeTrack>
          <MarqueeRow $dir="right">
            {row2.map((p, i) => (
              <Card key={`r2-${i}`} project={p} />
            ))}
          </MarqueeRow>
        </MarqueeTrack>
      </ProjectsGrid>
    </ProjectsSection>
  );
}

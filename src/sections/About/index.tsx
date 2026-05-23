"use client";

import {
  AboutSection,
  AboutInner,
  SectionHeader,
  HeaderLeft,
  SectionNumber,
  SectionTag,
  HeaderCenter,
  HeadingWhite,
  HeadingRed,
  HeaderRight,
  AboutSplit,
  PhotoColumn,
  PhotoImage,
  PhotoEdgeFade,
  PhotoLogo,
  CMTLabel,
  CardsColumn,
  InfoCard,
  CardIconWrap,
  CardIcon,
  CardBody,
  CardCategory,
  CardTitle,
  CardDesc,
} from "./styles";

/* ── Info cards data ── */
const CARDS = [
  {
    icon: "M.",
    category: "// PERFIL",
    title: "Mais de 6 anos criando aplicações modernas e escaláveis",
    desc: "Experiência em desenvolvimento full stack com foco em performance,\narquitetura moderna e integrações robustas.",
  },
  {
    icon: "▽.",
    category: "// ESPECIALIDADES",
    title: "React, Node.js, Python e ecossistemas modernos",
    desc: "Atuação prática com APIs REST, automações, componentização e\ndesenvolvimento orientado à escalabilidade.",
  },
  {
    icon: "✕.",
    category: "// DIFERENCIAL",
    title: "Código limpo, visão estratégica e evolução contínua",
    desc: "Colaboração próxima entre produto, design e engenharia para\nconstruir experiências digitais mais sólidas.",
  },
];

/* ── Component ── */
export default function About() {
  return (
    <AboutSection>
      <AboutInner>
        <SectionHeader>
          <HeaderLeft>
            <SectionNumber>05</SectionNumber>
            <SectionTag>// SOBRE O DESENVOLVEDOR</SectionTag>
            <SectionTag>FELIPE S. OLIVEIRA</SectionTag>
          </HeaderLeft>

          <HeaderCenter>
            <HeadingWhite>Tecnologia com</HeadingWhite>
            <HeadingRed>visão estratégica</HeadingRed>
          </HeaderCenter>

          <HeaderRight>
            Engenheiro de software com mais de 6 anos de experiência em
            desenvolvimento full stack, especializado em aplicações modernas,
            integrações robustas e arquitetura escalável.
          </HeaderRight>
        </SectionHeader>
        {/* Split: photo + cards */}
        <AboutSplit>
        {/* ── Photo ── */}
        <PhotoColumn>
          <PhotoImage src="/about.jpg" alt="Felipe S. Oliveira" />
          <PhotoEdgeFade />

          <PhotoLogo src="/logo.png" alt="CMT" />
          <CMTLabel>// CRIMSON MIND TECH</CMTLabel>
        </PhotoColumn>

        {/* ── Info cards ── */}
        <CardsColumn>
          {CARDS.map((card) => (
            <InfoCard key={card.category}>
              <CardIconWrap>
                <CardIcon>{card.icon}</CardIcon>
              </CardIconWrap>
              <CardBody>
                <CardCategory>{card.category}</CardCategory>
                <CardTitle>{card.title}</CardTitle>
                <CardDesc>{card.desc}</CardDesc>
              </CardBody>
            </InfoCard>
          ))}
        </CardsColumn>
        </AboutSplit>
      </AboutInner>
    </AboutSection>
  );
}

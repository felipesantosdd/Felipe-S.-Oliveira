"use client";

import { useTranslation } from "@/contexts/LanguageContext";
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

const CARD_ICONS = ["M.", "▽.", "✕."];

/* ── Component ── */
export default function About() {
  const { t } = useTranslation();
  return (
    <AboutSection>
      <AboutInner>
        <SectionHeader>
          <HeaderLeft>
            <SectionNumber>05</SectionNumber>
            <SectionTag>{t.about.sectionTag1}</SectionTag>
            <SectionTag>FELIPE S. OLIVEIRA</SectionTag>
          </HeaderLeft>

          <HeaderCenter>
            <HeadingWhite>{t.about.headingWhite}</HeadingWhite>
            <HeadingRed>{t.about.headingRed}</HeadingRed>
          </HeaderCenter>

          <HeaderRight>{t.about.headerRight}</HeaderRight>
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
          {t.about.cards.map((card, i) => (
            <InfoCard key={card.category}>
              <CardIconWrap>
                <CardIcon>{CARD_ICONS[i]}</CardIcon>
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

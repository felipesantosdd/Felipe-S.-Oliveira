"use client";

import HeroBg from "@/components/ui/HeroBg";
import HeroDecorators from "@/components/ui/HeroDecorators";
import ScrambleInfoRows from "@/components/ui/ScrambleInfoRows";
import {
  HeroSection,
  HeroFrame,
  DetailsSubSection,
  FirstContainer,
  LogoSpinWrapper,
  LogoSpin3D,
  LogoFace,
  LogoEdgeSlab,
  SecondContainer,
  SlashText,
  DetailsSecondarySubSection,
  DescriptionCell,
  DescriptionText,
  DescriptionHighlight,
  StatisticCell,
  StatRow,
  StatNumber,
  StatPlus,
  StatLabel,
  ButtonCell,
  ButtonLabel,
  ButtonBottom,
  ButtonTitle,
  ButtonIcon,
} from "./styles";

export default function Hero() {
  return (
    <HeroSection>
      <HeroBg />
      <HeroDecorators />
      <HeroFrame>

        {/* ── Top row: "s+" + info + "///" ── */}
        <DetailsSubSection>
          <FirstContainer>
            <LogoSpinWrapper>
              <LogoSpin3D>
                <LogoFace>
                  <img src="/logo.png" alt="CMT" />
                </LogoFace>
                <LogoFace $back>
                  <img src="/logo.png" alt="CMT" />
                </LogoFace>
                {Array.from({ length: 8 }).map((_, i) => (
                  <LogoEdgeSlab
                    key={i}
                    style={{ transform: `translateZ(${-4 + i * (8 / 7)}px)` }}
                  />
                ))}
              </LogoSpin3D>
            </LogoSpinWrapper>

            <ScrambleInfoRows />
          </FirstContainer>

          <SecondContainer>
            <SlashText>///</SlashText>
          </SecondContainer>
        </DetailsSubSection>

        {/* ── Bottom row: description | stat | button ── */}
        <DetailsSecondarySubSection>

          <DescriptionCell>
            <DescriptionText>
              Desenvolvendo sistemas escaláveis,{" "}
              <DescriptionHighlight>
                aplicações robustas e arquitetura modernas para
              </DescriptionHighlight>{" "}
              produtos digitais de alta performance.
            </DescriptionText>
          </DescriptionCell>

          <StatisticCell>
            <StatRow>
              <StatNumber>100</StatNumber>
              <StatPlus>+</StatPlus>
            </StatRow>
            <StatLabel>DEPLOYS</StatLabel>
          </StatisticCell>

          <ButtonCell
            as="a"
            href="https://wa.me/5535999582766"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ButtonLabel>[ CONTATO ]</ButtonLabel>
            <ButtonBottom>
              <ButtonTitle>INICIAR CONEXÃO</ButtonTitle>
              <ButtonIcon>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6H10M10 6L7 3M10 6L7 9"
                    stroke="url(#arrow-grad)"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="arrow-grad" x1="0" y1="0" x2="12" y2="0">
                      <stop offset="0%" stopColor="#991B1B" />
                      <stop offset="100%" stopColor="#DC2626" />
                    </linearGradient>
                  </defs>
                </svg>
              </ButtonIcon>
            </ButtonBottom>
          </ButtonCell>

        </DetailsSecondarySubSection>

      </HeroFrame>
    </HeroSection>
  );
}

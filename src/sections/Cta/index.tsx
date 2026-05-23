"use client";

import {
  CtaSection,
  CtaInner,
  CtaTopBar,
  CtaTagLeft,
  CtaTagRight,
  CtaHeading,
  CtaLineRed,
  CtaLineWhite,
  StripeGroup,
  Stripe,
  CtaBottomBar,
  CtaDesc,
  CtaButton,
} from "./styles";

export default function Cta() {
  return (
    <CtaSection>
      <StripeGroup>
        {Array.from({ length: 8 }).map((_, i) => <Stripe key={i} />)}
      </StripeGroup>

      <CtaInner>
        <CtaTopBar>
          <CtaTagLeft>// PRONTO PARA ESCALAR</CtaTagLeft>
          <CtaTagRight>CORE SYSTEM — ACTIVE</CtaTagRight>
        </CtaTopBar>

        <CtaHeading>
          <CtaLineRed>TECNOLOGIA COM</CtaLineRed>
          <CtaLineWhite>ESTRUTURA,</CtaLineWhite>
          <CtaLineWhite>PERFORMANCE</CtaLineWhite>
          <CtaLineRed>E ESCALABILIDADE.</CtaLineRed>
        </CtaHeading>

        <CtaBottomBar>
          <CtaDesc>
            Projetos modernos exigem arquitetura sólida, código
            limpo e decisões inteligentes desde a base.
          </CtaDesc>

          <CtaButton
            href="https://wa.me/5535999582766"
            target="_blank"
            rel="noopener noreferrer"
          >
            ENTRAR EM CONTATO →
          </CtaButton>
        </CtaBottomBar>
      </CtaInner>
    </CtaSection>
  );
}

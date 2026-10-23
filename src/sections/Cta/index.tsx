"use client";

import { useTranslation } from "@/contexts/LanguageContext";
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
  const { t } = useTranslation();
  return (
    <CtaSection>
      <StripeGroup>
        {Array.from({ length: 8 }).map((_, i) => <Stripe key={i} />)}
      </StripeGroup>

      <CtaInner>
        <CtaTopBar>
          <CtaTagLeft>{t.cta.tagLeft}</CtaTagLeft>
          <CtaTagRight>CORE SYSTEM — ACTIVE</CtaTagRight>
        </CtaTopBar>

        <CtaHeading>
          <CtaLineRed>{t.cta.line1}</CtaLineRed>
          <CtaLineWhite>{t.cta.line2}</CtaLineWhite>
          <CtaLineWhite>{t.cta.line3}</CtaLineWhite>
          <CtaLineRed>{t.cta.line4}</CtaLineRed>
        </CtaHeading>

        <CtaBottomBar>
          <CtaDesc>{t.cta.desc}</CtaDesc>

          <CtaButton
            href="https://wa.me/5535999582766"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.cta.btn}
          </CtaButton>
        </CtaBottomBar>
      </CtaInner>
    </CtaSection>
  );
}

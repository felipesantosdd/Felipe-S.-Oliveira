"use client";

import { useState } from "react";
import { useTranslation } from "@/contexts/LanguageContext";
import {
  FaqSection,
  FaqInner,
  SectionHeader,
  HeaderLeft,
  SectionNumber,
  SectionTag,
  HeaderCenter,
  HeadingWhite,
  HeadingRed,
  HeaderRight,
  Divider,
  FaqList,
  FaqItem,
  FaqRow,
  FaqNumber,
  FaqQ,
  FaqN,
  FaqQuestion,
  FaqToggle,
  FaqAnswer,
  FaqAnswerInner,
} from "./styles";

export default function Faq() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <FaqSection>
      <FaqInner>
        <SectionHeader>
          <HeaderLeft>
            <SectionNumber>06</SectionNumber>
            <SectionTag>{t.faq.sectionTag}</SectionTag>
            <SectionTag>FAQ</SectionTag>
          </HeaderLeft>

          <HeaderCenter>
            <HeadingWhite>{t.faq.headingWhite}</HeadingWhite>
            <HeadingRed>{t.faq.headingRed}</HeadingRed>
          </HeaderCenter>

          <HeaderRight>{t.faq.headerRight}</HeaderRight>
        </SectionHeader>

        <Divider />

        <FaqList>
          {t.faq.items.map((faq, i) => {
            const isOpen = openIndex === i;
            const num = String(i + 1).padStart(2, "0");

            return (
              <FaqItem key={i}>
                <FaqRow onClick={() => toggle(i)} aria-expanded={isOpen}>
                  <FaqNumber>
                    <FaqQ>Q.</FaqQ>
                    <FaqN>{num}</FaqN>
                  </FaqNumber>

                  <FaqQuestion>{faq.q}</FaqQuestion>

                  <FaqToggle $open={isOpen}>+</FaqToggle>
                </FaqRow>

                <FaqAnswer $open={isOpen}>
                  <FaqAnswerInner>{faq.a}</FaqAnswerInner>
                </FaqAnswer>
              </FaqItem>
            );
          })}
        </FaqList>
      </FaqInner>
    </FaqSection>
  );
}

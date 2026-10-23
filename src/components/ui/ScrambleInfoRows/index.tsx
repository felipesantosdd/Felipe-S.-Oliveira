"use client";

import styled from "styled-components";
import { useTextScramble } from "@/hooks/useTextScramble";
import { useTranslation } from "@/contexts/LanguageContext";

/* ── Styles ── */
const Rows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-bottom: 8px;

  @media (max-width: 768px) {
    align-items: center;
    padding-bottom: 0;
  }
`;

const Row = styled.span`
  display: flex;
  align-items: center;
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 18px;
  line-height: 15px;
  letter-spacing: 1.2px;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Label = styled.span`
  color: #6b7280;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Value = styled.span`
  color: #f5f5f5;
  min-width: 18ch; /* evita layout shift durante o scramble */

  @media (max-width: 768px) {
    min-width: unset;
  }
`;

const NOME_VALUES = ["Felipe S. Oliveira", "Crimson Mind Tech"];

/* ── Componente ── */
export default function ScrambleInfoRows() {
  const { t } = useTranslation();
  const nome = useTextScramble(NOME_VALUES, 0);
  const funcao = useTextScramble(t.scramble.roles, 1200);
  const experiencia = useTextScramble([t.scramble.expValue], 0);

  return (
    <Rows>
      <Row>
        <Label>{t.scramble.nameLabel}</Label>
        <Value>{nome}</Value>
      </Row>
      <Row>
        <Label>{t.scramble.roleLabel}</Label>
        <Value>{funcao}</Value>
      </Row>
      <Row>
        <Label>{t.scramble.expLabel}</Label>
        <Value>{experiencia}</Value>
      </Row>
    </Rows>
  );
}

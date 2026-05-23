"use client";

import styled from "styled-components";
import { useTextScramble } from "@/hooks/useTextScramble";

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

/* ── Dados ── */
const NOME_VALUES = ["Felipe S. Oliveira", "Crimson Mind Tech"];
const FUNCAO_VALUES = [
  "Fullstack Developer",
  "Frontend Developer",
  "Backend Developer",
];
const EXPERIENCIA_VALUE = ["6 anos"];

/* ── Componente ── */
export default function ScrambleInfoRows() {
  // offsets escalonados para não mudarem todos ao mesmo tempo
  const nome = useTextScramble(NOME_VALUES, 0);
  const funcao = useTextScramble(FUNCAO_VALUES, 1200);
  const experiencia = useTextScramble(EXPERIENCIA_VALUE, 0);

  return (
    <Rows>
      <Row>
        <Label>NOME //&nbsp;</Label>
        <Value>{nome}</Value>
      </Row>
      <Row>
        <Label>FUNÇÃO //&nbsp;</Label>
        <Value>{funcao}</Value>
      </Row>
      <Row>
        <Label>EXPERIÊNCIA //&nbsp;</Label>
        <Value>{experiencia}</Value>
      </Row>
    </Rows>
  );
}

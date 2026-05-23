"use client";

import styled, { keyframes } from "styled-components";

export const ToolsSection = styled.section`
  width: 100%;
  background: #0a0a0a;
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 0;
    gap: 12px;
  }
`;

export const ToolsInner = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    padding: 0 20px;
    gap: 12px;
  }
`;

/* ── Header ── */
export const ToolsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const HeaderLabel = styled.span`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 1.2px;
  color: #6b7280;
`;

export const HeaderStatus = styled.span`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 1.2px;
  background: linear-gradient(90deg, #991b1b 0%, #dc2626 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

/* ── Marquee animations ── */
/* Com 8 repetições, 1 set = 12.5% do total */
const scrollLeft = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-12.5%); }
`;

const scrollRight = keyframes`
  from { transform: translateX(-12.5%); }
  to   { transform: translateX(0); }
`;

/* ── Grid wrapper ── */
export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: #1E2020;
  width: 100%;
`;

/* ── Track que mascara o overflow ── */
export const MarqueeTrack = styled.div`
  overflow: hidden;
  width: 100%;
  background: #1E2020;
`;

/* ── Faixa animada (duplicada para loop contínuo) ── */
export const MarqueeRow = styled.div<{ $dir: "left" | "right" }>`
  display: flex;
  flex-direction: row;
  gap: 1px;
  width: max-content;
  animation: ${({ $dir }) => ($dir === "left" ? scrollLeft : scrollRight)}
    35s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

/* ── Célula individual — largura fixa para o marquee ── */
export const ToolCell = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px 24px;
  height: 85px;
  width: 228px;
  flex-shrink: 0;
  background: #0E0F10;
  gap: 12px;

  @media (max-width: 768px) {
    width: 160px;
    height: 64px;
    padding: 16px 14px;
    gap: 8px;
  }
`;

export const ToolLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const ToolIcon = styled.img`
  width: 18px;
  height: 18px;
  object-fit: contain;
  opacity: 0.85;
  flex-shrink: 0;
`;

export const ToolName = styled.span`
  font-family: var(--font-inter), sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  line-height: 21px;
  letter-spacing: -0.28px;
  color: #f5f5f5;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 11px;
    line-height: 1;
    letter-spacing: -0.1px;
  }
`;

export const ToolIndex = styled.span`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 1.2px;
  color: #6b7280;
  white-space: nowrap;
`;

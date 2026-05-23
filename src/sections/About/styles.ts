"use client";

import styled from "styled-components";

/* ── Section ── */
export const AboutSection = styled.section`
  width: 100%;
  background: #0a0a0a;
  padding: 80px 0 0;
  border-top: 1px solid #292929;

  @media (max-width: 768px) {
    padding: 48px 0 0;
  }
`;

export const AboutInner = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 32px 80px;
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (max-width: 768px) {
    padding: 0 20px 48px;
    gap: 28px;
  }
`;

/* ── Header ── */
export const SectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 32px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex-shrink: 0;
`;

export const SectionNumber = styled.span`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 32px;
  line-height: 1;
  letter-spacing: -1px;
  background: linear-gradient(90deg, #991b1b 0%, #dc2626 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const SectionTag = styled.span`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 1.2px;
  color: #6b7280;
`;

export const HeaderCenter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  flex: 1;
`;

export const HeadingWhite = styled.h2`
  font-family: var(--font-inter), sans-serif;
  font-weight: 700;
  font-size: clamp(36px, 5vw, 64px);
  line-height: 1.05;
  letter-spacing: -2px;
  color: #f5f5f5;
  margin: 0;
`;

export const HeadingRed = styled.h2`
  font-family: var(--font-inter), sans-serif;
  font-weight: 700;
  font-size: clamp(36px, 5vw, 64px);
  line-height: 1.05;
  letter-spacing: -2px;
  margin: 0;
  background: linear-gradient(90deg, #991b1b 0%, #dc2626 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const HeaderRight = styled.p`
  font-family: var(--font-inter), sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #6b7280;
  max-width: 240px;
  flex-shrink: 0;
  align-self: flex-end;
  padding-bottom: 4px;

  @media (max-width: 768px) {
    display: none;
  }
`;

/* ── Split layout ── */
export const AboutSplit = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  min-height: 520px;
  border: 1px solid #292929;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: unset;
  }
`;

/* ── Photo column ── */
export const PhotoColumn = styled.div`
  position: relative;
  width: 420px;
  flex-shrink: 0;
  background: #0E0F10;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    flex-shrink: 0;
  }
`;

export const PhotoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  filter: brightness(0.5) contrast(1.1) grayscale(15%);
`;

/* gradient que funde a foto no lado direito com o bg dos cards */
export const PhotoEdgeFade = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    transparent 55%,
    rgba(5, 5, 8, 0.85) 100%
  );
  pointer-events: none;

  @media (max-width: 768px) {
    background: linear-gradient(
      to bottom,
      transparent 45%,
      rgba(5, 5, 8, 0.9) 100%
    );
  }
`;

/* ── Logo decoration ── */
export const PhotoLogo = styled.img`
  position: absolute;
  bottom: 48px;
  left: 28px;
  width: 88px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 0 3px rgba(220, 38, 38, 0.85))
    drop-shadow(0 0 1px rgba(153, 27, 27, 0.45));
`;

export const CMTLabel = styled.span`
  position: absolute;
  bottom: 28px;
  left: 28px;
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 9px;
  letter-spacing: 1.4px;
  color: #4b5563;
`;

/* ── Cards column ── */
export const CardsColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #0E0F10;
  border-left: 1px solid #292929;
  min-width: 0;

  @media (max-width: 768px) {
    border-left: none;
    border-top: 1px solid #292929;
  }
`;

export const InfoCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 36px 48px;
  gap: 32px;
  border-bottom: 1px solid #292929;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    padding: 24px 20px;
    gap: 20px;
  }
`;

/* ── Icon ── */
export const CardIconWrap = styled.div`
  flex-shrink: 0;
  width: 36px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 2px;
`;

export const CardIcon = styled.span`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  background: linear-gradient(90deg, #991b1b 0%, #dc2626 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

/* ── Card body ── */
export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CardCategory = styled.span`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 10px;
  letter-spacing: 1.2px;
  background: linear-gradient(90deg, #991b1b 0%, #dc2626 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const CardTitle = styled.h3`
  font-family: var(--font-inter), sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.3;
  letter-spacing: -0.4px;
  color: #f5f5f5;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CardDesc = styled.p`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 400;
  font-size: 11px;
  line-height: 19px;
  color: #6b7280;
  max-width: 480px;
  margin: 0;
`;

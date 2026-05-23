"use client";

import styled, { keyframes } from "styled-components";

const redGradient = "linear-gradient(90deg, #991B1B 0%, #DC2626 100%)";

/* ─── Section wrapper — full width, canvas cobre tudo ── */
export const HeroSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px 0 0;
  width: 100%;
  min-height: 755px;
  margin-top: 104px;
  overflow: hidden;
  background-color: #0a0a0a;

  @media (max-width: 768px) {
    padding: 0;
    margin-top: 72px;
    min-height: unset;
    height: calc(100dvh - 72px);
    align-items: stretch;
  }
`;

/* ─── Conteúdo centralizado em 1440px ── */
export const HeroFrame = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1440px;
  padding: 0 32px;

  @media (max-width: 768px) {
    flex: 1;
    padding: 0;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
  }
`;

/* ══════════════════════════════
   DETAILS SUB SECTION (top row)
══════════════════════════════ */
export const DetailsSubSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 24px 0 32px;
  width: 100%;

  @media (max-width: 768px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    align-items: center;
    gap: 28px;
    width: calc(100% - 48px);
    padding: 0;
  }
`;

/* Left cluster: logo + info rows */
export const FirstContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 28px;
    width: 100%;
  }
`;

const logoSpin = keyframes`
  from { transform: rotateY(0deg); }
  to   { transform: rotateY(360deg); }
`;

export const LogoSpinWrapper = styled.div`
  perspective: 900px;
  flex-shrink: 0;
`;

export const LogoSpin3D = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  animation: ${logoSpin} 8s linear infinite;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const LogoFace = styled.div<{ $back?: boolean }>`
  position: absolute;
  inset: 0;
  transform: ${({ $back }) =>
    $back ? "rotateY(180deg) translateZ(5px)" : "translateZ(5px)"};
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    filter: drop-shadow(0 0 10px rgba(220, 38, 38, 0.55));
  }
`;

export const LogoEdgeSlab = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, #2a0808 0%, #0f0303 50%, #2a0808 100%);
  -webkit-mask-image: url("/logo.png");
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-image: url("/logo.png");
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
`;

export const DisplayText = styled.span`
  font-family: var(--font-major-mono), monospace;
  font-weight: 400;
  font-size: 200px;
  line-height: 200px;
  letter-spacing: -8px;
  white-space: nowrap;

  background: ${redGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const InfoRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-bottom: 8px; /* alinha baseline com a base do display text */
`;

export const InfoRow = styled.span`
  display: flex;
  align-items: center;
  gap: 0;
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 1.2px;
  white-space: nowrap;
`;

export const InfoLabel = styled.span`
  color: #6b7280;
`;

export const InfoValue = styled.span`
  color: #f5f5f5;
`;

/* Right cluster: "///" decorative */
export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 236px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SlashText = styled.span`
  font-family: var(--font-major-mono), monospace;
  font-weight: 400;
  font-size: 110px;
  line-height: 110px;
  letter-spacing: -4.4px;
  text-align: right;

  background: ${redGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

/* ══════════════════════════════
   DETAILS SECONDARY (bottom row)
══════════════════════════════ */
export const DetailsSecondarySubSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  border-top: 1px solid #292929;
  border-bottom: 1px solid #292929;

  @media (max-width: 768px) {
    flex-direction: column;
    border-top: 1px solid #292929;
    border-bottom: none;
    flex-shrink: 0;
    width: 100%;
  }
`;

/* Cell 1 — description */
export const DescriptionCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 16px;
  width: 486px;
  min-width: 486px;
  border-right: 1px solid #292929;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    min-width: unset;
    border-right: none;
    border-bottom: 1px solid #292929;
    padding: 20px 24px;
  }
`;

export const DescriptionText = styled.p`
  font-family: var(--font-inter), sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: -0.36px;
  color: #f5f5f5;
  max-width: 454px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;
    max-width: 100%;
    margin: 0;
  }
`;

export const DescriptionHighlight = styled.span`
  background: linear-gradient(90deg, #991b1b 0%, #dc2626 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

/* Cell 2 — statistic */
export const StatisticCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 16px;
  gap: 4px;
  width: 461px;
  min-width: 461px;
  border-right: 1px solid #292929;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StatRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 0;
`;

export const StatNumber = styled.span`
  font-family: var(--font-inter), sans-serif;
  font-weight: 700;
  font-size: 46px;
  line-height: 56px;
  letter-spacing: -2.56px;

  background: ${redGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const StatPlus = styled.span`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 25px;
  line-height: 32px;
  letter-spacing: -1px;
  padding-bottom: 4px;

  background: ${redGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const StatLabel = styled.span`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 1.2px;
  color: #6b7280;
`;

/* Cell 3 — button */
export const ButtonCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 16px;
  gap: 41px;
  flex: 1;
  background: ${redGradient};
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    padding: 20px 24px;
    gap: 16px;
    border-bottom: 1px solid #292929;
  }
`;

export const ButtonLabel = styled.span`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 1.2px;
  color: #f5f5f5;
  opacity: 0.7;
`;

export const ButtonBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

export const ButtonTitle = styled.span`
  font-family: var(--font-inter), sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 25px;
  letter-spacing: -0.44px;
  color: #f5f5f5;
`;

export const ButtonIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: #f5f5f5;
  flex-shrink: 0;
`;

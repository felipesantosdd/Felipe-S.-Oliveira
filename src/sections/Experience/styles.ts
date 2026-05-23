"use client";

import styled, { keyframes, css } from "styled-components";

export const ExperienceSection = styled.section`
  width: 100%;
  background: #0a0a0a;
  padding: 80px 0 0;
  border-top: 1px solid #292929;

  @media (max-width: 768px) {
    padding: 48px 0 0;
  }
`;

export const ExperienceInner = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (max-width: 768px) {
    padding: 0 20px;
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

/* ── Tabs ── */
export const TabBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  border-bottom: 1px solid #292929;
  width: 100%;
  gap: 0;

  @media (max-width: 768px) {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
    flex-wrap: nowrap;
  }
`;

export const Tab = styled.button<{ $active: boolean }>`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 13px;
  line-height: 1;
  letter-spacing: 0.02em;
  padding: 0 0 16px;
  margin-right: 48px;
  color: ${({ $active }) => ($active ? "#f5f5f5" : "#4b5563")};
  background: none;
  border: none;
  border-bottom: ${({ $active }) => ($active ? "2px solid #dc2626" : "2px solid transparent")};
  cursor: pointer;
  transition: color 0.2s ease;
  white-space: nowrap;
  transform: translateY(1px); /* alinha com o border-bottom do TabBar */

  &:hover {
    color: #f5f5f5;
  }

  @media (max-width: 768px) {
    font-size: 11px;
    margin-right: 28px;
    flex-shrink: 0;
  }
`;

/* ── Content panel ── */
export const ContentPanel = styled.div`
  position: relative;
  width: 100%;
  min-height: 420px;
  overflow: hidden;
  background: #0E0F10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    min-height: unset;
    justify-content: flex-start;
  }
`;

/* Fundo de código — syntax highlighted, auto-scroll como terminal */
export const CodeBg = styled.div`
  position: absolute;
  inset: 0;
  padding: 28px 36px;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  pointer-events: none;
  font-family: var(--font-jetbrains), monospace;
  font-size: 14px;
  line-height: 25px;
  white-space: pre;
  user-select: none;
  z-index: 0;
  filter: blur(0.6px);
  transform: translateZ(0);
`;

/* Gradiente que escurece a parte de baixo para o texto ficar legível */
export const CodeOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 40%,
    rgba(8, 8, 16, 0.7) 65%,
    rgba(8, 8, 16, 0.97) 100%
  );
  z-index: 1;
`;

/* wrapper centralizado reutilizado dentro do painel */
export const PanelCentered = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 32px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const PanelTop = styled.div`
  position: relative;
  z-index: 2;
  padding: 28px 0 0;

  @media (max-width: 768px) {
    order: 1;
  }
`;

export const PanelTopInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CompanyName = styled.span`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.3;
  color: #f5f5f5;
`;

export const PanelNumber = styled.span`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: -0.5px;
  color: #6b7280;
`;

export const PanelBottom = styled.div`
  position: relative;
  z-index: 2;
  padding: 0 0 36px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 768px) {
    padding: 0 0 28px;
    order: 3;
  }
`;

export const RedLine = styled.div`
  width: 64px;
  height: 2px;
  background: linear-gradient(90deg, #991b1b 0%, #dc2626 100%);
  border-radius: 2px;
`;

export const PanelDescription = styled.p`
  font-family: var(--font-inter), sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.2px;
  color: #f5f5f5;
  max-width: 680px;
  min-height: 130px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
    max-width: 100%;
    min-height: 220px;
  }
`;

/* ── Coin 3D ── */
export const COIN_RADIUS    = 80;   // metade de 160px
export const COIN_THICKNESS = 18;   // espessura em px
export const COIN_SEGMENTS  = 36;   // segmentos do cilindro

const coinSpin = keyframes`
  from { transform: rotateY(0deg)   rotateX(10deg); }
  to   { transform: rotateY(360deg) rotateX(10deg); }
`;

export const CoinColumn = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1440px;
  padding: 0 32px;
  box-sizing: border-box;
  pointer-events: none;
  z-index: 4;

  @media (max-width: 768px) {
    position: relative;
    left: auto;
    top: auto;
    bottom: auto;
    transform: none;
    width: 100%;
    max-width: 100%;
    padding: 28px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    order: 2;
  }
`;

export const CoinWrapper = styled.div`
  position: absolute;
  right: 180px;
  top: 50%;
  margin-top: -${COIN_RADIUS}px;
  z-index: 4;
  perspective: 900px;
  pointer-events: auto;

  @media (max-width: 768px) {
    position: relative;
    right: auto;
    top: auto;
    margin-top: 0;
  }
`;

export const CoinSpin = styled.div`
  width: ${COIN_RADIUS * 2}px;
  height: ${COIN_RADIUS * 2}px;
  position: relative;
  transform-style: preserve-3d;
  animation: ${coinSpin} 6s linear infinite;
`;

const faceCss = css`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  overflow: hidden;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  box-shadow:
    0 0 28px rgba(220, 38, 38, 0.22),
    inset 0 2px 4px rgba(255, 255, 255, 0.1),
    inset 0 -2px 4px rgba(0, 0, 0, 0.7);
`;

export const CoinFront = styled.div`
  ${faceCss}
  background: #0f0f0f;
  transform: translateZ(${COIN_THICKNESS / 2}px);
`;

export const CoinBack = styled.div`
  ${faceCss}
  background: #0f0f0f;
  transform: rotateY(180deg) translateZ(${COIN_THICKNESS / 2}px);
`;

/* Segmentos do cilindro — formam a borda/grossura da moeda */
export const CoinEdgeSeg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: ${COIN_THICKNESS}px;
  margin-top: -${COIN_THICKNESS / 2}px;
  background: linear-gradient(
    to right,
    #3d1a1a 0%,
    #1f0a0a 30%,
    #140606 50%,
    #1f0a0a 70%,
    #3d1a1a 100%
  );
  border-top: 1px solid rgba(180, 40, 40, 0.18);
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`;

export const CoinLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const CoinInitials = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 40% 35%, #1e0505, #0a0a0a);
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 36px;
  letter-spacing: -2px;
  background: linear-gradient(90deg, #991b1b 0%, #dc2626 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1em;
  background: #dc2626;
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: ${blink} 0.8s step-start infinite;
`;

"use client";

import styled, { keyframes, css } from "styled-components";

/* ── Marquee animations (same logic as Tools) ── */
const scrollLeft = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-12.5%); }
`;

const scrollRight = keyframes`
  from { transform: translateX(-12.5%); }
  to   { transform: translateX(0); }
`;

/* ── Section ── */
export const ProjectsSection = styled.section`
  width: 100%;
  background: #0a0a0a;
  padding: 80px 0 0;
  border-top: 1px solid #292929;

  @media (max-width: 768px) {
    padding: 48px 0 0;
  }
`;

export const ProjectsInner = styled.div`
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

/* ── Divider ── */
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #292929;
`;

/* ── Carousel grid ── */
export const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: #292929;
  width: 100%;
`;

export const MarqueeTrack = styled.div`
  overflow: hidden;
  width: 100%;
  background: #292929;

  @media (max-width: 768px) {
    overflow: hidden;
  }
`;

export const MarqueeRow = styled.div<{ $dir: "left" | "right" }>`
  display: flex;
  flex-direction: row;
  gap: 1px;
  width: max-content;
  animation: ${({ $dir }) => ($dir === "left" ? scrollLeft : scrollRight)}
    45s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

/* ── Denied animation ── */
const blinkRed = keyframes`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0.25; }
`;

/* ── Card ── */
export const ProjectCard = styled.div<{ $denied?: boolean }>`
  width: 360px;
  height: 280px;
  flex-shrink: 0;
  position: relative;
  background: #0E0F10;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: background 0.2s ease, outline 0.1s ease;
  outline: ${({ $denied }) => ($denied ? "1px solid #dc2626" : "1px solid transparent")};

  &:hover {
    background: #141516;
  }

  ${({ $denied }) =>
    $denied &&
    css`
      background: #0e0404;
      &:hover { background: #0e0404; }
    `}

  @media (max-width: 768px) {
    width: 72vw;
    max-width: 280px;
    height: auto;
    flex-shrink: 0;
  }
`;

/* ── Card image ── */
export const CardImageWrap = styled.div`
  position: relative;
  height: 168px;
  flex-shrink: 0;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 130px;
  }
`;

export const CardImageEl = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
  filter: brightness(0.8);
  transition: filter 0.35s ease;

  ${ProjectCard}:hover & {
    filter: brightness(1);
  }
`;

export const CardImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 45%,
    #0E0F10 100%
  );
`;

export const CardTop = styled.div<{ $compact?: boolean }>`
  padding: ${({ $compact }) => ($compact ? "12px 24px 8px" : "20px 24px 14px")};
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const CardName = styled.span`
  font-family: var(--font-inter), sans-serif;
  font-weight: 700;
  font-size: 17px;
  line-height: 1.3;
  letter-spacing: -0.3px;
  color: #f5f5f5;
`;

export const CardTech = styled.span`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 10px;
  letter-spacing: 1.2px;
  background: linear-gradient(90deg, #991b1b 0%, #dc2626 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const CardDescription = styled.p`
  flex: 1;
  font-family: var(--font-inter), sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: rgba(245, 245, 245, 0.38);
  margin: 0;
  padding: 0 24px;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
`;

export const CardDeploy = styled.span<{ $denied?: boolean; $public?: boolean }>`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 10px;
  letter-spacing: 1.2px;
  padding: 14px 24px 20px;
  color: ${({ $denied, $public }) =>
    $denied ? "#dc2626" : $public ? "#f5f5f5" : "#dc2626"};
  transition: color 0.2s;
`;

/* ── Access Denied overlay ── */
export const AccessOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(6, 0, 0, 0.96);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 3px,
      rgba(220, 38, 38, 0.04) 3px,
      rgba(220, 38, 38, 0.04) 4px
    );
    pointer-events: none;
  }
`;

export const AccessTitle = styled.span`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 2.5px;
  color: #dc2626;
  animation: ${blinkRed} 0.7s step-start infinite;
`;

export const AccessSub = styled.span`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 9px;
  letter-spacing: 1.8px;
  color: #6b1414;
`;

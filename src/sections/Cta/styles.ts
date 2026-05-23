"use client";

import styled from "styled-components";

export const CtaSection = styled.section`
  width: 100%;
  position: relative;
  background:
    radial-gradient(ellipse at 75% 50%, rgba(153, 27, 27, 0.45) 0%, transparent 55%),
    #0a0a0a;
  padding: 56px 0 64px;
  border-top: 1px solid #1a1a1a;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 0 48px;
    background:
      radial-gradient(ellipse at 50% 30%, rgba(153, 27, 27, 0.35) 0%, transparent 65%),
      #0a0a0a;
  }
`;

export const CtaInner = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 0;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

/* ── Top bar ── */
export const CtaTopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const CtaTagLeft = styled.span`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 10px;
  letter-spacing: 1.2px;
  color: #4b5563;
`;

export const CtaTagRight = styled.span`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 10px;
  letter-spacing: 1.2px;
  background: linear-gradient(90deg, #991b1b 0%, #dc2626 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

/* ── Stripe decorators (right side) ── */
export const StripeGroup = styled.div`
  position: absolute;
  right: 32px;
  top: 56px;
  display: flex;
  flex-direction: row;
  gap: 6px;
  opacity: 0.18;

  @media (max-width: 768px) {
    right: 16px;
    top: 40px;
    opacity: 0.1;
  }
`;

export const Stripe = styled.div`
  width: 2px;
  height: 160px;
  background: linear-gradient(180deg, transparent 0%, #dc2626 40%, #dc2626 60%, transparent 100%);
`;

/* ── Heading ── */
export const CtaHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

const headingBase = `
  font-family: var(--font-jetbrains), monospace;
  font-style: normal;
  font-weight: 700;
  font-size: 140px;
  line-height: 137px;
  letter-spacing: -8px;
  text-transform: uppercase;
  white-space: nowrap;
  display: block;
`;

export const CtaLineRed = styled.span`
  ${headingBase}
  background: linear-gradient(90deg, #991b1b 0%, #dc2626 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0px 0px 8px rgba(246, 24, 76, 0.25);

  @media (max-width: 768px) {
    font-size: clamp(32px, 9.5vw, 64px);
    line-height: 1.05;
    letter-spacing: -2px;
    white-space: normal;
  }
`;

export const CtaLineWhite = styled.span`
  ${headingBase}
  color: #f5f5f5;

  @media (max-width: 768px) {
    font-size: clamp(32px, 9.5vw, 64px);
    line-height: 1.05;
    letter-spacing: -2px;
    white-space: normal;
  }
`;

/* ── Bottom bar ── */
export const CtaBottomBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const CtaDesc = styled.p`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 400;
  font-size: 11px;
  line-height: 18px;
  color: #4b5563;
  max-width: 260px;
  margin: 0;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const CtaButton = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 16px 28px;
  background: linear-gradient(90deg, #991b1b 0%, #dc2626 100%);
  border: none;
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 1.2px;
  color: #f5f5f5;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 16px 24px;
  }
`;

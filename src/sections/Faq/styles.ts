"use client";

import styled from "styled-components";

/* ── Section ── */
export const FaqSection = styled.section`
  width: 100%;
  background: #0a0a0a;
  padding: 80px 0 0;
  border-top: 1px solid #292929;

  @media (max-width: 768px) {
    padding: 48px 0 0;
  }
`;

export const FaqInner = styled.div`
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

/* ── Divider ── */
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #292929;
  margin-top: -24px;
`;

/* ── FAQ list ── */
export const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FaqItem = styled.div`
  border-bottom: 1px solid #292929;
`;

export const FaqRow = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 28px;
  padding: 28px 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;

  @media (max-width: 768px) {
    gap: 16px;
    padding: 20px 0;
  }
`;

export const FaqNumber = styled.span`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.5px;
  flex-shrink: 0;
  white-space: nowrap;
`;

export const FaqQ = styled.span`
  background: linear-gradient(90deg, #991b1b 0%, #dc2626 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const FaqN = styled.span`
  color: #3D4040;
`;

export const FaqQuestion = styled.span`
  flex: 1;
  font-family: var(--font-inter), sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.3;
  letter-spacing: -0.3px;
  color: #f5f5f5;
  transition: color 0.2s;

  ${FaqRow}:hover & {
    color: #e5e5e5;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    letter-spacing: -0.2px;
  }
`;

export const FaqToggle = styled.div<{ $open: boolean }>`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  background: #111213;
  border: 1px solid #292929;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 20px;
  color: ${({ $open }) => ($open ? "#dc2626" : "#6b7280")};
  transform: rotate(${({ $open }) => ($open ? "45deg" : "0deg")});
  transition: transform 0.3s ease, color 0.2s ease;
  line-height: 1;
  user-select: none;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    font-size: 16px;
  }
`;

export const FaqAnswer = styled.div<{ $open: boolean }>`
  max-height: ${({ $open }) => ($open ? "400px" : "0")};
  overflow: hidden;
  transition: max-height 0.4s ease;
`;

export const FaqAnswerInner = styled.p`
  font-family: var(--font-inter), sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #9ca3af;
  max-width: 860px;
  padding: 0 0 28px calc(13px * 4 + 28px); /* alinha com o texto da pergunta */
  margin: 0;

  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 22px;
    padding: 0 0 20px 0;
  }
`;

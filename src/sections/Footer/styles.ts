"use client";

import styled from "styled-components";

export const FooterSection = styled.footer`
  width: 100%;
  background: #0a0a0a;
  border-top: 1px solid #292929;
`;

export const FooterInner = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 64px 32px 0;
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (max-width: 768px) {
    padding: 40px 20px 0;
    gap: 36px;
  }
`;

/* ── Top row: brand + nav columns ── */
export const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const BrandCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 380px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const BrandName = styled.span`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 26px;
  line-height: 1.2;
  letter-spacing: 1px;
  color: #f5f5f5;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const BrandTags = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const BrandTag = styled.span`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 400;
  font-size: 11px;
  line-height: 18px;
  letter-spacing: 0.5px;
  color: #4b5563;
`;

/* ── Nav columns ── */
export const NavSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;

  @media (max-width: 768px) {
    gap: 48px;
    width: 100%;
  }
`;

export const NavCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const NavLabel = styled.span`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 1.2px;
  color: #6b7280;
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const NavLink = styled.a`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.3px;
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: #f5f5f5;
  }
`;

/* ── Contact row ── */
export const ContactRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContactLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  font-family: var(--font-inter), sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #f5f5f5;
`;

export const ContactDash = styled.span`
  display: inline-block;
  width: 28px;
  height: 2px;
  background: linear-gradient(90deg, #991b1b 0%, #dc2626 100%);
  border-radius: 2px;
  flex-shrink: 0;
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const SocialIcon = styled.a`
  width: 44px;
  height: 44px;
  border: 1px solid #292929;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  text-decoration: none;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;

  &:hover {
    border-color: #dc2626;
    color: #f5f5f5;
  }

  svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }
`;

/* ── Bottom bar ── */
export const FooterBottom = styled.div`
  border-top: 1px solid #292929;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    padding: 16px 0 24px;
  }
`;

export const Copyright = styled.span`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 400;
  font-size: 11px;
  letter-spacing: 0.3px;
  color: #3D4040;
`;

export const DesignCredit = styled.span`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 400;
  font-size: 11px;
  letter-spacing: 0.3px;
  color: #3D4040;
`;

"use client";

import styled from "styled-components";
import { colors, zIndex } from "@/styles/variables";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${zIndex.header};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;

  height: 104px;

  background: rgba(255, 255, 255, 0.02);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  @media (max-width: 768px) {
    height: 72px;
    padding: 0;
  }
`;

export const HeaderInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 16px;
  gap: 56px;

  width: 100%;
  max-width: 1440px;

  @media (max-width: 768px) {
    padding: 0 20px;
    gap: 0;
    justify-content: center;
    height: 100%;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const LogoImage = styled.img`
  height: 56px;
  width: auto;
  object-fit: contain;
  display: block;

  @media (max-width: 768px) {
    height: 40px;
  }
`;

/* Fallback textual caso a imagem não esteja disponível */
export const LogoFallback = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  user-select: none;
`;

export const LogoLetters = styled.span`
  font-family: var(--font-space-grotesk), sans-serif;
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.02em;

  .c {
    background: linear-gradient(90deg, #991b1b 0%, #dc2626 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .mt {
    background: linear-gradient(180deg, #ffffff 0%, #aaaaaa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const LogoSubtitle = styled.span`
  font-size: 0.42rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${colors.muted};
`;

export const LogoScramble = styled.span`
  font-family: var(--font-jetbrains), monospace;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #6b7280;
  white-space: nowrap;
`;

export const HamburgerButton = styled.button`
  position: relative;
  width: 34px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
`;

const lineGradient = "linear-gradient(90deg, #991B1B 0%, #DC2626 100%)";

export const HamburgerLineTop = styled.span<{ $open: boolean }>`
  position: absolute;
  width: 24px;
  height: 2px;
  left: 0;
  top: 0;
  background: ${lineGradient};
  border-radius: 2px;
  transition: transform 0.3s ease, width 0.3s ease;
  transform-origin: center;

  ${({ $open }) =>
    $open &&
    `
    width: 34px;
    transform: translateY(9px) rotate(45deg);
  `}
`;

export const HamburgerLineMiddle = styled.span<{ $open: boolean }>`
  position: absolute;
  width: 34px;
  height: 2px;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background: ${lineGradient};
  border-radius: 2px;
  transition: opacity 0.2s ease;

  ${({ $open }) => $open && `opacity: 0;`}
`;

export const HamburgerLineBottom = styled.span<{ $open: boolean }>`
  position: absolute;
  width: 24px;
  height: 2px;
  right: 0;
  bottom: 0;
  background: ${lineGradient};
  border-radius: 2px;
  transition: transform 0.3s ease, width 0.3s ease, right 0.3s ease;
  transform-origin: center;

  ${({ $open }) =>
    $open &&
    `
    width: 34px;
    right: 0;
    transform: translateY(-9px) rotate(-45deg);
  `}
`;

/* ── Desktop nav links (aparecem no header ao clicar) ── */
export const DesktopNav = styled.nav<{ $open: boolean }>`
  display: none;

  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    pointer-events: ${({ $open }) => ($open ? "all" : "none")};
    transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(20px)")};
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
`;

export const DesktopNavLink = styled.a`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: linear-gradient(90deg, #991b1b 0%, #dc2626 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const DesktopNavSeparator = styled.span`
  width: 1px;
  height: 12px;
  background: #292929;
  flex-shrink: 0;
`;

/* ── Mobile Menu Overlay ── */
export const MobileOverlay = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    inset: 0;
    z-index: ${zIndex.header - 1};
    background: #0a0a0a;
    flex-direction: column;
    justify-content: space-between;
    padding: 72px 0 0;

    opacity: ${({ $open }) => ($open ? 1 : 0)};
    pointer-events: ${({ $open }) => ($open ? "all" : "none")};
    transition: opacity 0.3s ease;
  }
`;

export const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 48px 32px 0;
  gap: 4px;
  flex: 1;
`;

export const MobileNavLink = styled.a`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.3;
  letter-spacing: -1px;
  color: #3d4040;
  text-decoration: none;
  display: block;
  transition: background-size 0.2s ease, color 0.2s ease;

  -webkit-text-fill-color: inherit;

  &:hover {
    background: linear-gradient(90deg, #991b1b 0%, #dc2626 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const MobileNavDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #1a1a1a;
  margin: 20px 0 24px;
`;

export const MobileContactLink = styled.a`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.3;
  letter-spacing: -1px;
  text-decoration: none;
  display: block;
  background: linear-gradient(90deg, #991b1b 0%, #dc2626 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const MobileMenuBottom = styled.div`
  padding: 24px 32px 48px;
  border-top: 1px solid #1a1a1a;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MobileTag = styled.span`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 9px;
  letter-spacing: 1.2px;
  color: #3d4040;
`;

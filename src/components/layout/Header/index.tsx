"use client";

import { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import { useTextScramble } from "@/hooks/useTextScramble";
import { useTranslation } from "@/contexts/LanguageContext";
import {
  HeaderWrapper,
  HeaderInner,
  HeaderRow,
  LogoFallback,
  LogoImage,
  LogoScramble,
  HamburgerButton,
  HamburgerLineTop,
  HamburgerLineMiddle,
  HamburgerLineBottom,
  DesktopNav,
  DesktopNavLink,
  DesktopNavSeparator,
  MobileOverlay,
  MobileNav,
  MobileNavLink,
  MobileNavDivider,
  MobileContactLink,
  MobileMenuBottom,
  MobileTag,
} from "./styles";

/* ── Language toggle ── */
const LangToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  margin-left: 16px;
  flex-shrink: 0;
`;

const LangBtn = styled.button<{ $active: boolean }>`
  font-family: var(--font-jetbrains), monospace;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 1px;
  padding: 3px 7px;
  border: 1px solid ${({ $active }) => ($active ? "#dc2626" : "#292929")};
  background: ${({ $active }) => ($active ? "rgba(220,38,38,0.12)" : "transparent")};
  color: ${({ $active }) => ($active ? "#f5f5f5" : "#4b5563")};
  cursor: pointer;
  transition: all 0.15s ease;
  border-radius: 2px;

  &:hover {
    color: #f5f5f5;
    border-color: #dc2626;
  }
`;

export default function Header() {
  const { lang, setLang, t } = useTranslation();
  const name = useTextScramble(["Crimson Mind Tech", "Felipe S. Oliveira"], 0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleNavClick = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <>
      <HeaderWrapper>
        <HeaderInner>
          <HeaderRow>
            <LogoFallback>
              <LogoImage src="/logo.png" alt="CMT" />
              <LogoScramble>{name}</LogoScramble>
            </LogoFallback>

            <DesktopNav $open={open}>
              {t.nav.items.map(({ label, href }, i) => (
                <Fragment key={href}>
                  {i > 0 && <DesktopNavSeparator />}
                  <DesktopNavLink
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(href);
                    }}
                  >
                    {label}
                  </DesktopNavLink>
                </Fragment>
              ))}
              <DesktopNavSeparator />
              <DesktopNavLink
                href="https://wa.me/5535999582766"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                style={{
                  background: "linear-gradient(90deg, #991b1b 0%, #dc2626 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t.nav.contact}
              </DesktopNavLink>

              <DesktopNavSeparator />
              <LangToggle>
                <LangBtn $active={lang === "pt"} onClick={() => setLang("pt")}>PT</LangBtn>
                <LangBtn $active={lang === "en"} onClick={() => setLang("en")}>EN</LangBtn>
              </LangToggle>
            </DesktopNav>

            <HamburgerButton
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              onClick={() => setOpen((v) => !v)}
            >
              <HamburgerLineTop    $open={open} />
              <HamburgerLineMiddle $open={open} />
              <HamburgerLineBottom $open={open} />
            </HamburgerButton>
          </HeaderRow>
        </HeaderInner>
      </HeaderWrapper>

      <MobileOverlay $open={open}>
        <MobileNav>
          {t.nav.items.map(({ label, href }) => (
            <MobileNavLink
              key={href}
              href={href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(href);
              }}
            >
              {label}
            </MobileNavLink>
          ))}

          <MobileNavDivider />

          <MobileContactLink
            href="https://wa.me/5535999582766"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            {t.nav.contact} →
          </MobileContactLink>

          {/* Language toggle mobile */}
          <LangToggle style={{ marginTop: "24px", marginLeft: 0 }}>
            <LangBtn $active={lang === "pt"} onClick={() => setLang("pt")}>PT</LangBtn>
            <LangBtn $active={lang === "en"} onClick={() => setLang("en")}>EN</LangBtn>
          </LangToggle>
        </MobileNav>

        <MobileMenuBottom>
          <MobileTag>// CMT — CRIMSON MIND TECH</MobileTag>
          <MobileTag>FULL STACK DEV</MobileTag>
        </MobileMenuBottom>
      </MobileOverlay>
    </>
  );
}

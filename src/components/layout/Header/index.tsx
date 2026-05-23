"use client";

import { useState, useEffect, Fragment } from "react";
import { useTextScramble } from "@/hooks/useTextScramble";
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

const NAV_ITEMS = [
  { label: "Ferramentas", href: "#ferramentas" },
  { label: "Projetos",    href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Sobre",       href: "#sobre" },
  { label: "FAQ",         href: "#faq" },
];

export default function Header() {
  const name = useTextScramble(["Crimson Mind Tech", "Felipe S. Oliveira"], 0);
  const [open, setOpen] = useState(false);

  /* Trava o scroll do body quando o menu mobile está aberto */
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

            {/* Nav desktop — aparece à esquerda do botão ao clicar */}
            <DesktopNav $open={open}>
              {NAV_ITEMS.map(({ label, href }, i) => (
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
                Contato
              </DesktopNavLink>
            </DesktopNav>

            <HamburgerButton
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <HamburgerLineTop    $open={open} />
              <HamburgerLineMiddle $open={open} />
              <HamburgerLineBottom $open={open} />
            </HamburgerButton>
          </HeaderRow>
        </HeaderInner>
      </HeaderWrapper>

      {/* Overlay full-screen — apenas no mobile */}
      <MobileOverlay $open={open}>
        <MobileNav>
          {NAV_ITEMS.map(({ label, href }) => (
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
            Contato →
          </MobileContactLink>
        </MobileNav>

        <MobileMenuBottom>
          <MobileTag>// CMT — CRIMSON MIND TECH</MobileTag>
          <MobileTag>FULL STACK DEV</MobileTag>
        </MobileMenuBottom>
      </MobileOverlay>
    </>
  );
}

"use client";

import { useState } from "react";
import {
  FaqSection,
  FaqInner,
  SectionHeader,
  HeaderLeft,
  SectionNumber,
  SectionTag,
  HeaderCenter,
  HeadingWhite,
  HeadingRed,
  HeaderRight,
  Divider,
  FaqList,
  FaqItem,
  FaqRow,
  FaqNumber,
  FaqQ,
  FaqN,
  FaqQuestion,
  FaqToggle,
  FaqAnswer,
  FaqAnswerInner,
} from "./styles";

const FAQS = [
  {
    q: "Você se considera Pleno ou Sênior?",
    a: "Hoje atuo entre os níveis pleno e sênior, dependendo do escopo e responsabilidades da posição. Em geral minha atuação é mais próxima de pleno, mas já assumi projetos integralmente, conduzindo decisões técnicas, manutenção e evolução das aplicações.",
  },
  {
    q: "Você trabalhou com Angular? Em quais projetos?",
    a: "Sim. Parte da minha experiência com Angular aconteceu em software houses, onde atuei em múltiplos projetos simultaneamente. Como eram ambientes com várias demandas e tecnologias diferentes, optei por resumir algumas experiências no currículo destacando os pontos mais relevantes.",
  },
  {
    q: "Como você usa IA no seu workflow?",
    a: "Hoje utilizo ferramentas como ChatGPT, Cursor, Claude, Codex e GitHub Copilot para apoiar arquitetura, revisão de código, refatorações, debug, documentação e ganho de produtividade. Uso a IA como apoio no desenvolvimento, sempre validando e ajustando as soluções antes da implementação.",
  },
  {
    q: "Qual foi seu projeto mais desafiador?",
    a: "Um dos projetos mais desafiadores foi uma plataforma de gerenciamento de campanhas com alto volume de dados e regras de negócio complexas. O maior desafio foi equilibrar performance, experiência do usuário e manutenção da aplicação, exigindo otimizações tanto no frontend quanto na integração entre sistemas.",
  },
  {
    q: "Como funciona seu fluxo de desenvolvimento?",
    a: "Normalmente começo entendendo a regra de negócio e o impacto da tarefa no produto. Depois analiso o código existente, implemento seguindo padrões do projeto, realizo testes, reviso o código e acompanho o processo até o PR/deploy.",
  },
  {
    q: "Como você lida com código legado?",
    a: "Procuro primeiro entender contexto e impacto antes de alterar qualquer coisa. Prefiro evoluir gradualmente, reduzindo débito técnico aos poucos e evitando mudanças grandes sem necessidade.",
  },
  {
    q: "Como lida com feedback em code review?",
    a: "Vejo code review como oportunidade de melhoria. Gosto da troca técnica porque normalmente ela ajuda a aumentar a qualidade do código e evoluir a forma de pensar soluções.",
  },
  {
    q: "Como você aprendeu tantas tecnologias?",
    a: "Boa parte veio da atuação em software houses, onde diferentes projetos exigiam stacks variadas. Isso me deu bastante adaptabilidade e facilidade para aprender novas tecnologias rapidamente.",
  },
  {
    q: "Qual seu nível de inglês?",
    a: "Tenho inglês avançado para leitura, escrita e comunicação em ambientes profissionais. Consigo participar de reuniões técnicas, compreender documentação e interagir em contextos internacionais.",
  },
  {
    q: "Por que deveríamos contratar você?",
    a: "Além da experiência técnica, gosto de entender o contexto do produto e pensar no impacto real das soluções. Tento unir qualidade técnica, colaboração e foco em resolver problemas de forma simples e sustentável.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <FaqSection>
      <FaqInner>
        <SectionHeader>
          <HeaderLeft>
            <SectionNumber>06</SectionNumber>
            <SectionTag>// CONTATO</SectionTag>
            <SectionTag>FAQ</SectionTag>
          </HeaderLeft>

          <HeaderCenter>
            <HeadingWhite>Perguntas</HeadingWhite>
            <HeadingRed>frequentes</HeadingRed>
          </HeaderCenter>

          <HeaderRight>
            Dúvidas comuns sobre experiência, stack, forma de trabalho
            e disponibilidade para novos projetos.
          </HeaderRight>
        </SectionHeader>

        <Divider />

        <FaqList>
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            const num = String(i + 1).padStart(2, "0");

            return (
              <FaqItem key={i}>
                <FaqRow onClick={() => toggle(i)} aria-expanded={isOpen}>
                  <FaqNumber>
                    <FaqQ>Q.</FaqQ>
                    <FaqN>{num}</FaqN>
                  </FaqNumber>

                  <FaqQuestion>{faq.q}</FaqQuestion>

                  <FaqToggle $open={isOpen}>+</FaqToggle>
                </FaqRow>

                <FaqAnswer $open={isOpen}>
                  <FaqAnswerInner>{faq.a}</FaqAnswerInner>
                </FaqAnswer>
              </FaqItem>
            );
          })}
        </FaqList>
      </FaqInner>
    </FaqSection>
  );
}

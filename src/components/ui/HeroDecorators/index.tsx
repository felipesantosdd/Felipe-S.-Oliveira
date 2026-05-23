"use client";

import styled from "styled-components";

const Layer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
`;

const VLine = styled.div<{ $left?: string; $right?: string; $top?: string; $h?: string }>`
  position: absolute;
  left: ${({ $left }) => $left ?? "auto"};
  right: ${({ $right }) => $right ?? "auto"};
  top: ${({ $top }) => $top ?? "0"};
  width: 1px;
  height: ${({ $h }) => $h ?? "45%"};
  background: #292929;
`;

const RedBar = styled.div<{ $left?: string; $right?: string; $top?: string; $bottom?: string; $w?: string }>`
  position: absolute;
  left: ${({ $left }) => $left ?? "auto"};
  right: ${({ $right }) => $right ?? "auto"};
  top: ${({ $top }) => $top ?? "auto"};
  bottom: ${({ $bottom }) => $bottom ?? "auto"};
  width: ${({ $w }) => $w ?? "28px"};
  height: 2px;
  background: linear-gradient(90deg, #991b1b 0%, #dc2626 100%);
  border-radius: 2px;
`;

const DotGrid = styled.div<{ $left?: string; $right?: string; $top?: string; $bottom?: string }>`
  position: absolute;
  left: ${({ $left }) => $left ?? "auto"};
  right: ${({ $right }) => $right ?? "auto"};
  top: ${({ $top }) => $top ?? "auto"};
  bottom: ${({ $bottom }) => $bottom ?? "auto"};
  width: 56px;
  height: 56px;
  background-image: radial-gradient(circle, #292929 1px, transparent 1px);
  background-size: 7px 7px;
`;

const ViewfinderWrap = styled.div`
  position: absolute;
  left: 50%;
  top: 8%;
  transform: translateX(-25%);
  width: 200px;
  height: 120px;
`;

const Corner = styled.div<{ $pos: "tl" | "tr" | "bl" | "br" }>`
  position: absolute;
  width: 14px;
  height: 14px;
  border-color: #292929;
  border-style: solid;

  ${({ $pos }) => $pos === "tl" && `top: 0; left: 0; border-width: 1px 0 0 1px;`}
  ${({ $pos }) => $pos === "tr" && `top: 0; right: 0; border-width: 1px 1px 0 0;`}
  ${({ $pos }) => $pos === "bl" && `bottom: 0; left: 0; border-width: 0 0 1px 1px;`}
  ${({ $pos }) => $pos === "br" && `bottom: 0; right: 0; border-width: 0 1px 1px 0;`}
`;

const RedGlow = styled.div`
  position: absolute;
  right: -60px;
  top: 10%;
  width: 300px;
  height: 60%;
  background: radial-gradient(ellipse at center, rgba(153, 27, 27, 0.18) 0%, transparent 70%);
`;

export default function HeroDecorators() {
  return (
    <Layer>
      {/* Linhas verticais */}
      <VLine $left="10%"  $top="0"   $h="55%" />
      <VLine $left="33%"  $top="0"   $h="22%" />
      <VLine $right="24%" $top="18%" $h="40%" />

      {/* Barras vermelhas */}
      <RedBar $left="10%"  $top="5%"    $w="28px" />
      <RedBar $right="3%"  $top="8%"    $w="28px" />
      <RedBar $left="10%"  $bottom="8%" $w="20px" />
      <RedBar $right="3%"  $bottom="8%" $w="28px" />

      {/* Grids de pontos */}
      <DotGrid $left="3%"  $top="4%"  />
      <DotGrid $right="3%" $top="30%" />

      {/* Único viewfinder */}
      <ViewfinderWrap>
        <Corner $pos="tl" />
        <Corner $pos="tr" />
        <Corner $pos="bl" />
        <Corner $pos="br" />
      </ViewfinderWrap>

      {/* Glow vermelho direita */}
      <RedGlow />
    </Layer>
  );
}

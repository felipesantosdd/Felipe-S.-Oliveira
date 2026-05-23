"use client";

import {
  ToolsSection,
  ToolsInner,
  ToolsHeader,
  HeaderLabel,
  HeaderStatus,
  GridContainer,
  MarqueeTrack,
  MarqueeRow,
  ToolCell,
  ToolLeft,
  ToolIcon,
  ToolName,
  ToolIndex,
} from "./styles";

interface Tool {
  name: string;
  code: string;
  icon: string;
}

const ROW_1: Tool[] = [
  { name: "REACT",   code: "C.001", icon: "/icons/react.svg"   },
  { name: "NEXT.JS", code: "C.002", icon: "/icons/nextjs.svg"  },
  { name: "ANGULAR", code: "C.003", icon: "/icons/angular.svg" },
  { name: "VUE",     code: "C.004", icon: "/icons/vue.svg"     },
  { name: "NODE.JS", code: "C.005", icon: "/icons/nodejs.svg"  },
  { name: "FASTAPI", code: "C.006", icon: "/icons/fastapi.svg" },
];

const ROW_2: Tool[] = [
  { name: "PYTHON",   code: "C.007", icon: "/icons/python.svg"   },
  { name: "POSTGRES", code: "C.008", icon: "/icons/postgres.svg" },
  { name: "MONGODB",  code: "C.009", icon: "/icons/mongodb.svg"  },
  { name: "DOCKER",   code: "C.010", icon: "/icons/docker.svg"   },
  { name: "AWS",      code: "C.011", icon: "/icons/aws.svg"      },
  { name: ".NET",     code: "C.012", icon: "/icons/dotnet.svg"   },
];

function ToolItem({ tool }: { tool: Tool }) {
  return (
    <ToolCell>
      <ToolLeft>
        <ToolIcon src={tool.icon} alt={tool.name} />
        <ToolName>{tool.name}</ToolName>
      </ToolLeft>
      <ToolIndex>{tool.code}</ToolIndex>
    </ToolCell>
  );
}

export default function Tools() {
  // Repete 8x — metade (~5500px) garante cobertura em qualquer tela sem gap
  const repeat = (arr: Tool[], n = 8) => Array(n).fill(arr).flat() as Tool[];
  const row1 = repeat(ROW_1);
  const row2 = repeat(ROW_2);

  return (
    <ToolsSection>
      <ToolsInner>
        <ToolsHeader>
          <HeaderLabel>// ARSENAL DE TECNOLOGIAS</HeaderLabel>
          <HeaderStatus>ACTIVE STACK • FULL OPERATION</HeaderStatus>
        </ToolsHeader>
      </ToolsInner>

      <GridContainer>
        {/* Row 1 — flui para a esquerda (→) */}
        <MarqueeTrack>
          <MarqueeRow $dir="left">
            {row1.map((tool, i) => (
              <ToolItem key={`r1-${i}`} tool={tool} />
            ))}
          </MarqueeRow>
        </MarqueeTrack>

        {/* Row 2 — flui para a direita (←) */}
        <MarqueeTrack>
          <MarqueeRow $dir="right">
            {row2.map((tool, i) => (
              <ToolItem key={`r2-${i}`} tool={tool} />
            ))}
          </MarqueeRow>
        </MarqueeTrack>
      </GridContainer>
    </ToolsSection>
  );
}

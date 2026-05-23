"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { tokenize, sliceTokens } from "@/lib/syntaxHighlight";
import {
  ExperienceSection,
  ExperienceInner,
  SectionHeader,
  HeaderLeft,
  SectionNumber,
  SectionTag,
  HeaderCenter,
  HeadingWhite,
  HeadingRed,
  HeaderRight,
  TabBar,
  Tab,
  ContentPanel,
  CodeBg,
  CodeOverlay,
  PanelCentered,
  PanelTop,
  PanelTopInner,
  CompanyName,
  PanelNumber,
  PanelBottom,
  RedLine,
  PanelDescription,
  Cursor,
  CoinColumn,
  CoinWrapper,
  CoinSpin,
  CoinFront,
  CoinBack,
  CoinLogo,
  CoinInitials,
  CoinEdgeSeg,
  COIN_RADIUS,
  COIN_THICKNESS,
  COIN_SEGMENTS,
} from "./styles";

/* Largura de cada segmento do cilindro (corda do arco) */
const SEG_W = 2 * COIN_RADIUS * Math.sin(Math.PI / COIN_SEGMENTS);

/* ── Dados reais do CV ── */
const EXPERIENCES = [
  {
    id: "01",
    company: "Pasquali",
    logo: "/logos/pasquali.png",
    edgeColor: "#FFFFF9",
    lightBg: true,
    url: "https://www.linkedin.com/company/pasquali-solution-tech/posts/?feedView=all",
    period: "08/2024 – Atual",
    role: "Desenvolvedor Full Stack",
    description:
      "Atuando diretamente em produção desde o primeiro mês, construo interfaces com React.js e TypeScript enquanto desenvolvo serviços de back-end com Python e FastAPI — do design da API até o deploy. Incorporei ferramentas de IA ao fluxo de trabalho (Cursor, Copilot, Claude) e sinto na prática o que isso representa em velocidade e qualidade de entrega. Cada PR passa por revisão guiada por SOLID e Clean Code, porque acredito que código sustentável é parte do produto.",
    code: `// FastAPI — endpoint com autenticação JWT
@router.get("/users/me", response_model=UserOut)
async def get_current_user(
  token: str = Depends(oauth2_scheme),
  db: AsyncSession = Depends(get_db)
):
  payload = decode_token(token)
  user = await db.get(User, payload["sub"])
  if not user:
    raise HTTPException(status_code=404)
  return user

// React — componente reutilizável tipado
interface ButtonProps {
  label: string
  variant?: 'primary' | 'ghost'
  onClick?: () => void
}

export const Button: FC<ButtonProps> = ({
  label, variant = 'primary', onClick
}) => (
  <button className={styles[variant]} onClick={onClick}>
    {label}
  </button>
)`,
  },
  {
    id: "02",
    company: "CoreLab",
    logo: "/logos/corelab.png",
    edgeColor: "#8D3CFB",
    lightBg: false,
    url: "https://www.linkedin.com/company/corelabbr/",
    period: "02/2024 – 08/2024",
    role: "Desenvolvedor Web Full Stack",
    description:
      "Experiência intensa em um ambiente multi-stack real: em seis meses trabalhei com React, Angular, Next.js, Node.js, Python e .NET — às vezes no mesmo sprint. Containerizei serviços com Docker, otimizei queries no PostgreSQL e participei de code reviews que realmente moldaram minha visão sobre arquitetura. A proximidade com os times de produto e UX me ensinou a pensar em funcionalidade antes de tecnologia.",
    code: `// Next.js — Server Action com Prisma
'use server'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function createProject(data: ProjectInput) {
  const project = await prisma.project.create({
    data: {
      ...data,
      createdAt: new Date(),
    },
  })
  revalidatePath('/projects')
  return project
}

// Docker Compose — ambiente de desenvolvimento
services:
  api:
    build: ./api
    ports: ["3333:3333"]
    depends_on: [postgres]
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: corelab_dev`,
  },
  {
    id: "03",
    company: "Blume Talk",
    logo: "/logos/blumetalk.png",
    edgeColor: "#BB6DE0",
    lightBg: false,
    url: "https://www.instagram.com/blumetelecom/",
    period: "02/2022 – 02/2024",
    role: "Desenvolvedor Web Full Stack",
    description:
      "Dois anos dentro de uma plataforma de comunicação ativa, onde cada mudança afeta usuários reais em tempo real. Fui responsável por integrações com serviços externos, automação do pipeline de deploy e testes, e pela implementação de camadas de segurança — autenticação robusta e proteção de dados sensíveis. Aprendi que em sistemas de comunicação, estabilidade não é diferencial, é pré-requisito.",
    code: `// Angular — interceptor de autenticação
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    const token = this.auth.getToken()
    if (!token) return next.handle(req)

    const authReq = req.clone({
      headers: req.headers.set('Authorization', \`Bearer \${token}\`)
    })
    return next.handle(authReq)
  }
}

// Node.js — automação de testes com Jest
describe('AuthService', () => {
  it('should return 401 for expired token', async () => {
    const res = await request(app)
      .get('/me')
      .set('Authorization', 'Bearer expired.token')
    expect(res.status).toBe(401)
  })
})`,
  },
  {
    id: "04",
    company: "Kenzie",
    logo: "/logos/kenzie.png",
    edgeColor: "#0000FE",
    lightBg: false,
    url: "https://www.linkedin.com/school/kenzieacademybr/",
    period: "04/2022 – 03/2023",
    role: "Monitor de Desenvolvimento Web",
    description:
      "Meu ponto de virada: além de desenvolver com Vue.js, Node.js e SQL, eu ensinava. Auxiliar outros alunos me forçou a entender os fundamentos de verdade — não dá pra explicar o que não se compreende. Em paralelo, entregava automações comerciais reais com integrações de API, e documentava cada solução com o cuidado de quem sabe que código sem contexto é código perdido.",
    code: `// Vue 3 — Composition API com Pinia
import { defineStore } from 'pinia'

export const useStudentStore = defineStore('students', {
  state: () => ({
    list: [] as Student[],
    loading: false,
  }),
  actions: {
    async fetchAll() {
      this.loading = true
      this.list = await api.get('/students')
      this.loading = false
    },
  },
})

// Node.js — automação de relatórios
const cron = require('node-cron')
cron.schedule('0 8 * * 1', async () => {
  const report = await generateWeeklyReport()
  await mailer.send({ to: 'team@kenzie.com', report })
})`,
  },
  {
    id: "05",
    company: "Prime Interway",
    logo: "/logos/prime.png",
    edgeColor: "#0B0B2D",
    lightBg: false,
    url: "https://www.linkedin.com/company/primeinterway/posts/?feedView=all",
    period: "07/2020 – 12/2021",
    role: "Desenvolvedor Web Full Stack",
    description:
      "Onde tudo começou: integrei serviços de automação comercial e mobilidade corporativa numa plataforma que precisava crescer sem quebrar. Desenvolvi scripts que eliminavam horas de trabalho manual, implementei criptografia e autenticação multifator antes disso virar pauta obrigatória no mercado, e documentei cada decisão técnica — um hábito que carrego até hoje.",
    code: `// Automação — script de integração comercial
import hmac, hashlib, requests

def sign_request(payload: dict, secret: str) -> str:
  body = json.dumps(payload, sort_keys=True)
  sig = hmac.new(
    secret.encode(), body.encode(), hashlib.sha256
  ).hexdigest()
  return sig

def sync_orders(since: datetime):
  payload = {"since": since.isoformat()}
  headers = {
    "X-Signature": sign_request(payload, WEBHOOK_SECRET),
    "Content-Type": "application/json",
  }
  r = requests.post(f"{API_URL}/orders/sync",
    json=payload, headers=headers)
  r.raise_for_status()
  return r.json()["synced"]`,
  },
];

/* ── Componente ── */
export default function Experience() {
  const [active, setActive] = useState(0);
  const exp = EXPERIENCES[active];

  // Typewriter: descrição (lento — conteúdo principal)
  const { displayed, done } = useTypewriter(exp.description, 28);

  // Typewriter: código de fundo
  const { displayed: displayedCode } = useTypewriter(exp.code, 15);

  // Pre-tokeniza o código completo; fatia conforme o typewriter avança
  const allTokens = useMemo(() => tokenize(exp.code), [exp.code]);
  const codeTokens = useMemo(
    () => sliceTokens(allTokens, displayedCode.length),
    [allTokens, displayedCode.length],
  );

  // Auto-scroll para o fundo conforme o código é "digitado"
  const codeBgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = codeBgRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [displayedCode]);

  return (
    <ExperienceSection>
      <ExperienceInner>
        {/* Header */}
        <SectionHeader>
          <HeaderLeft>
            <SectionNumber>03</SectionNumber>
            <SectionTag>// TRAJETÓRIA</SectionTag>
            <SectionTag>EXPERIÊNCIA</SectionTag>
          </HeaderLeft>

          <HeaderCenter>
            <HeadingWhite>Processos reais</HeadingWhite>
            <HeadingRed>soluções escaláveis</HeadingRed>
          </HeaderCenter>

          <HeaderRight>
            Atuação em projetos full stack com foco em arquitetura moderna,
            integrações e evolução contínua de aplicações produtivas.
          </HeaderRight>
        </SectionHeader>

        {/* Tabs */}
        <TabBar>
          {EXPERIENCES.map((e, i) => (
            <Tab key={e.id} $active={active === i} onClick={() => setActive(i)}>
              {e.company}
            </Tab>
          ))}
        </TabBar>
      </ExperienceInner>

      {/* Content panel — full width */}
      <ContentPanel>
        <CodeBg ref={codeBgRef}>
          {codeTokens.map((token, i) => (
            <span key={i} style={{ color: token.color }}>
              {token.text}
            </span>
          ))}
        </CodeBg>
        <CodeOverlay />

        {/* Coin 3D — within centered column */}
        <CoinColumn>
          <CoinWrapper
            key={exp.id}
            as="a"
            href={exp.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            <CoinSpin>
              <CoinFront
                style={exp.lightBg ? { background: "#ffffff" } : undefined}
              >
                {exp.logo ? (
                  <CoinLogo
                    src={exp.logo}
                    alt={exp.company}
                    style={
                      exp.lightBg
                        ? { objectFit: "contain", padding: "20px" }
                        : undefined
                    }
                  />
                ) : (
                  <CoinInitials>?</CoinInitials>
                )}
              </CoinFront>
              <CoinBack
                style={exp.lightBg ? { background: "#ffffff" } : undefined}
              >
                {exp.logo ? (
                  <CoinLogo
                    src={exp.logo}
                    alt={exp.company}
                    style={
                      exp.lightBg
                        ? { objectFit: "contain", padding: "20px" }
                        : undefined
                    }
                  />
                ) : (
                  <CoinInitials>?</CoinInitials>
                )}
              </CoinBack>
              {Array.from({ length: COIN_SEGMENTS }).map((_, i) => (
                <CoinEdgeSeg
                  key={i}
                  style={{
                    width: COIN_THICKNESS,
                    height: SEG_W,
                    marginLeft: -(COIN_THICKNESS / 2),
                    marginTop: -(SEG_W / 2),
                    transform: `rotateZ(${(360 / COIN_SEGMENTS) * i}deg) translateX(${COIN_RADIUS}px) rotateY(90deg)`,
                    ...(exp.edgeColor ? { background: exp.edgeColor } : {}),
                  }}
                />
              ))}
            </CoinSpin>
          </CoinWrapper>
        </CoinColumn>

        <PanelTop>
          <PanelCentered>
            <PanelTopInner>
              <CompanyName>{exp.company}</CompanyName>
              <PanelNumber>{exp.id}</PanelNumber>
            </PanelTopInner>
          </PanelCentered>
        </PanelTop>

        <PanelBottom>
          <PanelCentered>
            <RedLine />
            <PanelDescription>
              {displayed}
              {!done && <Cursor />}
            </PanelDescription>
          </PanelCentered>
        </PanelBottom>
      </ContentPanel>
    </ExperienceSection>
  );
}

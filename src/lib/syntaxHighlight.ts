export type Token = { text: string; color: string };

// VS Code Dark+ colors — semi-transparent para efeito de fundo
const C = {
  comment:   "rgba(106, 153, 85,  0.82)",   // verde
  string:    "rgba(206, 145, 120, 0.90)",   // laranja/coral
  keyword:   "rgba(197, 134, 192, 0.92)",   // roxo  (if/return/async...)
  kwDecl:    "rgba(86,  156, 214, 0.92)",   // azul  (import/const/def...)
  decorator: "rgba(220, 220, 170, 0.90)",   // amarelo (@decorator)
  number:    "rgba(181, 206, 168, 0.90)",   // verde claro
  type:      "rgba(78,  201, 176, 0.90)",   // teal  (Classes/Interfaces)
  fn:        "rgba(220, 220, 170, 0.88)",   // amarelo (chamadas de função)
  default:   "rgba(212, 212, 212, 0.28)",   // cinza padrão
};

// Palavras-chave de controle de fluxo → roxo
const KW1 = new Set([
  "if","else","elif","for","while","return","try","except","raise",
  "with","not","and","or","in","is","break","continue","pass",
  "None","True","False","async","await","yield","throw","switch",
  "case","default","do","typeof","instanceof",
]);

// Palavras-chave de declaração → azul
const KW2 = new Set([
  "def","class","import","from","as","export","const","let","var",
  "interface","type","implements","extends","new","constructor",
  "private","public","protected","static","abstract","override",
  "describe","it","expect","services","image","build","ports",
  "depends_on","environment","use client","use server",
]);

// Regex com grupos de captura (ordem importa — mais específico primeiro)
// g1=string  g2=comment  g3=decorator  g4=number  g5=word  g6=outro
const TOKEN_RE =
  /('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`[^`]*`)|(\/\/[^\n]*|#[^\n]*)|(@[\w.]+)|(\b\d+(?:\.\d+)?(?:px|em|%|s|ms|vh|vw)?\b)|([A-Za-z_]\w*)|([^\w\s]|\s)/g;

export function tokenize(code: string): Token[] {
  const tokens: Token[] = [];
  TOKEN_RE.lastIndex = 0;

  let m: RegExpExecArray | null;
  while ((m = TOKEN_RE.exec(code)) !== null) {
    const [full, str, comment, decorator, number, word, other] = m;

    if (str !== undefined) {
      tokens.push({ text: str, color: C.string });
    } else if (comment !== undefined) {
      tokens.push({ text: comment, color: C.comment });
    } else if (decorator !== undefined) {
      tokens.push({ text: decorator, color: C.decorator });
    } else if (number !== undefined) {
      tokens.push({ text: number, color: C.number });
    } else if (word !== undefined) {
      const nextChar = code[TOKEN_RE.lastIndex];
      if (KW1.has(word)) {
        tokens.push({ text: word, color: C.keyword });
      } else if (KW2.has(word)) {
        tokens.push({ text: word, color: C.kwDecl });
      } else if (/^[A-Z]/.test(word)) {
        tokens.push({ text: word, color: C.type });
      } else if (nextChar === "(") {
        tokens.push({ text: word, color: C.fn });
      } else {
        tokens.push({ text: word, color: C.default });
      }
    } else if (other !== undefined) {
      tokens.push({ text: other, color: C.default });
    } else {
      tokens.push({ text: full, color: C.default });
    }
  }

  return tokens;
}

/** Retorna apenas os tokens visíveis até `limit` caracteres */
export function sliceTokens(all: Token[], limit: number): Token[] {
  let seen = 0;
  const result: Token[] = [];
  for (const token of all) {
    if (seen >= limit) break;
    const avail = limit - seen;
    if (avail >= token.text.length) {
      result.push(token);
    } else {
      result.push({ text: token.text.slice(0, avail), color: token.color });
    }
    seen += token.text.length;
  }
  return result;
}

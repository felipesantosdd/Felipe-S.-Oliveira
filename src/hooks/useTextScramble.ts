"use client";

import { useState, useEffect, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!&%";
const DISPLAY_MS  = 3000;
const SCRAMBLE_MS = 1500;
const TICK_MS     = 40;

export function useTextScramble(values: string[], initialDelay = 0) {
  const [text, setText] = useState(values[0]);
  const idxRef = useRef(0);

  useEffect(() => {
    if (values.length <= 1) return;

    let displayTimer: ReturnType<typeof setTimeout>;
    let scrambleTimer: ReturnType<typeof setInterval>;
    let cancelled = false;

    const scrambleTo = (target: string) => {
      const frames = Math.floor(SCRAMBLE_MS / TICK_MS);
      let frame = 0;

      scrambleTimer = setInterval(() => {
        if (cancelled) { clearInterval(scrambleTimer); return; }

        frame++;
        const revealedCount = Math.floor((frame / frames) * target.length);

        setText(
          target
            .split("")
            .map((char, i) => {
              // preserva espaços e pontos sem scramble
              if (char === " " || char === ".") return char;
              if (i < revealedCount) return char;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (frame >= frames) {
          clearInterval(scrambleTimer);
          if (!cancelled) {
            setText(target);
            displayTimer = setTimeout(goNext, DISPLAY_MS);
          }
        }
      }, TICK_MS);
    };

    const goNext = () => {
      if (cancelled) return;
      idxRef.current = (idxRef.current + 1) % values.length;
      scrambleTo(values[idxRef.current]);
    };

    // aguarda o delay inicial antes de começar o ciclo
    displayTimer = setTimeout(goNext, initialDelay + DISPLAY_MS);

    return () => {
      cancelled = true;
      clearTimeout(displayTimer);
      clearInterval(scrambleTimer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return text;
}

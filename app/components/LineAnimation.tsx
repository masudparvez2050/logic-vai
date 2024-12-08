export default function LineAnimation() {
  return (
    //     <div className="background inset-0 left-0 top-0 -z-10 flex overflow-hidden opacity-40">
    //       <div className="background">
    //         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    //           <defs>
    //             <linearGradient id="blue-gradient" gradientTransform="rotate(90)">
    //               <stop offset="0%" stopColor="#003f7f" />
    //               <stop offset="100%" stopColor="#000000" />
    //             </linearGradient>
    //             <filter id="glow">
    //               <feGaussianBlur stdDeviation={4} result="blur" />
    //               <feMerge>
    //                 <feMergeNode in="blur" />
    //                 <feMergeNode in="SourceGraphic" />
    //               </feMerge>
    //             </filter>
    //           </defs>
    //           <rect width="100%" height="100%" fill="url(#blue-gradient)" />
    //           <g filter="url(#glow)" className="lines">
    //             {Array.from({ length: 50 }).map((_, i) => {
    //               // Generate random values for position, delay, and speed
    //               const xPosition = Math.random() * 100 // Random x-position (0% to 100%)
    //               const animationDelay = Math.random() * 1 // Random delay (0s to 5s)
    //               const animationDuration = 8 + Math.random() * 5 // Random duration (3s to 8s)
    //               const lineHeight = 10 + Math.random() * 50 // Random height (50% to 100%)

    //               return (
    //                 <line
    //                   key={i}
    //                   x1={`${xPosition}%`}
    //                   y1={`${100 - lineHeight}%`} // Start height (e.g., 50%)
    //                   x2={`${xPosition}%`}
    //                   y2="100%"
    //                   stroke="rgba(173, 216, 230, 0.8)" // Light blue, slightly transparent
    //                   strokeWidth={Math.random() * 2 + 0.5} // Random thickness (0.5 to 2.5px)
    //                   style={{
    //                     animation: `drop ${animationDuration}s linear infinite`,
    //                     animationDelay: `${animationDelay}s`,
    //                   }}
    //                 />
    //               )
    //             })}
    //           </g>
    //         </svg>
    //       </div>
    //       <style
    //         dangerouslySetInnerHTML={{
    //           __html: `
    //   .background {
    //     width: 100vw;
    //     height: 100vh;
    //     overflow: hidden;
    //     position: fixed;
    //     background: #000;
    //   }
    //   svg {
    //     display: block;
    //   }
    //   .lines line {
    //     animation: drop 10s linear infinite;
    //   }
    //   @keyframes drop {
    //     0% {
    //       transform: translateY(-100%);
    //     }
    //     100% {
    //       transform: translateY(100%);
    //     }
    //   }
    // `,
    //         }}
    //       />
    //     </div>
    <div className="background inset-0 left-0 top-0 -z-10 flex overflow-hidden opacity-40">
      <div className="background">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="blue-gradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#003f7f" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation={4} result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="url(#blue-gradient)" />
          <g filter="url(#glow)" className="matrix">
            {Array.from({ length: 100 }).map((_, i) => {
              // Generate random properties for animation
              const xPosition = Math.random() * 100 // Random x-position (0% to 100%)
              const animationDelay = Math.random() * 5 // Random delay (0s to 5s)
              const animationDuration = 8 + Math.random() * 5 // Random duration (8s to 13s)
              const symbols = [
                // Brackets and braces
                '{',
                '}',
                '[',
                ']',
                '(',
                ')',
                '<',
                '>',
                '</',
                '/>',

                // Operators
                '+',
                '-',
                '*',
                '/',
                '%',
                '++',
                '--',
                '=',
                '==',
                '===',
                '!=',
                '!==',
                '<',
                '<=',
                '>',
                '>=',
                '!',
                '&&',
                '||',
                '**',
                '??',
                '?.',
                '...',
                ':',
                '::',
                '=>',
                '->',

                // Bitwise operators
                '&',
                '|',
                '^',
                '~',
                '<<',
                '>>',
                '>>>',

                // Logical operators
                '&&',
                '||',
                '!',
                '??',

                // Delimiters
                ',',
                ';',
                '.',
                '`',
                '::',
                '#',
                '@',

                // Comments
                '//',
                '/*',
                '*/',

                // Strings and template literals
                '"',
                "'",
                '`',
                '${}',
                '""',
                "''",
                '``',

                // Special characters
                '\\',
                '_',
                '$',
                '@',

                // Keywords (JavaScript, Python, etc.)
                'if',
                'else',
                'elif',
                'switch',
                'case',
                'default',
                'break',
                'continue',
                'for',
                'while',
                'do',
                'try',
                'catch',
                'finally',
                'throw',
                'return',
                'class',
                'extends',
                'super',
                'this',
                'new',
                'import',
                'export',
                'from',
                'const',
                'let',
                'var',
                'function',
                'async',
                'await',
                'yield',
                'static',
                'public',
                'private',
                'protected',
                'get',
                'set',
                'interface',
                'implements',
                'abstract',
                'enum',
                'type',
                'namespace',
                'module',
                'declare',
                'package',

                // Common functions and built-ins
                'console.log',
                'alert',
                'prompt',
                'typeof',
                'instanceof',
                'JSON.stringify',
                'JSON.parse',
                'Math.random',
                'Math.floor',
                'parseInt',
                'parseFloat',
                'isNaN',
                'isFinite',
                'Date.now',

                // File paths and extensions
                './',
                '../',
                '.js',
                '.jsx',
                '.ts',
                '.tsx',
                '.html',
                '.css',
                '.scss',
                '.json',
                '.env',
                '.gitignore',

                // Miscellaneous
                'null',
                'undefined',
                'true',
                'false',
                'NaN',
                'Infinity',
                'Error',
                'Promise',

                // Math operators and equations
                '+',
                '-',
                '×',
                '÷',
                '=',
                '<',
                '>',
                '≤',
                '≥',
                '∑',
                '∏',
                '√',
                '∞',
                'π',

                // Greek letters
                'α',
                'β',
                'γ',
                'δ',
                'ε',
                'θ',
                'λ',
                'μ',
                'ν',
                'ω',
                'Ω',
                'Φ',
                'Ψ',
                'Σ',

                // Logical and set theory symbols
                '∧',
                '∨',
                '¬',
                '∈',
                '∉',
                '⊆',
                '⊂',
                '∪',
                '∩',
                '∅',
                '∀',
                '∃',
                '∴',
                '∵',

                // Physics and Chemistry symbols
                'ℏ',
                'e⁻',
                'H₂O',
                'CO₂',
                'Δ',
                '→',
                '←',
                '⇌',
                '↔',
                '⟹',

                // Knowledge and science-related terms
                'E=mc²',
                'F=ma',
                'a²+b²=c²',
                'DNA',
                'RNA',
                'AI',
                'ML',
                '∂',
                '∇',

                // Miscellaneous symbols
                '★',
                '◆',
                '♦',
                '♠',
                '♣',
                '⚛',
                '☯',
                '∞',
              ]

              const symbol = symbols[Math.floor(Math.random() * symbols.length)] // Random symbol

              return (
                <text
                  key={i}
                  x={`${xPosition}%`}
                  y="0"
                  fill="rgba(173, 216, 230, 0.8)" // Light blue, slightly transparent
                  fontSize="16"
                  fontFamily="monospace"
                  style={{
                    animation: `drop ${animationDuration}s linear infinite`,
                    animationDelay: `${animationDelay}s`,
                  }}
                >
                  {symbol}
                </text>
              )
            })}
          </g>
        </svg>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
      .background {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        position: fixed;
        background: #000;
      }
      svg {
        display: block;
      }
      .matrix text {
        animation: drop 10s linear infinite;
      }
      @keyframes drop {
        0% {
          transform: translateY(-100%);
        }
        100% {
          transform: translateY(100%);
        }
      }
    `,
        }}
      />
    </div>
  )
}

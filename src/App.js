import React, { useState, useEffect } from 'react';
import './App.css';

const code = [
  { type: "keyword", text: "void" },
  { type: "default", text: " Greet" },
  { type: "parenthesis", text: "(" },
  { type: "parameter", text: "string name" },
  { type: "parenthesis", text: ")" },
  { type: "default", text: " {" },
  { type: "newline", text: "\n" },
  { type: "indent", text: "    " },
  { type: "default", text: "Console.WriteLine" },
  { type: "parenthesis", text: "(" },
  { type: "string", text: "\"🎉 Feliz Día Profe Soky! 🍾🍾, {name}! 📚\"" },
  { type: "parenthesis", text: ");" },
  { type: "newline", text: "\n" },
  { type: "default", text: "}" },
  { type: "newline", text: "\n\n" },
  { type: "keyword", text: "List<string>" },
  { type: "default", text: " estudiantes" },
  { type: "operator", text: " =" },
  { type: "default", text: " new List<string> {" },
  { type: "newline", text: "\n" },
  { type: "indent", text: "    " },
  { type: "string", text: '"Becerra"' },
  { type: "default", text: ", " },
  { type: "string", text: '"Camacho"' },
  { type: "default", text: ", " },
  { type: "string", text: '"Castro"' },
  { type: "default", text: ", " },
  { type: "string", text: '"Dimas"' },
  { type: "default", text: ", " },
  { type: "string", text: '"Escalante"' },
  { type: "default", text: ", " },
  { type: "string", text: '"Garcia"' },
  { type: "default", text: ", " },
  { type: "string", text: '"Hernandez"' },
  { type: "default", text: ", " },
  { type: "string", text: '"Leal"' },
  { type: "default", text: ", " },
  { type: "string", text: '"Machado"' },
  { type: "default", text: ", " },
  { type: "string", text: '"Manzanarez"' },
  { type: "default", text: ", " },
  { type: "string", text: '"Leyva Martinez"' },
  { type: "default", text: ", " },
  { type: "string", text: '"Moreno"' },
  { type: "default", text: ", " },
  { type: "string", text: '"Munguia"' },
  { type: "default", text: ", " },
  { type: "string", text: '"Perez"' },
  { type: "default", text: ", " },
  { type: "string", text: '"Peña"' },
  { type: "default", text: ", " },
  { type: "string", text: '"Palafox"' },
  { type: "default", text: ", " },
  { type: "string", text: '"Urias"' },
  { type: "default", text: ", " },
  { type: "string", text: '"Jacobo"' },
  { type: "default", text: ", " },
  { type: "string", text: '"Zayas"' },
  { type: "newline", text: "\n" },
  { type: "default", text: "};" },
  { type: "newline", text: "\n\n" },
  { type: "default", text: "estudiantes.ForEach" },
  { type: "parenthesis", text: "(" },
  { type: "parameter", text: "estudiante" },
  { type: "default", text: " => Greet" },
  { type: "parenthesis", text: "(" },
  { type: "parameter", text: "estudiante" },
  { type: "parenthesis", text: ")" },
  { type: "parenthesis", text: ");" },
  { type: "newline", text: "\n\n" },
  { type: "comment", text: "// Poner esto en una clase y SQL..." },
  { type: "newline", text: "\n" },
  { type: "default", text: "Console.WriteLine" },
  { type: "parenthesis", text: "(" },
  { type: "string", text: '"🎉🎓🍾 ¡Muchas felicidades profe Soky!! 🍾🎓🎉"' },
  { type: "parenthesis", text: ");" },
];

function App() {
  const [displayedCode, setDisplayedCode] = useState([]);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < code.length) {
        setDisplayedCode((prev) => [...prev, code[index]]);
        index++;
      } else {
        clearInterval(typingInterval); // Detenemos la animación al terminar
      }
    }, 50); // Velocidad de escritura (50ms por elemento)

    const cursorBlinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500); // Cursor parpadea cada 500ms

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorBlinkInterval);
    };
  }, []);

  return (
    <div className="app">
      <div className="vscode">
        <div className="vscode-header"> Program.cs - Visual Studio Code</div>
        <div className="vscode-body">
          <pre className="code">
            <code>
              {displayedCode.map((item, index) => {
                if (!item || !item.type) {
                  return null;
                }

                if (item.type === "newline") {
                  return <br key={index} />;
                }
                if (item.type === "indent") {
                  return <span key={index}>&nbsp;&nbsp;&nbsp;&nbsp;</span>;
                }
                return (
                  <span key={index} className={item.type}>
                    {item.text}
                  </span>
                );
              })}
              {cursorVisible && <span className="cursor">|</span>}
            </code>
          </pre>
        </div>
      </div>
      {/* Footer */}
      <footer className="footer">
        <p>© Santhonys x TaxtezBoyz| Muchas felicidades profe, que se la pase bien 🎉</p>
        <a
        /*
          href="https://github.com/YourDaddySebas/happy-message-react"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
          */
        >
          
          <img
          /*
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub logo"
            className="github-icon"
            */
          />
        </a>
      </footer>
    </div>
  );
}

export default App;

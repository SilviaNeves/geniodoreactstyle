import React, { useState } from "react";
import "./global.scss";
import "./styled.scss";

export default function App() {
  const [lampada, setLampada] = useState(false);

  const trocarLampada = () => {
    setLampada(!lampada);
  };

  return (
    <main>
      <h2 className="titulo">
        "Liberte a magia da programação com a Lâmpada de Aladim."
      </h2>
      <img
        src={
          lampada
            ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true"
            : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"
        }
        alt="Lâmpada"
      />
      <button onClick={trocarLampada}>
        <h3 className="aviso">Clique Aqui e faça um Pedido</h3>
      </button>
    </main>
  );
}

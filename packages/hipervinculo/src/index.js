import React, { useState } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import InitialPage from './components/layout/pages/InitialPage';
import GlobalStyle from './style/GlobalStyle';
import { Sound } from './components/Sound';
import styled from "styled-components";

const Controls = styled.div`
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -moz-box;
    display: box;
    -webkit-box-orient: horizontal;
    -moz-box-orient: horizontal;
    box-orient: horizontal;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    box-pack: center;
    -webkit-box-align: center;
    -moz-box-align: center;
    box-align: center;
    color: #ffffff;
    text-align: center;
    font-family: Arial;
    background-color: hsla(0, 0, 0, 0.3);
    font-size: 14px;
    line-height: 24px;
    cursor: pointer;
    width: 100vw;
    height: 100vh;
    z-index: 5555;
`;

const Instruction = styled.div`
  font-size: 1.6rem;
  padding: 0.3rem;
  align-items: "center";
  font-weight: 500;
`;

function Overlay() {
  const [started, setStarted] = useState(false); 
  const [ready, set] = useState(false)

  return (
    <div className="Overlay">
      <GlobalStyle/>
      <Sound>
        {
          started ?
          
              
        <> 
          <App/>
          {!ready && (
            <>
              <div className="overlay"  onClick={() => set(true)}>
                <div>
                  <Instruction>Instrucciones:</Instruction>
                  <br/>
                  <Instruction>Encontrá los Links para Acceder a otros mapas.</Instruction>
                  <br/>
                  <Instruction>- W,A,S,D: Para Moverse</Instruction>
                  <br/>
                  <Instruction>- ESPACIO: Para saltar Infinitamente</Instruction>
                  <br/>
                  <Instruction>- Mouse: para Mover la Cámara</Instruction>
                  <br/>
                  <Instruction>Haz Click para Comenzar</Instruction>
                </div>
              </div>
            </>
          )}
          
        </>
      : <InitialPage started={started} start={() => setStarted(true)}/>
        }
      </Sound>
    </div>
  );
}

ReactDOM.render(<Overlay />, document.getElementById("root"))

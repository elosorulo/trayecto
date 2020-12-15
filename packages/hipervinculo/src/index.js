import React, { useState } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import InitialPage from './components/layout/pages/InitialPage';
import GlobalStyle from './style/GlobalStyle';
import { Sound } from './components/Sound';

function Overlay() {
  const [started, set] = useState(false);
  return (
    <div className="Overlay">
      <GlobalStyle/>
      <Sound>
        {
          started ? <App/> : <InitialPage started={started} start={() => set(true)}/>
        }
      </Sound>
    </div>
  );
}

ReactDOM.render(<Overlay />, document.getElementById("root"))

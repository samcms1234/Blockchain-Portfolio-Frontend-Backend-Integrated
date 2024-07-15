import {useState} from "react";
import Hero from "./components/hero/Hero";
import Wallet from "./components/Wallet/Wallet";
import Handles from "./components/handles/Handles";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import "./index.css";
function App() {
  const [state,setState]=useState({
    web3:null,
    contract:null
  })
  const saveState=(state)=>{
    console.log(state);
    setState(state);
  };

  return (
    <>
      <Wallet saveState={saveState}></Wallet>
      <div id="hero"><Hero /></div>
      <div id="handles"><Handles /></div>
      <div id="projects"><Projects state={state} /></div>
      <div id="skills"><Skills /></div>
      <div id="experience"><Experience state={state} /></div>
      <div id="contact"><Contact /></div>
      <Handles />
    </>
  );
}

export default App;

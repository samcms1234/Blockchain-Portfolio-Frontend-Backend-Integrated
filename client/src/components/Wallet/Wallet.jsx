import {useState} from "react";
import ABI from "./Portfolio.json";
import Web3 from "web3";
import { contractAddress } from "../utils/contracts-config";
import './Wallet.css';

const Wallet =({saveState})=>{
      const [connected,setConnected]=useState(false);
      const [menuOpen, setMenuOpen] = useState(false);

      const isAndroid = /android/i.test(navigator.userAgent);
      const init =async()=>{
      try{
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({method:'eth_requestAccounts'});
        const contract = new web3.eth.Contract(
            ABI.abi,
            contractAddress
        );
         setConnected(true);
         saveState({web3:web3,contract:contract});
      }catch(error){
        alert("Please Install Metamask");
      }
        
      }

      const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };
      
      return<>
      <div className="header">
        <button className="menuToggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`Menu ${menuOpen ? 'show' : ''}`}>
          <div className="menuItems"><a href="#">Home</a></div>
          <div className="menuItems"><a href="#">Projects</a></div>
          <div className="menuItems"><a href="#">Experience</a></div>
          <div className="menuItems"><a href="#">Contact me</a></div>
        </div>
      {isAndroid  && <button className="connectBTN">
         <a href="https://metamask.app.link/dapp/sriche.netlify.app/">Click For Mobile</a>
        </button>  } 
      {
        connected ?
        <button className="connectBTN-Disabled" disabled={connected}>Connected</button>
        :
        <button className="connectBTN" onClick={init}>Connect Metamask</button>
      }
      </div>
      </>
}
export default Wallet;
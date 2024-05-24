import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { ethers } from "ethers";
import * as Constants from "../Utils/congif";

function App() {
  useEffect(() => {
    const connectToMetamask = async () => {
      try {
        if (window.ethereum) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          await provider.send("eth_requestAccounts", []);
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          console.log("Metamask Connected : " + address);
        } else {
          console.log("Install Metamask");
        }
      }
      catch (e) {
        console.log(e);
      }
    }
    connectToMetamask();
  }
    , []);

  return (
    <div className={styles.container}>
      <h1>Connect to Metamask</h1>
    </div>
  );
}

export default App;
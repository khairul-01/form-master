import { createContext, useState } from "react";
import Aunty from "../aunty/Aunty";
import Dad from "../dad/Dad";
import Uncle from "../uncle/Uncle";
import "./grandpa.css"

export const AssetContext = createContext('Gold');

export const MoneyContext = createContext(1000)

const Grandpa = () => {

   const [money, setMoney] = useState(1000);

   const asset = 'diamond';
   return (
      <div className="grandpa">
         <h2>Grandpa</h2>
         <p>Net Money: {money}</p>
         <MoneyContext.Provider value={[money, setMoney]}>
            <AssetContext.Provider value="Gold">
               <section className="flex">
                  <Dad asset={asset}></Dad>
                  <Aunty></Aunty>
                  <Uncle asset={asset}></Uncle>
               </section>
            </AssetContext.Provider>
         </MoneyContext.Provider>
      </div>
   );
};

export default Grandpa;
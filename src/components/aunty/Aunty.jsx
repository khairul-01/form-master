import { useContext } from "react";
import Cousin from "../cousin/Cousin";
import { MoneyContext } from "../grandpa/Grandpa";

const Aunty = () => {
   const [money, setMoney]  = useContext(MoneyContext);
   return (
      <div>
         <h2>Aunty</h2>
         <section className="flex">
            <Cousin name={'Rafsan'}></Cousin>
            <Cousin name={'Sujana'}></Cousin>
         </section>
         <p>Money: {money} </p>
         <button onClick={()=> setMoney(money+1000)}>Add 1000 take</button>
      </div>
   );
};

export default Aunty;
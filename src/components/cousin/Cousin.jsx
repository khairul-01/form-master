import Friend from "../friend/Friend";
import Special from "../special/Special";

const Cousin = ({name, asset}) => {
   return (
      <div>
         <h2>{name}</h2>
         <section>
            {asset && <Special asset={asset}></Special>}
            {name === 'Rubaya' && <Friend></Friend>}
         </section>
      </div>
   );
};

export default Cousin;
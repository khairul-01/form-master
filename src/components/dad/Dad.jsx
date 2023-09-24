import Myself from './../myself/Myself';
import Sister from './../sister/Sister';
import Brother from './../brother/Brother';

const Dad = ({asset}) => {
   return (
      <div>
         <h2>Daddy</h2>
         <section className='flex'>
            <Myself asset={asset}></Myself>
            <Sister></Sister>
            <Brother></Brother>
         </section>
      </div>
   );
};

export default Dad;
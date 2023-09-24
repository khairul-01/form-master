
import Cousin from './../cousin/Cousin';
const Uncle = ({asset}) => {
   return (
      <div>
         <h2>Uncle</h2>
         <section className='flex'>
            <Cousin name={'Mamshad'}></Cousin>
            <Cousin name={'Rubaya'} asset={asset}></Cousin>
         </section>
      </div>
   );
};

export default Uncle;
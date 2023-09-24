import { useState } from "react";

const StatefulForm = () => {
   
   const handleSubmit = e => {
      e.preventDefault();
      if(password.length < 6){
         setError('Please enter at least 6 or longer character');
      }
      else{
         setError('');
         console.log(name, email, password);
      }
   }

   const [email, setEmail] = useState(null);
   const [name, setName] = useState('Otopi');
   const [password, setPassword] = useState(null);
   const [error, setError] = useState('')

   const handleChange = e => {
      console.log(e.target.value);
      setEmail(e.target.value);
      
   }
   const handleNameChange = e => {
      setName(e.target.value);
   }
   const handlePasswordChange = e => {
      setPassword(e.target.value);
   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input onChange={handleNameChange} value={name}
             type="text" name="name" /><br />
            <input 
            onChange={handleChange}
            type="email" name="email" id="" />
            <br />
            <input onChange={handlePasswordChange} 
            type="password" name="password" required /> <br />
            <input type="submit" value="Submit" />
            {
               error && <p>{error}</p>
            }
         </form>
      </div>
   );
};

export default StatefulForm;
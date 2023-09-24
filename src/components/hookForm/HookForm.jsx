import useInputState from "../hook/useInputState";

const HookForm = () => {

   // const [name, handleNameChange] = useInputState('Rojoni hooked');
   const emailState = useInputState('rojoni@sojoni.go');


   const handleSubmit = e => {
      e.preventDefault();
      console.log('form data', emailState.value);
   }
   return (
      <div>
         <form onSubmit={handleSubmit}>
            {/* <input onChange={handleNameChange} value={name} type="text" name="name" /><br /> */}
            <input {...emailState} type="email" name="email" id="" />
            <br />
            <input type="password" name="password" /> <br />
            <input type="submit" value="Submit" />
         </form>
      </div>
   );
};

export default HookForm;
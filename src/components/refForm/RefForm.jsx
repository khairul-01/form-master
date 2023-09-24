import { useEffect, useRef } from "react";

const RefForm = () => {

   const handleSubmit = e => {
      e.preventDefault();
      console.log(nameRef.current.value, passwordRef.current.value, emailRef.current.value);
   }

   useEffect( ()=>{
      nameRef.current.focus();
   },[])

   const nameRef = useRef(null);
   const passwordRef = useRef(null);
   const emailRef = useRef(null);

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input ref={nameRef} type="text" name="name" /><br />
            <input ref={emailRef} defaultValue={'rojoni@sojoni.com'} type="email" name="email" id="" />
            <br />
            <input ref={passwordRef} type="password" name="password" /> <br />
            <input type="submit" value="Submit" />
         </form>
      </div>
   );
};

export default RefForm;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReUsableForm from './components/reusableForm/ReUsableForm'
import Grandpa from './components/grandpa/Grandpa'
// import SimpleForm from './components/simpleForm/SimpleForm'
// import StatefulForm from './components/statefuForm/StatefulForm'
// import RefForm from './components/refForm/RefForm'
// import HookForm from './components/hookForm/HookForm'

function App() {

  const handleSignSubmit = data => {
    console.log('Sign Up data', data);
 }

 const handleProfileUpdate = data => {
   console.log('Profile Updata data', data);
 }

  return (
    <>
      <h1>Form Master</h1>

      <Grandpa></Grandpa>
      
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReUsableForm formTitle = 'Sign Up' handleSubmit={handleSignSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReUsableForm>
      <ReUsableForm formTitle = 'Profile Update' handleSubmit={handleProfileUpdate}
      submitBtnText='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>Please always keep your profile updated</p>
        </div>
      </ReUsableForm> */}
    </>
  )
}

export default App

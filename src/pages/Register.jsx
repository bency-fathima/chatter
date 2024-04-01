import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios' 
import { registerRoute } from '../utils/apiRoutes';
import { register } from '../../../server/controller/userController';



function Register() {

  const[values,setValues]=useState({
    username:"",
    email:'',
    password:'',
    confirmpassword:''
  })

    const handleSubmit=async (e)=>{
        e.preventDefault()
   if(handleValidation()){
    const { username, email, password, confirmpassword } = values;
    const {data}=await axios.post(registerRoute,{
      username,email,password,
    })

   }
    }
    const handleChange=(e)=>{
      setValues({...values,[e.target.name]:e.target.value})

    };
    const toastOptions = {
      position: "bottom-right",
      autoClose: 8000,
      pauseOnHover: true,
      draggable: true,
      theme: "dark"
    };
    
    const handleValidation = () => {
      console.log("invalidation",register)
      const { username, email, password, confirmpassword } = values;
      if (confirmpassword !== password) {
        toast.error("password and confirm password should be same", toastOptions);
        return false;
      } else if (username.length < 3) {
        toast.error("username should be greater than 3 characters", toastOptions);
        return false;
      } else if (password.length < 8) {
        toast.error("password should be greater than or equal to 8 characters", toastOptions);
        return false;
      } else if (email === "") {
        toast.error("email is required", toastOptions);
        return false;
      }
      return true;
    };
    
 
    
    
  return (
    <>
    <FormContainer>
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <div className='brand'>
              <img src={logo} alt='chat'></img>
              <h1>Chatter</h1>
              </div>
              <input type='text' placeholder='username' name='username' onChange={(e)=>{handleChange(e)}}></input>
              <input type='email' placeholder='email' name='email' onChange={(e)=>{handleChange(e)}}></input>
              <input type='password' placeholder='password' name='password' onChange={(e)=>{handleChange(e)}}></input>
              <input type='password' placeholder='confirm password' name='confirmpassword' onChange={(e)=>{handleChange(e)}}></input>
              <button type='submit'>Create a user</button>
              <span>Already have a account ?<Link to="/login">Login</Link></span>            
        </form>
    </FormContainer>
    <ToastContainer/>
    
    </>
 
  )
}

const FormContainer = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
align-items: center;
background-color: #1f1f36;
.brand{
  display:flex;
  align-items:center;
  gap:1rem;
  justify-content:center;
  img{
    height:5rem;
  }
  h1{
    color:white;
    text-transform:uppercase;
  }
  }

  form{
    display:flex;
    flex-direction:column;
    gap:1rem;
    background-color:#111112;
    border-radius:2rem;
    padding:2rem 3rem;
    input{
      background-color:transparent;
      padding:1rem;
      border:0.1rem solid#4e0eff;
      border-radius:0.4rem;
      color:white;
      width:100%;
      font-size:1rem;
      // &:focus{
      //   border:0.1rem solid #997af0;
      //   outline:none;
      // }
    }
    button{
      background-color:green;
      color:white;
      padding:1rem 2rem;
      border:none;
      font-weight:bold;
      border-radius:0.4rem;
      font-size:1rem;
      cursor:pointer;
      transition:0.5s ease-in-out;
      &:hover{
        background-color:#79b86e;
      }
      text-transform:uppercase
    }
    span{
      color:white;
      text-transform:uppercase;
      a{
        text-transform:none;
        font-weight:bold;
        color:#2b30c2;
        text-decoration:none;


      }
    }
  }
}
`;

 


export default Register

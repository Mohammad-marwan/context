import React, { useContext } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import UserContext from './User.jsx'
import axios from 'axios'

export default function Login() {
    const {isLogin,setIsLogin} = useContext(UserContext);
    const schema = yup.object({
        email:yup.string().email().required(),
        password:yup.string().required(),
        
       })
        const formik = useFormik({
            initialValues:{
                email:'',
                password:''
            },onSubmit:async()=>{
                const {data} = await axios.post(`https://ecommerce-node4.onrender.com/auth/signin`,formik.values);
                console.log(data);
                setIsLogin(true)
            },validationSchema:schema
        })
  return (
    <>
    <h2>{userName}</h2>
   <form onSubmit={formik.handleSubmit} >
  <div className="form-floating mb-3">
    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
    name="email" value={formik.email} onChange={formik.handleChange} />
    <label htmlFor="floatingInput">Email address</label>
    {formik.errors.email?<div className='alert alert-danger'>{formik.errors.email}</div>:null}
  </div>
  <div className="form-floating">
    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" 
    name="password" value={formik.password} onChange={formik.handleChange} />
    <label htmlFor="floatingPassword">Password</label>
    {formik.errors.password?<div className='alert alert-danger'>{formik.errors.password}</div>:null}
  </div>
  <button type="submit" className='btn btn-dark my-3'>Login</button>
</form>

      
    </>
  )
}

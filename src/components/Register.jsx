import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useContext } from 'react'
import UserContext from './User.jsx'
export default function Register() {
    const isLogin = useContext(UserContext)
   const schema = yup.object({
    name:yup.string().required(),
    email:yup.string().email().required(),
    password:yup.string().min(8).required(),
    
   })
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            password:''
        },onSubmit:async()=>{
            const {data} = await axios.post(`https://ecommerce-node4.onrender.com/auth/signup`,formik.values);
            console.log(data);
        },validationSchema:schema
    })
  return (
    <>
    <h3>{isLogin}</h3>
    <h2 className="my-3">Register</h2>
   <form onSubmit={formik.handleSubmit} >
   <div className="form-floating mb-3">
    <input type="text" className="form-control" id="floatingInput" placeholder="UserName"
    name="name" value={formik.name} onChange={formik.handleChange}/>
    <label htmlFor="floatingInput">UserName</label>
    {formik.errors.name?<div className='alert alert-danger'>{formik.errors.name}</div>:null}
  </div>
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
  <button type="submit" className='btn btn-dark my-3'>Register</button>
</form>

      
    </>
  )
}

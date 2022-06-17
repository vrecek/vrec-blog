import React from 'react'
import { FormType } from '../../../interfaces/LoginRegisterInterface'
import Button from '../../REUSABLE/Button'
import InputDiv from './InputDiv'
import PasswordDiv from './PasswordDiv'

const LoginForm = ({ submitAction }: FormType) => {
   return (
      <form onSubmit={ submitAction } className="login">
         <section className="wrap">

            <h2>Sign up</h2>

            <InputDiv 
               labelText='Username'
               cname='input'
               type='text'
            />

            <PasswordDiv cname='input' labelTxt='Password' />

            <InputDiv 
               labelText='Remember me'
               cname='input-check'
               type='checkbox'
               idFor='check'
            />

            <Button text='Log in' action={ () => {} } />
            <h5>Forgot password ?</h5>
         </section>
      </form>
   )
}

export default LoginForm
import React, { useState, useContext, FormEvent, useEffect } from 'react'
import {AuthContext} from '../../context/auth'

import Input from '../../components/Input'
import Logo from '../../assets/images/logo.svg'
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import EyeIcon from '../../assets/images/icons/eye.svg'

import './styles.css'
import { Link } from 'react-router-dom'

function Login(){
    const {signIn} = useContext(AuthContext)

    const [isPasswordVisible,setIsPasswordVisible] = useState(true)

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    async function handleSignIn(event: FormEvent) {
        event.preventDefault()
        const data = {email,password}
        await signIn(data)
    }

    return(
        <div id="page-login">
            <div id="page-login-content" className="container">
                    <div className="logo">
                        <img src={Logo} alt="proffy"/>
                        <h2>Sua plataforma de estudos online</h2>
                    </div>
                    
                    <div className="login">
                        <form onSubmit={handleSignIn}>
                            <h2>Fazer login</h2>
                            <Input label="" name="email" type="email" placeholder="E-mail" onChange={e=>{setEmail(e.target.value)}}/>

                            <div className="imgpswd">
                                <Input label="" name="password" type={isPasswordVisible ? 'password' : 'text'} placeholder="Senha" onChange={e=>{setPassword(e.target.value)}}/>
                                <img className="show" src={EyeIcon} alt="Coração roxo" onClick={(e)=>{setIsPasswordVisible(!isPasswordVisible)}}/>
                            </div>

                            <div className="options">
                                <div>
                                    <input type="checkbox" name="" id="lembrar"/>
                                    <label htmlFor="lembrar">Lembrar-me</label>
                                </div>
                                <Link to='/recovery-password'>Esqueci minha senha</Link>
                            </div>

                            <button type="submit">Entrar</button>
                        </form>

                        <footer>
                            <span>
                                Não tem uma conta?<br></br>
                                <Link to='/sign-up'>Cadastre-se</Link>
                            </span>
                            <span>
                                É de graça <img src={PurpleHeartIcon} alt="Coração roxo"/>
                            </span>
                        </footer>
                    </div>
            </div>
        </div>
    )
}
export default Login
import React, {createContext, useState, useEffect} from 'react'
import {apiPost} from '../services/api'
import Loading from '../components/Loading'

interface AuthContextData {
    signed: boolean
    account: object | null
    signIn(data: any, checked: Boolean): Promise<void>
    signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({children}) => {
    const [account, setAccount] = useState<object | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const tk = localStorage.getItem('token')
        if(tk){
            setAccount({...account})
        }
        setLoading(false)
    },[])

    async function signIn(data: any, checked: Boolean){
        setLoading(true)
        try{
            const response:any = await apiPost('sign-in',data)
            if(response.status === 200){
                if(checked){
                    localStorage.setItem('email', JSON.stringify(data.email))
                    localStorage.setItem('password', JSON.stringify(data.password))
                }
                localStorage.setItem('token', JSON.stringify(response.data.metadata.token))
                localStorage.setItem('username', JSON.stringify(response.data.account[0].name +" "+ response.data.account[0].surname))
                setAccount(response.data.account)
                setLoading(false)
            }
        }catch(err){
            setLoading(false)
            console.log(err)
            alert('Dados inválidos')
        }
    }

    function signOut(){
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        setAccount(null)
    }

    if(loading){
        return <Loading/>
    }


    return(
        <AuthContext.Provider value={{signed:!!account,account,signIn,signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }
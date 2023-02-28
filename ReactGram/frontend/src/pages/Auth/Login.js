import './Auth.css'
//components
import { Link } from 'react-router-dom'
import Message from '../../components/Message'

//hooks
import { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'

//redux
import { login, reset } from '../../slices/authSlice'


const Login = () => {
  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState("")

  const dispath = useDispatch()

  const {loading, error} = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      email,
      password
    }
    dispath(login(user))
  }
  //clean all auth states
  useEffect(() =>{
   dispath(reset())
  },[dispath])


  return (
    <div id='login'>
      <h2>ReactGram</h2>
      <p className='subtitle'>Faça o login</p>
      <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        placeholder='E-mail' 
        onChange={(e) => setEmail(e.target.value)} 
        value={email || ""}
        />
        <input 
        type="password" 
        placeholder='Senha' 
        onChange={(e) => setPassword(e.target.value)} 
        value={password || ""}
        />
        {!loading && <input type="submit" value="Entrar" />}
        {loading && <input type="submit" value="Aguarde..." disabled />}
        {error && <Message msg={error} type="error"/>}
      </form>
      <p>Não possui uma conta? <Link to="/register">Clique aqui</Link></p>
    </div>
  )
}

export default Login
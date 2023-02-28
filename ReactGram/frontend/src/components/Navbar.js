import './Navbar.css'

//components
import { NavLink,Link } from 'react-router-dom'
import {
    BsSearch,
    BsHouseDoorFill,
    BsFillPersonFill,
    BsFillCameraFill
    } from 'react-icons/bs'

    //hooks
    import { useAuth } from '../hooks/useAuth'
    import { useDispatch, useSelector } from 'react-redux'
    import { useNavigate } from 'react-router-dom'

    //redux
    import { logout, reset } from '../slices/authSlice'

const Navbar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
        dispatch(reset())

        navigate("/login")
    }

    const { auth } = useAuth()
    const { user } = useSelector((state) => state.auth)


  return (
    <div>
        <nav id='nav'>
            <Link to='/'>ReactGram</Link>
            <form id='search-form'>
                <BsSearch/>
                <input type="text" placeholder='Pesquisar' />
            </form>
            <ul id='nav-links'>
                {auth ? (
                    <>
                <li>
                    <NavLink to='/'>
                    <BsHouseDoorFill/>
                    </NavLink>
                </li>
                {user && (
                    <li>
                        <NavLink to={`/users/${user.id}`}>
                            <BsFillCameraFill/>
                        </NavLink>
                    </li>
                )}
                    <li>
                        <NavLink to="/profile">
                            <BsFillPersonFill/>
                        </NavLink>
                    </li>
                    <li>
                        <span onClick={handleLogout}>Sair</span>
                    </li>
                    </>
                ) : (
                   <>
                   <li>
                    <NavLink to='/login'>
                        Entrar
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/register'>
                        Cadastrar
                    </NavLink>
                </li>
                   </> 
                )}

            </ul>
        </nav>
    </div>
  )
}

export default Navbar
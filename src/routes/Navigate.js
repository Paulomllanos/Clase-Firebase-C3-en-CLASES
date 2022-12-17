import { NavLink, Link } from 'react-router-dom';
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';
import { useState } from 'react';
//Seguimiento si esta conectado o no
import { onAuthStateChanged, signOut } from 'firebase/auth';

import { auth } from '../config/firebase';


//* Fragment es un contenedor de react , es un fragmento ---> <> == <Fragment>

function Navigation(){
    const [usuario, setUsuario] = useState(null);

    onAuthStateChanged(auth, (user) => {
        if(user) {
            setUsuario(user);
        } else {
            setUsuario(null)
        }
    })

    return(
        <>
            <Navbar id='superedit' collapseOnSelect expand="lg" variant='dark' bg='dark'>
                <Navbar.Brand>
                    <Nav.Link as={NavLink} to='/' className='ms-3'>Donde los Flaites</Nav.Link>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='me-auto'>
                    <Nav.Link as={NavLink} to='/menu'>
                       Menu
                    </Nav.Link>
                    <Nav.Link as={NavLink} to='/delivery'>
                       Delivery
                    </Nav.Link>
                    <NavDropdown title='Admin'>
                        <NavDropdown.Item as={NavLink} to='/admin/pedidos'>Pedidos</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                {usuario ? 
                    <NavDropdown title={usuario.email}>
                        <NavDropdown.Item as={NavLink} to='/profile'>Perfil</NavDropdown.Item>
                    </NavDropdown> 
                    : 
                    <Nav.Link as={NavLink} to='/login'>Login</Nav.Link>
                }
                {
                    usuario ? <Link to='/'><Button variant='primary' className='me-3' onClick={() => signOut(auth)}>Cerrar Sesion</Button></Link>
                    :
                    <Nav.Link as={NavLink} to='/register'>Register</Nav.Link>
                }
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigation;
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Auth = () => {

    const [register, setRegister] = useState(false)
    const [redirigir, setRedirigir] = useState(false)


    const handlerSubmit = async(e) => {
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value; 

        if(register) {
            await createUserWithEmailAndPassword(auth, email, password)
            setRedirigir(true)
        } else {
            await signInWithEmailAndPassword(auth, email, password)
            setRedirigir(true)
        }
    }

    if(redirigir === true){
        return <Navigate to="/" /> 
    }

  return (
    <div>
        <Form onSubmit={handlerSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="Email" placeholder="Email" name='email' id="email"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Que desea Llevar?" name='password' id="password"/>
            </Form.Group>

            <Button variant="primary" type='submit' onClick={() => redirigir}>
                {register ? 'Registrarse' : 'Inciar Sesion '}
            </Button>
        </Form>

        <Form.Group className="mb-3" controlId="formBasicPassword">
                <Button variant="success" className="mt-4 form-control" onClick={() => setRegister(!register)}>
                    {register ? 'Estas Registrado? Inicia Sesion' : 'No estas registrado? Registrate'}
                </Button>
        </Form.Group>
    </div>
  )
}

export default Auth
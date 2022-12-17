import {db} from '../../config/firebase'

import { useState } from 'react';

import { collection, addDoc } from 'firebase/firestore';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Delivery = () => {

    const valorInicial = {
        nombre: '',
        pedido: '',
        direccion: ''
    }

    //Variable de estado

    const [client, setClient] = useState(valorInicial)

    //controlar inputs

    const handleInput = (e) => {
        e.preventDefault(e)
        const {name, value} = e.target;
        setClient({
            ...client,
            [name]: value
        })
    }

    const enviarPedido = async(e) => {
        e.preventDefault()

        try {
            const colRef = collection(db, 'clientes')
            await addDoc(colRef, {
                ...client
            })
        } catch (error) {
            console.log(error)
        }

        setClient({...valorInicial})
    }


   
  return (
    <div className='container'>
        <Form onSubmit={enviarPedido}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Ingresar Nombre</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" name='nombre' onChange={handleInput} value={client.nombre}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Que desea Llevar?</Form.Label>
            <Form.Control type="text" placeholder="Que desea Llevar?" name='pedido' onChange={handleInput} value={client.pedido}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Su domicilio</Form.Label>
            <Form.Control type="text" placeholder="Su Domicilio" name='direccion' onChange={handleInput} value={client.direccion}/>
        </Form.Group>
       
        <Button variant="primary" type='submit'>
            Submit
        </Button>
    </Form>
    </div>
  )
}

export default Delivery
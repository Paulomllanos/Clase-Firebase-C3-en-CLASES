import {useState, useEffect} from 'react';
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../../config/firebase';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
const Pedidos = () => {

    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        const getPedidos = async() => {
            try {
                const colRef = collection(db, 'clientes') // resive 2 parametros (el servicio de firestore, el nombr eextacto entre comillas de la base de datos);
                const response = await getDocs(colRef)

                const docs = response.docs.map((doc) => {
                    const data = doc.data();
                    data.id = doc.id;
                    return data;
                })

                setPedidos(docs)
            } catch (error) {
                console.log(error)
            }
        }


        getPedidos()
    }, [])



  return (
    <div className='container'>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Cliente</th>
                    <th>Pedido</th>
                    <th>Dirección</th>
                    <th>Accion</th>
                </tr>
            </thead>


            {pedidos.map(pedido => (
                <tbody key={pedido.id}>
                    <tr>
                        <td>{pedido.id}</td>
                        <td>{pedido.nombre}</td>
                        <td>{pedido.pedido}</td>
                        <td>{pedido.direccion}</td>
                        <td><Button variant='success'>Editar</Button></td>
                        <td><Button variant='danger'>Eliminar</Button></td>
                    </tr>
                    
                </tbody>
            ))}
            
        </Table>
    </div>
  )
}

export default Pedidos
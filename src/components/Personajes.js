import React, { useEffect } from 'react';
import {Container, Row} from 'react-bootstrap'

import Personaje from './Personaje'

// Redux
import {useDispatch, useSelector}  from 'react-redux'
import { mostrarPersonajes } from '../actions/personajesActions'

const Personajes = () => {

  const dispatch = useDispatch();

  useEffect(()=> {
    // consultar API 
    const cargarDatos = () => dispatch(mostrarPersonajes())
    cargarDatos();
  }, [])

  const personajes = useSelector(state => state.personajes)
  return ( 
    <Container>
      <Row>
        {personajes.personajes.map(personaje => (
         <Personaje key={personaje.id} personaje={personaje}/>
        ))}
      </Row>
    </Container>
   );
}
 
export default Personajes;
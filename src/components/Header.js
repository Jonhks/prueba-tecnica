import React, {useState} from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'

// actions de Redux
import { crearNuevosPersonajes } from '../actions/personajesActions';
import { useDispatch, useSelector } from 'react-redux'
import { mostrarPersonajes } from '../actions/personajesActions'


const Header = () => {

  // state del componente
  const [personaje, setPersonaje    ] = useState('');

  // utilizar useDispatch
  const dispatch = useDispatch();
  const cargarDatos = () => dispatch(mostrarPersonajes())

  // ejecutar el action
  const agregarPersonajes = personaje => dispatch(crearNuevosPersonajes(personaje))

  // cuando se haga submit 
  const submitPersonajes = e => {
    e.preventDefault();
    // validar formulario
    if(personaje.trim() === ''){
      return;
    }
    // si hay errores
    // crear personajes
    agregarPersonajes({ 
      personaje,
    })
  };

  const personajes = useSelector(state => state.personajes)

  return ( 
    <Navbar className="bg-light justify-content-between">
        <h1>API Rick And Morty</h1>
      {personajes.personajes.length <2 ? 
        <Button onClick={cargarDatos} type="submit">Ver todos</Button>
      : null
      }
      <Form onSubmit={submitPersonajes} inline>
        <FormControl 
          type="text" 
          placeholder="Search" 
          className=" mr-sm-2" 
          name="personaje"
          value={personaje}
          onChange={e => setPersonaje(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </Form>
    </Navbar>
   );
}
 
export default Header;
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {

  const [idPersonaje, setIdPersonaje] = useState(null)
  const [personajeElegido, setPersonajeElegido] = useState({})

  useEffect(() => {
    const obtenerPersonaje =  async () => {
      if(!idPersonaje) return;
      const url = `https://rickandmortyapi.com/api/character/${idPersonaje}`
      const resultado = await axios.get(url);
      setPersonajeElegido(resultado.data)
    }
    obtenerPersonaje()
  }, [idPersonaje]);

  return (

    <ModalContext.Provider
      value={{
        personajeElegido,
        setIdPersonaje
      }}
    >
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalProvider;
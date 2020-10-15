import {
  MOSTRAR_PERSONAJES,
  MOSTRAR_PERSONAJES_EXITO,
  MOSTRAR_PERSONAJES_ERROR,

  FILTRAR_PERSONAJES,
} from '../types';

import Axios from 'axios'

export function  crearNuevosPersonajes(personaje){
  return (dispatch) => {
    dispatch(filtrarPersonaje(personaje))
  };
};

const filtrarPersonaje = (personajeAFiltrar) => ({
  type: FILTRAR_PERSONAJES,
  payload: personajeAFiltrar
})


export function mostrarPersonajes (){
  return async (dispatch) => {
    dispatch(getData());
    try {
      const respuesta = await Axios.get('https://rickandmortyapi.com/api/character')
      dispatch(desargaPersonajesExito(respuesta.data.results))
    } catch (error) {
      dispatch(descargaPersonajesError())
    }
  }
}

const getData = () => ({
  type: MOSTRAR_PERSONAJES, 
  payload: true,
})

const desargaPersonajesExito = personajes => ({
  type: MOSTRAR_PERSONAJES_EXITO,
  payload: personajes,
}) 

const descargaPersonajesError = () => ({
  type: MOSTRAR_PERSONAJES_ERROR,
  payload: true,
})


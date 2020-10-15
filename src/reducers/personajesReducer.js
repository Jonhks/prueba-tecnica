import {
  MOSTRAR_PERSONAJES,
  MOSTRAR_PERSONAJES_EXITO,
  MOSTRAR_PERSONAJES_ERROR,

  FILTRAR_PERSONAJES,
} from '../types';


const initialState = {
  personajes: [],
  error: false,
  loading: false,
  personajeAFiltrar: null,
}

export default (state = initialState, action) => {
  switch(action.type){
    case MOSTRAR_PERSONAJES:
      return {
        ...state,
        loading: action.payload 
      }
      case MOSTRAR_PERSONAJES_EXITO:
      return {
        ...state,
        loading: false,
        error: false,
        personajes: action.payload
      }
      case MOSTRAR_PERSONAJES_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload
        }
    case FILTRAR_PERSONAJES:
      return {
        ...state,
        personajes: state.personajes.filter(personaje => action.payload.personaje === personaje.name),
        loading: true,
      }
    default: 
    return state;
  }
}
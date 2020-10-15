import React, {useContext, useState} from 'react';
import {Card, Button} from 'react-bootstrap';
import { ModalContext } from '../context/ModalContext'

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Personaje = ({personaje}) => {

  // configuracion del modal material ui
  const [ modalStyle ] = useState(getModalStyle);
  const [ open, setOpen ] = useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const {personajeElegido, setIdPersonaje } = useContext(ModalContext);
  return ( 
    <Card style={{ width: '20rem', margin:'2%' }} key={personaje.id}>
      <Card.Img variant="top" src={personaje.image} />
      <Card.Body>
        <Card.Title>{personaje.name}</Card.Title>
        <Card.Text>
        <span>Especie: {personaje.species}, Estatus: {personaje.status}</span>
        </Card.Text>
        <Button 
          onClick={() => {
            setIdPersonaje(personaje.id)
            handleOpen();
          }}
          variant="primary"
        >
          Mas info...
        </Button>
        <Modal
          open={open}
          onClose={() => {
            handleClose(); 
            setIdPersonaje(null); 
            setIdPersonaje({})
          }}
        >
          <div style={ modalStyle} className={classes.paper}>
            <h2>{personajeElegido.name}</h2>
            <img className="img-fluid my-4" src={personajeElegido.image} alt="imagen"/>
            <h3 className="mt-4">Datos</h3>
            <p>Genero: {personajeElegido.gender}</p>
            <p>Tipo: {personajeElegido.type}</p>
            <p>Status: {personajeElegido.status}</p>
          </div>
        </Modal>
      </Card.Body>
    </Card>
  );
}
 
export default Personaje;
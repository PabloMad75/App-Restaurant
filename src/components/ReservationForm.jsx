import React, { useState, useRef } from 'react';
import { Message } from './Message';
import { verificarYCrearColeccion, guardarDocumentoEnColeccion } from '../config/firebaseUtils';
import { obtenerDocumentosDeColeccion } from '../config/firebaseUtils';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export const ReservationForm = () => {
  const nombreRef = useRef(null);
  const apellidoRef = useRef(null);
  const correoRef = useRef(null);
  const movilRef = useRef(null);
  const fechaReservaRef = useRef(null);
  const horarioAtencionRef = useRef(null);
  const adultosRef = useRef(null);
  const ninosRef = useRef(null);
  const ocasionEspecialRef = useRef(null);
  const sectorFumadoresRef = useRef(null);
  const metodoPagoRef = useRef(null);

  const [documentos, setDocumentos] = useState(); // Agregar el estado aquí
  const [showDocumentList, setShowDocumentList] = useState(false); // Estado para mostrar DocumentList


  const handleSubmit = async (e) => {
    e.preventDefault();

    const reservaData = {
      nombre: nombreRef.current.value,
      apellido: apellidoRef.current.value,
      correo: correoRef.current.value,
      movil: movilRef.current.value,
      fechaReserva: fechaReservaRef.current.value,
      horarioAtencion: horarioAtencionRef.current.value,
      adultos: parseInt(adultosRef.current.value, 10),
      ninos: parseInt(ninosRef.current.value, 10),
      ocasionEspecial: ocasionEspecialRef.current.value,
      sectorFumadores: sectorFumadoresRef.current.value,
      metodoPago: metodoPagoRef.current.value,
    };

    console.log('Reserva Data:', reservaData);

    await verificarYCrearColeccion('reservas');
    try {
      await guardarDocumentoEnColeccion('reservas', reservaData);
      console.log('Reserva guardada en la base de datos');
      clearForm();
      setShowDocumentList(true); // Mostrar DocumentList después de enviar el formulario
      // Actualizar la lista de documentos después de agregar una reserva exitosamente
      const nuevosDocumentosObtenidos = await obtenerDocumentosDeColeccion('reservas');
      setDocumentos(nuevosDocumentosObtenidos);

      // Mostrar mensaje de éxito
      Swal.fire({
        icon: 'success',
        title: '¡Reserva guardada con éxito!',
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      console.error('Error al guardar la reserva:', error);
      // Mostrar mensaje de error
      Swal.fire({
        icon: 'error',
        title: 'Error al guardar la reserva',
        text: 'Ha ocurrido un error al guardar la reserva. Por favor, inténtalo nuevamente.',
        confirmButtonText: 'Aceptar',
      });
    }
  };

  const clearForm = () => {
    nombreRef.current.value = '';
    apellidoRef.current.value = '';
    correoRef.current.value = '';
    movilRef.current.value = '';
    fechaReservaRef.current.value = '';
    horarioAtencionRef.current.value = '';
    adultosRef.current.value = '';
    ninosRef.current.value = '';
    ocasionEspecialRef.current.value = '';
    sectorFumadoresRef.current.value = '';
    metodoPagoRef.current.value = '';

    // Clear the confirmation checkbox
    const confirmacionCheckbox = document.getElementById('confirmacion');
    if (confirmacionCheckbox) {
      confirmacionCheckbox.checked = false;
    }
  };

  return (
    <>
      <Message />
      <div className="container">
        <div className="col d-flex mt-4 justify-content-md-end">
          <Link to="/listado" className="btn btn-primary btn-lg">
            Ir al Listado de Reservas
          </Link>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-12">
            <form className="form-reserv" onSubmit={handleSubmit}>
              <div className="form-row mt-4">
                <div className="col">
                  <h2>Reserva de Atención</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="nombre">Nombre</label>
                  <input type="text" className="form-control" id="nombre" ref={nombreRef} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="apellido">Apellido</label>
                  <input type="text" className="form-control" id="apellido" ref={apellidoRef} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="correo">Correo</label>
                  <input type="email" className="form-control" id="correo" ref={correoRef} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="movil">Móvil</label>
                  <input type="tel" className="form-control" id="movil" ref={movilRef} required />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <h2>Detalles de la Reserva</h2>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-3 mb-3">
                  <label htmlFor="fechaReserva">Fecha de Reserva</label>
                  <input type="date" className="form-control date-input" id="fechaReserva" ref={fechaReservaRef} required />
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="horarioAtencion">Horario:</label>
                  <input type="time" className="form-control" id="horarioAtencion" ref={horarioAtencionRef} required />
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="adultos">N° de Adultos</label>
                  <input type="number" className="form-control" id="adultos" min="1" ref={adultosRef} required />
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="ninos">N° de Niños</label>
                  <input type="number" className="form-control" id="ninos" min="0" ref={ninosRef} required />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="ocasionEspecial">Motivo reserva:</label>
                  <select className="form-control" id="ocasionEspecial" ref={ocasionEspecialRef} required>
                    <option value="">Motivo reserva</option>
                    <option value="Almuerzo">Almuerzo</option>
                    <option value="Cena">Cena</option>
                    <option value="Cumpleaños">Cumpleaños</option>
                    <option value="Aniversario">Aniversario</option>
                    <option value="Otro">Otro Motivo</option>
                  </select>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="sectorFumadores">Sector Fumadores</label>
                  <select className="form-control" id="sectorFumadores" ref={sectorFumadoresRef} required>
                    <option value="">Seleccione una opción</option>
                    <option value="si">Sí</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="metodoPago">Método de Pago</label>
                  <select className="form-control" id="metodoPago" ref={metodoPagoRef} required>
                    <option value="">Seleccione un método</option>
                    <option value="tarjeta">Tarjeta de Crédito</option>
                    <option value="cheque">Cheque</option>
                    <option value="efectivo">Efectivo</option>
                  </select>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col d-flex justify-content-center">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="confirmacion" required />
                    <label className="form-check-label" htmlFor="confirmacion">
                      Confirmo que la información proporcionada es correcta y estoy de acuerdo con la reserva.
                    </label>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col d-flex justify-content-around">
                  <button type="submit" className="btn btn-primary btn-lg">Grabar Reserva</button>
                  <button type="reset" className="btn btn-danger btn-lg">Cancelar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

import React, { useState, useEffect } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Spanish } from 'flatpickr/dist/l10n/es';

export const ReservationForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (selectedDates) => {
    setSelectedDate(selectedDates[0]);
  };

  useEffect(() => {
    flatpickr('.date-input', {
      altInput: true,
      altFormat: 'j F, Y',
      dateFormat: 'Y-m-d',
      locale: Spanish, // Corregir aquí para establecer el idioma en español
      minDate: 'today',
      onChange: handleDateChange,
    });
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-12">
          <form>
            <div className="row">
              <div className="col-12 text-center">
                <img src="ruta-de-la-imagen.jpg" alt="Logo del restaurante" className="img-fluid" />
                <div className="centered-title">
                  San Pedro Restaurant
                </div>
              </div>
            </div>
            <div className="form-row mt-4">
              <div className="col">
                <h2>Reserva de Atención</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" className="form-control" id="nombre" required />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="apellido">Apellido</label>
                <input type="text" className="form-control" id="apellido" required />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="correo">Correo</label>
                <input type="email" className="form-control" id="correo" required />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="movil">Móvil</label>
                <input type="tel" className="form-control" id="movil" required />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col">
                <h5>Detalles de la Reserva</h5>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-6 mb-3">
                <label htmlFor="fechaReserva">Fecha de Reserva</label>
                <input type="text" className="form-control date-input" id="fechaReserva" placeholder="Fecha de Reserva" />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="horarioAtencion">Horario de Atención</label>
                <input type="time" className="form-control" id="horarioAtencion" required />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="adultos">N° de Adultos</label>
                <input type="number" className="form-control" id="adultos" min="1" required />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="ninos">N° de Niños</label>
                <input type="number" className="form-control" id="ninos" min="0" required />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="ocasionEspecial">Motivo reserva:</label>
                <select className="form-control" id="ocasionEspecial">
                  <option value="">Motivo reserva</option>
                  <option value="Almuerzo">Almuerzo</option>
                  <option value="Cena">Cena</option>
                  <option value="Cumpleanos">Cumpleaños</option>
                  <option value="Aniversario">Aniversario</option>
                  <option value="Otro">Otro Motivo</option>
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="metodoPago">Método de Pago</label>
                <select className="form-control" id="metodoPago">
                  <option value="">Seleccione un método</option>
                  <option value="tarjeta">Tarjeta de Crédito</option>
                  <option value="cheque">Cheque</option>
                  <option value="efectivo">Efectivo</option>
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="sectorFumadores">Sector Fumadores</label>
                <select className="form-control" id="sectorFumadores" required>
                  <option value="">Seleccione una opción</option>
                  <option value="si">Sí</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col">
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
                <button type="submit" className="btn btn-primary btn-lg ">Grabar Reserva</button>
                <button type="button" className="btn btn-secondary btn-lg ">Cancelar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

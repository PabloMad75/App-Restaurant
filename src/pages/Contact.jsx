import React, { useState } from 'react';
import '../css/contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '' // Nuevo campo para el mensaje
  });

  const [confirmData, setConfirmData] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleConfirmChange = (e) => {
    setConfirmData(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!confirmData) {
      alert('Por favor, confirma que los datos son correctos antes de enviar el formulario.');
      return;
    }
    console.log(formData);
  };

  return (
    <div className="container mt-4 fs-5">
      <div className="row justify-content-center justify-content-md-between">
        <div className="col-md-6 mb-md-0 mb-4 form-container">
          <h1 title="Formulario de Contacto">Formulario de Contacto:</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label"><i className="fa-solid fa-pen-clip"></i> Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="correo" className="form-label"><i className="fa-solid fa-envelope"></i> Correo</label>
              <input
                type="email"
                className="form-control"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mensaje" className="form-label"><i className="fa-solid fa-pen"></i> Mensaje</label>
              <textarea
                className="form-control"
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows="5"
                required
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="confirmData"
                name="confirmData"
                checked={confirmData}
                onChange={handleConfirmChange}
                required
              />
              <label className="form-check-label" htmlFor="confirmData">Confirmo que los datos son correctos</label>
            </div>
            <button type="submit" className="btn btn-primary">Enviar <i className="fa-solid fa-paper-plane"></i></button>
          </form>
        </div>
        <div className="col-md-6 mb-md-0 mb-4 iframe-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.7588247244344!2d-71.66961598910274!3d-33.455589397663715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966215e02141e54f%3A0xc6fa4ee465e638e4!2sRestaurant%20San%20Pedro!5e0!3m2!1ses!2scl!4v1691429544560!5m2!1ses!2scl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de ubicación"
          ></iframe>
        </div>
      </div>
    </div>
  );
};


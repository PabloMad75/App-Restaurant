import React, { useState } from 'react';
export const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: ''
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
    // Verificar si el checkbox ha sido marcado
    if (!confirmData) {
      alert('Por favor, confirma que los datos son correctos antes de enviar el formulario.');
      return;
    }
    // Aquí puedes realizar la lógica para enviar los datos del formulario
    console.log(formData);
  };
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 order-md-2">
            <h1>Formulario de Contacto:</h1>
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
          <div className="col-md-6 order-md-1 mt-4 mt-md-0">
            <img src="/carrousel/sanpedro.png" className="img-fluid" alt="Imagen de Contacto" />
          </div>
        </div>
      </div>
    </>
  )
}

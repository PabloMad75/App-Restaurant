import React, { useState, useEffect } from 'react';
import { obtenerDocumentosDeColeccion } from '../config/firebaseUtils';
import { Link } from 'react-router-dom';

export const DocumentList = () => {
  const [documentos, setDocumentos] = useState([]);

  useEffect(() => {
    async function fetchDocumentos() {
      try {
        const documentosObtenidos = await obtenerDocumentosDeColeccion('reservas');
        setDocumentos(documentosObtenidos);
      } catch (error) {
        console.error('Error al obtener documentos:', error);
      }
    }
    fetchDocumentos();
  }, []); 

  return (
<main>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-12">
            <h2>Listado de Reservas:</h2>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Reserva</th>
                    <th>Hora</th>
                    <th>Ocasión</th>
                    {/* ... Otros encabezados ... */}
                  </tr>
                </thead>
                <tbody>
                  {documentos.map((documento, index) => (
                    <tr key={index}>
                      <td>{documento.nombre}</td>
                      <td>{documento.apellido}</td>
                      <td>{documento.fechaReserva}</td>
                      <td>{documento.horarioAtencion}</td>
                      <td>{documento.ocasionEspecial}</td>
                      
                      {/* ... Otros campos ... */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col d-flex justify-content-center">
            <Link to="/" className="btn btn-primary btn-lg">Volver al Inicio</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

import React, { useState, useEffect } from 'react';
import { obtenerDocumentosDeColeccion } from '../config/firebaseUtils';

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
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-12">
          <h2>Listado de Reservas:</h2>
          <table className="table mt-4 table-striped table-responsive table-hover">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Fecha</th>
                <th>Hora</th>
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
                  {/* <td>{documento.correo}</td> */}
                  {/* ... Otros campos ... */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

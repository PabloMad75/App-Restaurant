import { db } from './firebase'; // Ajusta la ruta según tu estructura de carpetas
import { getDocs, addDoc, collection } from 'firebase/firestore';

/**
 * Verifica si una colección existe en la base de datos y la crea si no existe.
 * @param {string} nombreColeccion - El nombre de la colección que se desea verificar y crear si es necesario.
 * @returns {Promise<void>}
 */
export const verificarYCrearColeccion = async (nombreColeccion) => {
  const collectionRef = collection(db, nombreColeccion);
  const collectionSnapshot = await getDocs(collectionRef);

  if (collectionSnapshot.empty) {
    await addDoc(collectionRef, {});
  }
};

/**
 * Guarda un nuevo documento con los datos proporcionados en una colección específica.
 * @param {string} nombreColeccion - El nombre de la colección en la que se desea guardar el documento.
 * @param {object} datos - Los datos que se desean almacenar en el documento.
 * @returns {Promise<void>}
 */
export const guardarDocumentoEnColeccion = async (nombreColeccion, datos) => {
  const collectionRef = collection(db, nombreColeccion);
  await addDoc(collectionRef, datos);
};

/**
 * Obtiene todos los documentos de una colección específica.
 * @param {string} nombreColeccion - El nombre de la colección de la que se desean obtener los documentos.
 * @returns {Promise<Array<object>>} - Un arreglo de objetos, donde cada objeto representa los datos de un documento.
 */
export const obtenerDocumentosDeColeccion = async (nombreColeccion) => {
  const collectionRef = collection(db, nombreColeccion);
  const querySnapshot = await getDocs(collectionRef);
  const documentos = [];
  querySnapshot.forEach((doc) => {
    documentos.push(doc.data());
  });

  return documentos;
};


// export { verificarYCrearColeccion, guardarDocumentoEnColeccion };

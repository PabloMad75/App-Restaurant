import { db } from './firebase'; // Ajusta la ruta según tu estructura de carpetas
import { getDocs, addDoc, collection } from 'firebase/firestore';

export const verificarYCrearColeccion = async (nombreColeccion) => {
  const collectionRef = collection(db, nombreColeccion); // Utiliza la función collection para obtener una referencia a la colección
  const collectionSnapshot = await getDocs(collectionRef);

  if (collectionSnapshot.empty) {
    await addDoc(collectionRef, {});
  }
};

export const guardarDocumentoEnColeccion = async (nombreColeccion, datos) => {
  const collectionRef = collection(db, nombreColeccion); // Utiliza la función collection para obtener una referencia a la colección
  await addDoc(collectionRef, datos);
};


// export { verificarYCrearColeccion, guardarDocumentoEnColeccion };

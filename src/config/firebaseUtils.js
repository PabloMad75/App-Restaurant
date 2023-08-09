import { db } from './firebase'; // Ajusta la ruta según tu estructura de carpetas
import { getDocs, addDoc } from 'firebase/firestore';

export const verificarYCrearColeccion = async (nombreColeccion) => {
  const collectionRef = db.collection(nombreColeccion);
  const collectionSnapshot = await getDocs(collectionRef);

  if (collectionSnapshot.empty) {
    await addDoc(collectionRef, {});
  }
};

export const guardarDocumentoEnColeccion = async (nombreColeccion, datos) => {
  const collectionRef = db.collection(nombreColeccion);
  await addDoc(collectionRef, datos);
};

// export { verificarYCrearColeccion, guardarDocumentoEnColeccion };

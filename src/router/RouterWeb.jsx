import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Us } from "../pages/Us";
import { Schedule } from "../pages/Schedule";
import { Contact } from "../pages/Contact";
import { NotFound } from "../pages/NotFound";

export const RouterWeb = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/nosotros" element={<Us/>}/>
      <Route path="/reservas" element={<Schedule/>}/>
      <Route path="/contacto" element={<Contact/>}/>
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </>
  )
}

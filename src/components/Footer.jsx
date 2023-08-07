import React from 'react'

export const Footer = () => {
  return (
    <>
      <footer className="py-4 mt-4 bg-body-tertiary">
        <ul className="nav justify-content-center border-bottom pb-2 mb-2">
          <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Inicio</a></li>
          <li className="nav-item"><a href="nosotros" className="nav-link px-2 text-body-secondary">Nosotros</a></li>
          <li className="nav-item"><a href="reservas" className="nav-link px-2 text-body-secondary">Reservas</a></li>
          <li className="nav-item"><a href="contacto" className="nav-link px-2 text-body-secondary">Contacto</a></li>
        </ul>
        <p className="text-center text-body-secondary">
          © 2023 <a href="https://github.com/PabloMad75" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-reset">PabloMad</a>
        </p>
      </footer>
    </>
  )
}

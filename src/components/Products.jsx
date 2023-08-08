import React from 'react';
import '../css/us.css';

export const Products = () => {
  return (
    <>
    <div className="container container_products">
        <article className="main__product custom-background">
          <img src="/images/wedding.jpg" alt="Muffin Arcuch" />
          <span className="fecha-publicacion">
            03 de febrero 2023
          </span>
          <h2 className="title_eat">
            Matrimonios.
          </h2>
          <p className="article-info">
          Celebra tu boda en nuestro encantador restaurante. Ofrecemos un ambiente cálido, vistas panorámicas y un exquisito menú personalizado para compartir con tus seres queridos. Haz que tu día sea inolvidable con nuestro servicio de celebración de matrimonios.
          </p>
        </article>
        <article className="main__product custom-background">
          <img src="/images/pumpkin.jpg" alt="Muffin Arcuch" />
          <span className="fecha-publicacion">
            03 de febrero 2023
          </span>
          <h2 className="title_eat">
            Halloween.
          </h2>
          <p className="article-info">¡Celebra Halloween en nuestro restaurante con una fiesta de miedo! Disfruta de decoraciones espeluznantes, platillos temáticos y sorpresas terroríficas. Ven con tus disfraces más aterradores y vive una experiencia única en nuestra celebración de Halloween.
          </p>
        </article>
        <article className="main__product custom-background">
          <img src="/images/cake.jpg" alt="Muffin Arcuch" />
          <span className="fecha-publicacion">
            03 de febrero 2023
          </span>
          <h2 className="title_eat">
            Cumpleaños.
          </h2>
          <p className="article-info">¡Celebra tu cumpleaños con nosotros y hazlo inolvidable! Disfruta de una experiencia gastronómica única, decoración especial y un ambiente festivo. Invita a tus seres queridos y déjanos hacer de tu día especial algo realmente memorable.
          </p>
        </article>
      </div>
    
    </>
  )
}

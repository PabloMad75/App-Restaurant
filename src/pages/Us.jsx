import '../css/us.css'

export const Us = () => {
  const paragraphStyle = {
    textAlign: 'justify'
  };
  return (
    <>
    <main>
      <div className="container mt-4">
        <h1 className="mb-4 featured-title us">San Pedro Restaurant.</h1>
        <p className='fs-5' style={paragraphStyle}>
          En <em>San Pedro Restaurant</em>, llevamos ofreciendo calidad y tradición gastronómica junto al mar desde 1932. Somos un restaurante especializado en mariscos y carnes, con una selección cuidadosamente elaborada de los mejores platos de la región.
        </p>
        <p className='fs-5'style={paragraphStyle}>
          Nuestro compromiso es brindarte una experiencia culinaria única, donde podrás disfrutar de sabores auténticos y frescos, acompañados de una cuidada selección de finos vinos que realzarán cada bocado.
        </p>
        <p className='fs-4 '>
          <strong >Horario de Atención:</strong><br />
          Lunes a Domingo<br />
          12:00 - 21:00 hrs
        </p>
        <p className='fs-5' style={paragraphStyle}>
          Ven y únete a nuestra historia culinaria mientras te sumerges en la deliciosa combinación de sabores y la calidez de nuestro ambiente costero.
        </p>
        <p className="fs-3">
          ¡Esperamos recibirte pronto en San Pedro, para que disfrutes estos productos!
        </p>
      </div>
      <div className="container container_products">
        <article className="main__product">
          <img src="/carrousel/turkey.jpg" alt="Muffin Arcuch" />
          <span className="fecha-publicacion">
            Carnes blancas.
          </span>
          <h2 className="title_eat">
            Pato San Pedro.
          </h2>
          <p className="article-info">
            Exquisito pato asado: piel crujiente, carne tierna y sabores únicos. Una experiencia gastronómica incomparable que te transportará a la tradición culinaria. ¡No te lo pierdas!
          </p>
        </article>
        <article className="main__product">
          <img src="/carrousel/salmon.jpg" alt="Muffin Arcuch" />
          <span className="fecha-publicacion">
            Pescados frescos.
          </span>
          <h2 className="title_eat">
            Salmón San Pedro.
          </h2>
          <p className="article-info">Descubre el encanto del salmón austral, un plato sublime que combina la frescura del mar con la riqueza de sabores. Delicadamente preparado y cocinado a la perfección, su carne jugosa y suave se deshace en tu paladar. Una experiencia gastronómica inolvidable.
          </p>
        </article>
        <article className="main__product">
          <img src="/carrousel/curry.jpg" alt="Muffin Arcuch" />
          <span className="fecha-publicacion">
            Ricas Sopas.
          </span>
          <h2 className="title_eat">
            Curry consomé.
          </h2>
          <p className="article-info">Descubre la rica y aromática experiencia del consomé de curry. Sabores exóticos que te transportarán a tierras lejanas. Este plato combina la intensidad del curry con la suavidad del consomé, brindando una explosión de sabores en cada sorbo.
          </p>
        </article>
        <article className="main__product">
          <img src="/carrousel/meal.jpg" alt="Muffin Arcuch" />
          <span className="fecha-publicacion">
            Pastas italianas.
          </span>
          <h2 className="title_eat">
            Lasagna San Pietro.
          </h2>
          <p className="article-info">
            Sumérgete en la auténtica esencia de Italia con nuestra lasagna italiana. Capas de pasta al dente, rellenas de sabrosa carne y una fusión de quesos derretidos. Cada bocado es un viaje a la tradición culinaria italiana, donde los aromas y sabores se entrelazan para brindarte una experiencia exquisita.
          </p>
        </article>
        <article className="main__product">
          <img src="/carrousel/beef.jpg" alt="Muffin Arcuch" />
          <span className="fecha-publicacion">
            Carnes de Cerdo.
          </span>
          <h2 className="title_eat">
          Porchetta della Nonna.
          </h2>
          <p className="article-info">Deléitate con el exquisito "Porchetta della Nonna," una maravilla culinaria que combina tierno cerdo asado con una seductora salsa italiana. Sumérgete en una explosión de sabores mediterráneos, donde hierbas frescas y especias se unen para crear una experiencia gastronómica inolvidable.
          </p>
        </article>
        <article className="main__product">
          <img src="/carrousel/food.jpg" alt="Muffin Arcuch" />
          <span className="fecha-publicacion">
            Carnes de vacuno.
          </span>
          <h2 className="title_eat">
          Asado Pampas.
          </h2>
          <p className="article-info">Descubre nuestro plato estrella, "Asado Pampas". Saborea jugosos cortes de carne de vacuno a la plancha, impregnados con una exquisita mezcla de especias secretas que despiertan tus papilas gustativas. Una experiencia gastronómica única que te transportará a los sabores de Argentina.
          </p>
        </article>
      </div>
    </main>
    </>
  )
}

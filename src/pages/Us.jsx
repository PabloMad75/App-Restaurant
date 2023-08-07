export const Us = () => {
  const paragraphStyle = {
    textAlign: 'justify'
  };
  return (
    <>
      <div className="container mt-4">
        <h2 className="mb-4">Bienvenido a San Pedro</h2>
        <p style={paragraphStyle}>
          En San Pedro, llevamos ofreciendo calidad y tradición gastronómica junto al mar desde 1932. Somos un restaurante especializado en mariscos y carnes, con una selección cuidadosamente elaborada de los mejores platos de la región.
        </p>
        <p style={paragraphStyle}>
          Nuestro compromiso es brindarte una experiencia culinaria única, donde podrás disfrutar de sabores auténticos y frescos, acompañados de una cuidada selección de finos vinos que realzarán cada bocado.
        </p>
        <p>
          <strong>Horario de Atención:</strong><br />
          Lunes a Domingo<br />
          12:00 - 21:00 hrs
        </p>
        <p style={paragraphStyle}>
          Ven y únete a nuestra historia culinaria mientras te sumerges en la deliciosa combinación de sabores y la calidez de nuestro ambiente costero.
        </p>
        <p className="fs-3">
          ¡Esperamos recibirte pronto en San Pedro!
        </p>
        <div className="row mt-4">
          <div className="col-sm-6">
            <img src="/carrousel/food.jpg" className="img-fluid" alt="Imagen 1" />
          </div>
          <div className="col-sm-6">
            <img src="/carrousel/meal.jpg" className="img-fluid" alt="Imagen 2" />
          </div>
        </div>
      </div>
    </>
  )
}

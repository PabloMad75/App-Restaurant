export const NotFound = () => {
  return (
    <>
      <section className="container d-flex flex-column p-4">
        <img src='/404.jpg' className="rounded mx-auto d-block img-fluid" style={{ width: "35%" }} alt="Error 404" />
        <h1 className="text-center">La página solicitada no existe!</h1>
        <a href='/' className='btn btn-primary'>Volver al inicio</a>
      </section>
    </>
  )
}

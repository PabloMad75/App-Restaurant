import { Message } from '../components/message.jsx';
import { Products } from '../components/products.jsx';
import '../css/navbar.css'
export const Home = () => {
  return (
    <main>
      <div className="container mx-auto mt-4">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/carrousel/sanpedro.png" className="d-block w-60 mx-auto img-fluid" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5 className="fs-1">San Pedro Restaurant</h5>
              <p className="fs-3">Calidad y tradición gastronómica junto al mar desde 1932.</p> */}
              </div>
            </div>
            <div className="carousel-item">
              <img src="/carrousel/turkey.jpg" className="d-block w-60 mx-auto img-fluid" alt="..." />
              <div className="carousel-caption d-none d-md-block custom-caption">
                <h5 className="fs-1">Exquisitos platos.</h5>
                <p className="fs-3">Las mejores preparaciones para tu paladar.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/carrousel/curry.jpg" className="d-block w-60 mx-auto img-fluid" alt="..." />
              <div className="carousel-caption d-none d-md-block custom-caption">
                <h5 className="fs-1">Innovación</h5>
                <p className="fs-3">Buscamos nuevos sabores para sorprenderte...Siempre.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/carrousel/salmon.jpg" className="d-block w-60 mx-auto img-fluid" alt="..." />
              <div className="carousel-caption d-none d-md-block custom-caption">
                <h5 className="fs-1">Sabores marinos</h5>
                <p className="fs-3">Desde el mar a tu mesa, frescura garantizada.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
      <Message />
      <Products />
    </main>
  );
};

// import { useEffect } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaDownload,
  FaShoppingCart,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Diseñadores from "../assets/disenadores.webp";
import Equipo from "../assets/equipo.webp";

const Recursos = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <header>
        <div className="pt-[4rem] relative bg-cover md:h-[65rem] z-10">
          <img
            src={Diseñadores}
            alt="diseñadores"
            className="opacity-30 h-full w-full object-cover "
          />
          <div className="absolute w-full h-full flex flex-col top-0 items-center justify-center ">
            <div className="text-center p-3 space-y-3 md:space-y-7 relative lg:-top-24">
              <span className=" text-link-100 font-bold text-xs md:text-3xl">
                Agencia de Diseño Gráfico
              </span>
              <h3 className="text-lg md:text-5xl font-extrabold">
                Recursos y plantillas para diseñadores gráficos, freelances y
                estudiantes.
              </h3>
              <p className="text-sm md:text-xl">
                Archivos compatibles con paqueteria Adobe, CorelDraw, Tips
                Exclusivos en video, etc.
              </p>
            </div>
          </div>
        </div>
      </header>
      <main className="m-2">
        <h5 className="flex items-center gap-x-2 mb-5">
          Mostrando
          <span className="font-bold">1-10</span>
          de
          <span className="font-bold">30</span>
          Recursos
        </h5>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          <li>
            <div className="bg-nav-900 p-5 rounded-2xl ">
              <div>
                <img src={Equipo} alt="" className="rounded-sm mb-3" />
              </div>
              <div className="mb-2 bg-categoria-100 rounded-md inline-flex ">
                <span className="font-semibold text-base p-2">Categoria</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-btn-50">
                  Diseñador UI/UX
                </h3>
                <ul className="inline-flex items-center gap-x-2 flex-wrap mb-5">
                  <li className="text-gray-200 text-xs font-medium">
                    Adobe Illustrator
                  </li>
                  <li className="text-gray-200 text-xs font-medium">
                    .ai .eps
                  </li>
                </ul>
                <h4 className="text-link-100 text-sm font-bold mb-5">
                  $ 8,000 MXN - $ 10,000 MXN
                </h4>
                <h5 className="mb-1 font-semibold">Descripción</h5>
                <div className="mb-3">
                  <p className="text-gray-300 text-justify line-clamp-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Autem molestiae amet esse unde hic fuga numquam. iusto aut,
                    commodi voluptatum eum dolorum dignissimos? Cumque, deleniti
                    consequatur animi architecto nemo impedit!{" "}
                  </p>
                  <span className="text-link-100 hover:text-link-400 transition-colors">
                    <Link>Ver más</Link>
                  </span>
                </div>
              </div>
              <button className="bg-btn-400 hover:bg-btn-600 p-2 flex text-lg font-semibold mx-auto rounded-md items-center gap-2">
                <FaDownload />
                Descargar
              </button>
            </div>
          </li>
          <li>
            <div className="bg-nav-900 p-5 rounded-2xl">
              <p className="text-gray-200 text-sm mb-1">Puesto</p>
              <div>
                <h3 className="text-xl font-semibold text-btn-50">
                  Diseñador UI/UX
                </h3>
                <ul className="inline-flex items-center gap-x-2 flex-wrap mb-5">
                  <li className="text-gray-200 text-xs font-medium">
                    Tiempo Completo
                  </li>
                  <li className="text-gray-200 text-xs font-medium">México</li>
                </ul>
                <h4 className="text-link-100 text-sm font-bold mb-5">
                  $ 8,000 MXN - $ 10,000 MXN
                </h4>
                <h5 className="mb-1 font-semibold">Descripción</h5>
                <div className="mb-3">
                  <p className="text-gray-300 text-justify line-clamp-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Autem molestiae amet esse unde hic fuga numquam. iusto aut,
                    commodi voluptatum eum dolorum dignissimos? Cumque, deleniti
                    consequatur animi architecto nemo impedit!{" "}
                  </p>
                  <span className="text-link-100 hover:text-link-400 transition-colors">
                    <Link>Ver más</Link>
                  </span>
                </div>
              </div>
              <button className="bg-btn-400 hover:bg-btn-600 p-2 flex text-lg font-semibold mx-auto rounded-md items-center gap-2">
                <FaShoppingCart />
                Comprar
              </button>
            </div>
          </li>
        </ul>
        <div className="my-10 flex items-center justify-center gap-x-2 overflow-x-auto">
          <button className="relative text-gray-200 hover:bg-btn-400 p-3 rounded-full transition-colors duration-150">
            <FaAngleLeft className="text-xl" />
          </button>
          <button className="flex items-center justify-center w-10 p-2 text-link-100  transitions-colors duration-150 text-lg">
            1
          </button>
          <button className="flex items-center justify-center w-10 p-2 hover:text-link-300  transitions-colors duration-150 text-lg">
            2
          </button>
          <button className="flex items-center justify-center w-10 p-2 hover:text-link-300  transitions-colors duration-150 text-lg">
            3
          </button>
          <button className="flex items-center justify-center w-10 p-2 hover:text-link-300  transitions-colors duration-150 text-lg">
            4
          </button>
          <button className="flex items-center justify-center w-10 p-2 hover:text-link-300  transitions-colors duration-150 text-lg">
            5
          </button>

          <button className="relative text-gray-200 hover:bg-btn-400 p-3 rounded-full transition-colors duration-150">
            <FaAngleRight className="text-xl" />
          </button>
        </div>
      </main>
    </>
  );
};

export default Recursos;

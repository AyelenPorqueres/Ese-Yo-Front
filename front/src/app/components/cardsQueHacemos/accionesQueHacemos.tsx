'use client'
import React, { useState } from "react";
import "@/app/components/cardsQueHacemos/accionesQueHacemos"


export function AccionesQueHacemos() {

  const mock: { imagenGrupo: string; fecha: string; descripcion: string, ubicacion: string }[] = Array(9).fill({
    imagenGrupo: "./images/grupoAcciones.png",
    fecha: "20/11/2024",
    ubicacion: "Lobos, Buenos Aires.",
    descripcion: "Estuvimos en Lobos Athletico Club en lo que fue la primera acción de la Fundación. Allí tuvo lugar un partido de fútbol ante el plantel de primera de dicha institución, sumado a viejas glorias del club. Participaron Ariel Garcé, Diego Placente, Pablo Aimar, Juan Pablo De Gregorio y Emiliano Lobo. Posterior a ello se brindó una charla a niños y niñas del club y se entregó material deportivo, tal como botines, pecheras y pelotas brindadas por Umbro."
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mock.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < Math.ceil(mock.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="justify-center pl-60 relative top-20 text-4xl font-semibold text-[#000000] pb-16">Nuestra acciones</div>
      {currentItems.map((item, index) => (
        <div key={index}>
          <div className="relative m-10 bottom-16 flex flex-col text-black">
            <br />
            <div className=" h-80  relative top-20 ml-[15%] text-xl font-medium rounded-md w-[70%]  shadow-lg  shadow-[#1fa65a9c] ">
              <div className="relative top-8 ml-96 r text-xl font-medium max-w-4xl">
                <p>{item.fecha}<br />{item.ubicacion}<br /><br />{item.descripcion}</p>
              </div>
              <img className="border rounded-xl relative bottom-[74%] ml-8 size-72" src={item.imagenGrupo} alt="" />
            </div>
          </div>
        </div>

      ))}



      <div className=" flex justify-center mt-6">
        <button
          onClick={prevPage}
          className="px-4 py-2 mx-2 top-10 w-max border rounded-lg text-black disabled:opacity-50"
          disabled={currentPage === 1}
        >
         
        &#8592;

        </button>
        <span className="self-center text-black text-xl">
          Página {currentPage} de {Math.ceil(mock.length / itemsPerPage)}
        </span>
        <button
          onClick={nextPage}
          className="px-4 py-2 mx-2 border rounded-lg text-black disabled:opacity-50"
          disabled={currentPage === Math.ceil(mock.length / itemsPerPage)}

        >
          
          &#8594;

        </button>
      </div>
    </>
  );
}
"use client";
import React, { useState } from "react";
import "@/app/components/cardsEquipo/cardsEquipo.css";

export function CardsEquipo() {
    const mock: { imagen: string; nombre: string; biografia: string} [] = Array(11).fill({
        imagen: "./images/aimar.png",
        nombre: "Pablo Aimar",
        biografia: "Pablo Aimar nació el 3 de noviembre de 1979 en Río Cuarto, Córdoba, Argentina. Desde muy joven, mostró su talento con el balón, y a lo largo de su carrera, se destacó como uno de los futbolistas más talentosos y técnicos de su generación. Aimar comenzó su carrera en las inferiores de River Plate, donde rápidamente ascendió al primer equipo, mostrando un gran control del balón, visión de juego y una capacidad excepcional para asistir a sus compañeros.Su paso por el fútbol europeo lo llevó a equipos de renombre como Valencia en España, donde dejó una huella imborrable, contribuyendo al éxito del club en la Liga española y en competiciones internacionales. Aimar también jugó en el Real Zaragoza y, más tarde, en el Benfica en Portugal, donde continuó mostrando su magia con el balón.Además de su destacada carrera en clubes, Aimar fue una pieza clave en la selección argentina, participando en varias ediciones de la Copa del Mundo y la Copa América."
    });

    const [currentIndex, setCurrentIndex] = useState(0);
    const [textoExpandido, setTextoExpandido] = useState<number | null>(null);

    const desplazarDerecha = () => {
        if (currentIndex < mock.length - 3) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const desplazarIzquierda = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const expandirDesc = (index: number) => {
        setTextoExpandido(textoExpandido === index ? null : index);
    };

    return (
        <>
        <br></br>
            <div className="carousel rounded-box w-[85vw] overflow-hidden relative mx-auto flex justify-center">
                <div className="flex w-full gap-3 transition-transform" style={{ transform: `translateX(-${currentIndex * 34.2333}%)` }}>
                    {mock.map((item, index) => (
                        <div
                            key={index}
                            className="flex-none w-4/12 bg-gray-100 shadow-md shadow-green-200 flex flex-col items-center justify-center p-4 rounded-md" style={{ height: textoExpandido === index ? 'auto' : '600px' }}>
                            <figure className="mb-4">
                                <img className="w-96 h-80 rounded-2xl" src={item.imagen} alt="Miembro del equipo" />
                            </figure>
                            <div className="card-body flex flex-col items-center text-center">
                                <h2 className="card-title text-xl text-black font-extralight">{item.nombre}</h2>
                                <p className="text-black"> {textoExpandido === index ? item.biografia : `${item.biografia.slice(0, 155)}...`}</p>
                                <button onClick={() => expandirDesc(index)} className="btn btn-circle mt-2">{textoExpandido === index ? '↑' : '↓'}</button>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={desplazarIzquierda} className="absolute left-0 bg-black text-white p-3 rounded-btn">&#8592; </button>
                <button onClick={desplazarDerecha} className="absolute right-0 bg-black text-white p-3 rounded-btn"> &#8594; </button>
            </div>
        </>
    );
}

"use client";
import React, { useState } from "react";
import "@/app/components/cardsEquipo/cardsEquipo.css";

export function CardsEquipo() {
    const mock = [
        {
            imagen: "./images/aimar.png",
            nombre: "Pablo Aimar",
            biografia: "Pablo Aimar nació el 3 de noviembre de 1979 en Río Cuarto, Córdoba, Argentina. Desde muy joven, mostró su talento con el balón, y a lo largo de su carrera, se destacó como uno de los futbolistas más talentosos y técnicos de su generación. Aimar comenzó su carrera en las inferiores de River Plate, donde rápidamente ascendió al primer equipo, mostrando un gran control del balón, visión de juego y una capacidad excepcional para asistir a sus compañeros. Su paso por el fútbol europeo lo llevó a equipos de renombre como Valencia en España, donde dejó una huella imborrable, contribuyendo al éxito del club en la Liga española y en competiciones internacionales. Aimar también jugó en el Real Zaragoza y, más tarde, en el Benfica en Portugal, donde continuó mostrando su magia con el balón. Además de su destacada carrera en clubes, Aimar fue una pieza clave en la selección argentina, participando en varias ediciones de la Copa del Mundo y la Copa América.",
        },
        {
            imagen: "./images/cavenaghi.png",
            nombre: "Fernando Cavenaghi",
            biografia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis justo nec neque posuere, et vulputate erat ultricies. Morbi fermentum, lectus ac sollicitudin blandit, leo mi feugiat sapien, in fermentum urna nisi id turpis. Donec id tempor elit. Suspendisse fringilla orci ut sem pretium, in vulputate ex pretium. Cras feugiat erat ligula, ac condimentum eros ullamcorper at. Curabitur placerat tincidunt eros, ut bibendum ipsum varius non.Phasellus ac feugiat arcu. Nunc tincidunt scelerisque leo, sed maximus risus tempor sed. In id nisi vel risus interdum varius. Integer quis viverra justo. Donec sit amet ante sit amet metus gravida feugiat. Nulla viverra quam leo, sit amet faucibus lectus aliquet non. Aliquam erat volutpat. Ut ullamcorper nunc euismod augue placerat, at accumsan augue sollicitudin. Donec mollis nunc at ex vehicula, eu egestas velit bibendum.Fusce non augue vel risus lacinia ullamcorper. Nullam fermentum, nunc in pharetra tincidunt, ante tortor iaculis purus, a laoreet libero mauris ut dui. In fermentum est et nulla dictum, eu vehicula felis aliquam. Sed faucibus interdum dolor vel auctor. Cras ornare odio velit, sit amet congue magna ullamcorper ut. Nunc eleifend leo eu tortor gravida, id laoreet mi faucibus.",
        },
        {
            imagen: "./images/garce.png",
            nombre: "Ariel Garcé",
            biografia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis justo nec neque posuere, et vulputate erat ultricies. Morbi fermentum, lectus ac sollicitudin blandit, leo mi feugiat sapien, in fermentum urna nisi id turpis. Donec id tempor elit. Suspendisse fringilla orci ut sem pretium, in vulputate ex pretium. Cras feugiat erat ligula, ac condimentum eros ullamcorper at. Curabitur placerat tincidunt eros, ut bibendum ipsum varius non.Phasellus ac feugiat arcu. Nunc tincidunt scelerisque leo, sed maximus risus tempor sed. In id nisi vel risus interdum varius. Integer quis viverra justo. Donec sit amet ante sit amet metus gravida feugiat. Nulla viverra quam leo, sit amet faucibus lectus aliquet non. Aliquam erat volutpat. Ut ullamcorper nunc euismod augue placerat, at accumsan augue sollicitudin. Donec mollis nunc at ex vehicula, eu egestas velit bibendum.Fusce non augue vel risus lacinia ullamcorper. Nullam fermentum, nunc in pharetra tincidunt, ante tortor iaculis purus, a laoreet libero mauris ut dui. In fermentum est et nulla dictum, eu vehicula felis aliquam. Sed faucibus interdum dolor vel auctor. Cras ornare odio velit, sit amet congue magna ullamcorper ut. Nunc eleifend leo eu tortor gravida, id laoreet mi faucibus.",
        },
        {
            imagen: "./images/aimar.png",
            nombre: "Pablo Aimar",
            biografia: "Pablo Aimar nació el 3 de noviembre de 1979 en Río Cuarto, Córdoba, Argentina. Desde muy joven, mostró su talento con el balón, y a lo largo de su carrera, se destacó como uno de los futbolistas más talentosos y técnicos de su generación. Aimar comenzó su carrera en las inferiores de River Plate, donde rápidamente ascendió al primer equipo, mostrando un gran control del balón, visión de juego y una capacidad excepcional para asistir a sus compañeros. Su paso por el fútbol europeo lo llevó a equipos de renombre como Valencia en España, donde dejó una huella imborrable, contribuyendo al éxito del club en la Liga española y en competiciones internacionales. Aimar también jugó en el Real Zaragoza y, más tarde, en el Benfica en Portugal, donde continuó mostrando su magia con el balón. Además de su destacada carrera en clubes, Aimar fue una pieza clave en la selección argentina, participando en varias ediciones de la Copa del Mundo y la Copa América.",
        },
    ];

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
            <div id="equipo" className="carousel-wrapper relative mx-auto w-[85vw] overflow-hidden">
                <button onClick={desplazarIzquierda} className="bg-black ml-4 text-white p-3 rounded-btn"> &#8592;</button>
                <button onClick={desplazarDerecha} className="bg-black absolute right-4 text-white p-3 rounded-btn"> &#8594;</button>
                <div className="carousel-inner flex transition-transform" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
                    {mock.map((item, index) => (
                        <div key={index} className="card-container w-1/3 flex-none p-4">
                            <div className="card bg-white shadow-lg shadow-green-400 flex flex-col items-center justify-center rounded-md" style={{ height: textoExpandido === index ? "auto" : "600px" }}>
                                <figure className="mb-4">
                                    <img className="w-96 h-80 rounded-2xl mt-3" src={item.imagen} alt="Miembro del equipo" />
                                </figure>
                                <div className="card-body flex flex-col items-center text-center">
                                    <h2 className="card-title text-xl text-black font-extralight">{item.nombre}</h2>
                                    <p className="text-black"> {textoExpandido === index ? item.biografia : `${item.biografia.slice(0, 155)}...`}</p>
                                    <button onClick={() => expandirDesc(index)} className="btn btn-circle mt-2"> {textoExpandido === index ? "↑" : "↓"}</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <br></br>
        </>
    );
}
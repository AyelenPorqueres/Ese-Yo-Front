'use client'
import React from "react";

export function Fundacion() {
    return (
        <>
            <div className="flex flex-col items-center relative text-black">
                <img className="w-full h-auto max-h-[520px]" src="./images/fundacion.png" alt="Imagen de la fundacion"/>
                <div className="bg-white -mt-[20em] p-9 rounded-xl mr-11 text-center border-2 border-gray-300">
                    <a className="text-[2.0625em] font-bold hover:underline cursor-pointer" href="/quienesSomos#laFundacion">FUNDACIÓN ESE-YO</a>
                    <div className="text-[1.125em] max-w-[53.25em] mt-2 pl-20 pr-20">La FUNDACIÓN ESE-YO es una entidad comprometida con el bienestar y el desarrollo de la infancia. Nuestra misión es clara: queremos que los niños y niñas sean felices, y sabemos que la felicidad se encuentra en el juego. Por eso, nos dedicamos a facilitar y enriquecer ambientes lúdicos, donde el aprendizaje y la diversión van de la mano. Creemos firmemente en el poder transformador del juego y del deporte, y trabajamos para hacerlo accesible para todos.</div>
                </div>
            </div>
        </>
    );
}
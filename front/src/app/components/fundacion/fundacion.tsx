'use client'
import React from "react";
import "@/app/components/fundacion/fundacion.css"

export function Fundacion() {
    return (
        <>
            <div className="fundacionContainer">
                <img className="fundacionImagen" src='./images/fundacion.png' alt="Imagen de la fundacion"></img>
                <div className="fundacionTexto">
                    <a className="fundacionTitulo" href="/quienesSomos#laFundacion">FUNDACIÓN ESE-YO</a>
                    <div className="fundacionDescripcion">La FUNDACIÓN ESE-YO es una entidad comprometida con el bienestar y el desarrollo de la infancia. Nuestra misión es clara: queremos que los niños y niñas sean felices, y sabemos que la felicidad se encuentra en el juego. Por eso, nos dedicamos a facilitar y enriquecer ambientes lúdicos, donde el aprendizaje y la diversión van de la mano. Creemos firmemente en el poder transformador del juego y del deporte, y trabajamos para hacerlo accesible para todos.</div>
                </div>
            </div>
        </>
    )
}

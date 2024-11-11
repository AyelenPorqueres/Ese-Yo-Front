'use client'
import React from "react";
import "@/app/components/footer/footer"

export function Footer() {
  return (
    <>
      <footer className="footer footer-center bg-purple-400 text-primary-content p-10">
        <aside>
          <a href='/'><img src='./images/ESE-removebg-preview.png' className="h-12"></img></a>
          <p className="font-bold">
            <br />
            ¡Nos encantaría saber de vos! Si deseás obtener más información <br></br> sobre nuestras actividades y/o apoyar nuestra<br></br> causa, no dudes en ponerte en contacto con nosotros.<br></br> Podés escribirnos un correo electrónico ADJUNTAR MAIL.<br></br> Estamos para ayudarte y responder todas tus preguntas
          </p>
          <br></br>
          <br></br>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
      </footer>
    </>
  )
}
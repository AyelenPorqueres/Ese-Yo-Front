import './accionesInicio.css';

export default function AccionesInicio() {
    const cards = [
        { id: 1, title: "30/11/24", description: "Lobos, Buenos Aires.", img: './images/ninos-jugando.png' },
        { id: 2, title: "10/12/21", description: "Lobos, Buenos Aires.", img: './images/evento.png' },
        { id: 3, title: "18/08/22", description: "Rosario, Santa Fe.", img: './images/chicas-jugando.png' },
    ];

    return (
        <>
            <div className="flex-col">
                <div className=" title font-semibold text-4xl text-center text-[#27B015] pb-16">Conoce nuestras acciones</div>
                <div className="w-full flex justify-around p-10">
                    {cards.map((card) => (
                        <div className="card card-compact w-96 shadow-[4px_4px_5px_3px_#fcf479]">
                        <figure>
                            <img
                                src={`${card.img}`}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="absolute bg-white opacity-75 text-black w-96 p-7 translate-y-[16.45rem] rounded-xl">
                            <h2 className="card-title">{card.title}</h2>
                            <p>{card.description}</p>
                            <div className="card-actions justify-end">
                                <a href="/queHacemos#acciones" className="underline">
                                    Ver más ❯
                                </a>
                            </div>
                        </div>
                    </div>
                    ))
                    }
                </div>
            </div>
        </>
    );
}
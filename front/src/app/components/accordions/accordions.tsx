export const Accordions = () => {

    

    return (
        <div id="mision" className="flex flex-col text-black">
            <div className="collapse collapse-plus bg-[#F2CC0F] rounded-l-none w-[70%] mt-10">
                <input type="checkbox" defaultChecked />
                <div className="collapse-title text-xl font-medium">Mision</div>
                <div className="collapse-content">
                    <p>Acompañar a niños y niñas utilizando el deporte como vehículo de educación en valores y propulsor de la creatividad, con el objetivo de aportar a una sociedad más solidaria, sana e igualitaria.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-[#F672BB] rounded-r-none self-end w-[70%] my-10">
                <input type="checkbox" defaultChecked />
                <div className="collapse-title text-xl font-medium">Vision</div>
                <div className="collapse-content">
                    <p>Queremos que los niños y niñas sean felices, y somos conscientes de que lo son cuando están jugando. Por ello, queremos facilitar y enriquecer ambientes lúdicos. Aprender a jugar y jugar a aprender.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-[#6696B9] rounded-l-none w-[70%] mb-10">
                <input type="checkbox" defaultChecked />
                <div className="collapse-title text-xl font-medium">Valor</div>
                <div className="collapse-content">
                    <p>En ESE YO, nos guiamos por valores fundamentales que orientan nuestras acciones y decisiones: la empatía, el respeto, la igualdad, la creatividad y el trabajo en equipo. Estos valores son la base de nuestra labor y nos comprometemos a promoverlos en todas nuestras actividades.</p>
                </div>
            </div>
        </div>
    );
}
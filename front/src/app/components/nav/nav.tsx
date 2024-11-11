import './nav.css';
export default function NavBar() {
    return (
        <div className="navbar bg-[#9D58A6]">
            <div className="flex-1 ml-3 mb-1 px-2 lg:flex-none">
                <a href='/'><img src='./images/ESE-removebg-preview.png' className="h-8"></img></a>
            </div>
            <div className="flex flex-1 justify-end px-2">
                <div className="flex items-stretch text-black">
                    <a href='/' className="btn btn-ghost rounded-btn">INICIO</a>
                    <div className="dropdown dropdown-hover">
                            <a href="/quienesSomos">
                                <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">QUIENES SOMOS</div>
                            </a>  
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-white rounded-box p-2 shadow">
                            <li><a href="/quienesSomos#laFundacion">La fundación</a></li>
                            <li><a href="/quienesSomos#equipo">Equipo</a></li>
                            <li><a href="/quienesSomos#mision">Misión, visión y valores</a></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-hover">
                            <a href="/queHacemos">
                                <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">QUE HACEMOS</div>     
                            </a>                 
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-white rounded-box p-2 shadow">
                            <li><a href="/queHacemos#nuestraLabor">Nuestra labor</a></li>
                            <li><a href="/queHacemos#acciones">Acciones</a></li>
                            <li><a href="/queHacemos#ig">Instagram</a></li>
                        </ul>
                    </div>
                    <a href="#contacto" className="btn btn-ghost rounded-btn">CONTACTO</a>
                </div>
            </div>
        </div>
    );
}
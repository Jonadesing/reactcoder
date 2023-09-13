import CardWidget from "./CardWidget/CardWidget"
const NavBar = () => {
    return (
        <nav>
            <h3>AudioMant</h3>
            <div>
                <button>Auriculares</button>
                <button>Tocadiscos</button>
                <button>Microfonos</button>
            </div>
            <CardWidget />
        </nav>
    )
}

export default NavBar
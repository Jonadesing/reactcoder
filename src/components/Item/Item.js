import './Item.css';
const Item = ({id, name, img, price, stock}) =>{

    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="Itemheader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt="{name}" className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    {price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <button className="Option">Ver detalle</button>
            </footer>
        </article>
    )
}

export default Item
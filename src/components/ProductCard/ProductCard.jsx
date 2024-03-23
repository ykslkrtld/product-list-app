import { products } from "../../helper/data";
import "./ProductCard.scss"


function ProductCard({kategori}){
    const Filtreproduct=(kategori)==="all" ? products : products.filter((product)=>product.category===kategori)
    return(
        <div className="tasiyici">
            {
                products.map(({title, id, price, category, image}) => (
                    <div className="anaDiv" key={id}>
                        <div className="imgP">
                            <img src={image} alt={title} />
                            <p>{price}</p>
                        </div>
                        <div className="title">
                            <h4>{title}</h4>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductCard;
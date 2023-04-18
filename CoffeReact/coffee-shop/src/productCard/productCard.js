
import './productCard.scss'

const ProductCard = ({ name, price, size, country, img, bestBreak, onOpenProduct, id }) => {
    
    let productCardHTML;
    
    if (bestBreak) {
        productCardHTML = (
            <div className="product__card_best" id={id} onClick={(e) => onOpenProduct(e)}>
                <div className="product__card_best__img">
                    <img  src={img} alt={name} />
                </div>
                <div className="product__card_best__description">
                    <h3 className='product__card_best__description_name'>{name} {size}</h3>
                    <div className="product__card_best__description_price">{price}</div>
                </div>
            </div>
        )
    } else {
        productCardHTML = (
            <div className="product__card" id={id} onClick={(e) => onOpenProduct(e)} >
                <div className="product__card__img">
                    <img src={img} alt={name}/>
                </div>
                <div className="product__card__description">
                    <h3 className="product__card__description__name">{name} {size}</h3>
                    <div className="product__card__description__country">{country}</div>
                    <div className="product__card__description__price">{price}</div>
                </div>
            </div>
        )
    }

    return (
        <>
            {productCardHTML}
        </>
    )
}

export default ProductCard;
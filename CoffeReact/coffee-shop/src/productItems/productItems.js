
import ProductCard from '../productCard/productCard';

import './productItems.scss'

const ProductItems = ({productDB, onOpenProduct, filterBtn, term}) => {

    let productItemsFilter;

    if (filterBtn === 'all') {
        productItemsFilter = productDB;
    } else if (filterBtn === 'bra') {
        productItemsFilter = productDB.filter(item => item.country === 'Brazil')
    } else if (filterBtn === 'ken') {
        productItemsFilter = productDB.filter(item => item.country === 'Kenya')
    } else if (filterBtn === 'col') {
        productItemsFilter = productDB.filter(item => item.country === 'Columbia')
    }

    if (term !== undefined) {
        if (term.length !== 0) {
            productItemsFilter = productItemsFilter.filter(item => {
                return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
            })
        }
    }



    let productItems = productItemsFilter.map(item => {
        return <ProductCard {...item} bestBreak={false} key={item.id} onOpenProduct={onOpenProduct} />
    });

    return (
        <div className="product__items">
            <div className="container">
                <div className="product__items__wrapper">
                    {productItems}
                </div>
            </div>
        </div>
    )

}

export default ProductItems;
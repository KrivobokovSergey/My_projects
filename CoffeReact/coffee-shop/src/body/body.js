
import ourCoffeeFoto from '../img/our_coffee_foto.png'
import pleasureCoffeeFoto from '../img/pleasure_img.png'
import ProductCard from '../productCard/productCard';
import ProductItems from '../productItems/productItems';
import { footerLogoBlack } from '../footer/footer'
import Filter from '../filter/filter';

import './body.scss'

const Body = ({ productDB, mainPage, onFilterProduct, onOpenProduct, coffeeProduct, filterBtn, onFilterInput, term}) => {
    
    const productBest = productDB.filter(item => item.best);
    let productBestHTML = productBest.map(item => {
        return <ProductCard {...item} bestBreak={true} key={item.id} onOpenProduct={onOpenProduct} />
    });

    let bodyWithContainer;

    if (mainPage === 'Coffee house') {
        
        bodyWithContainer = (
            <>
                <div className="container">
                    <div className="body__about">
                        <h2 className='body__about__title'>About Us</h2>
                        {footerLogoBlack}
                        <p className='body__about__text'>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                            <br />
                            <br />
                            Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.</p>
                    </div>
                </div>
                <div className="body__best">
                    <div className="container">
                        <h2 className="body__best__title">Our best</h2>
                        <div className="body__best__items">
                            {productBestHTML}
                        </div>
                    </div>
                </div>
            </>
        )
    } else if (mainPage === 'Our coffee') {
        bodyWithContainer = (
            <>
                <div className="container">
                    <div className="body__about_our">
                        <img className='body__about_our_img' src={ourCoffeeFoto} alt="fotoCoffee" />
                        <div className="body__about_our_beans">
                            <h2>About our beans</h2>
                            {footerLogoBlack}
                            <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            <br/><br/>
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions.<br/>
                            As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.</p>
                        </div>
                    </div>
                    <div className="body__line"></div>
                    <Filter onFilterProduct={(e) => onFilterProduct(e)}
                        filterBtn={filterBtn}
                        onFilterInput={onFilterInput}
                        term={term} />
                    <ProductItems productDB={productDB}
                        onOpenProduct={onOpenProduct}
                        filterBtn={filterBtn}
                        term={term} />
                </div>
            </>
        )
    } else if (mainPage === 'CoffeeProduct') {
        bodyWithContainer = (
            <>
                <div className="container">
                    <div className="body__about_product">
                        <div className="body__about_product__wrapper__img">
                            <img src={coffeeProduct.img} alt="" className="body__about_product__img" />
                        </div>
                        <div className="body__about_product__wrapper">
                            <h2 className="body__about_product__title">About it</h2>
                            {footerLogoBlack}
                            <div className="body__about_product__country">Country: <span>{coffeeProduct.country}</span></div>
                            <div className="body__about_product__description">Description: <span>{coffeeProduct.description}</span></div>
                            <div className="body__about_product__price">Price: <span>{coffeeProduct.price}</span></div>
                        </div>
                    </div>
                </div>
            </>
        )
    } else if (mainPage === 'For your pleasure') {
        bodyWithContainer = (
            <>
                <div className="container">
                    <div className="body__about_our">
                        <img className='body__about_our_img' src={pleasureCoffeeFoto} alt="pleasureCoffeeFoto" />
                        <div className="body__about_our_beans">
                            <h2>About our goods</h2>
                            {footerLogoBlack}
                            <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            <br/><br/>
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions.<br/>
                            As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.</p>
                        </div>
                    </div>
                    <div className="body__line"></div>
                    <ProductItems productDB={productDB}
                        onOpenProduct={onOpenProduct}
                        filterBtn={'all'} />
                </div>
            </>
        )
    }
    
    return (
        <div className="body">
            {bodyWithContainer}
        </div>
    )
}

export default Body;
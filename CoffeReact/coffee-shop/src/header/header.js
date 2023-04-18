
import mainLogo from '../img/main_logo.png'
import logo from '../img/coffee_logo.png'

import './header.scss'

const Header = ({ mainPage, editMainPage }) => {

    let mainInfo,
        headerClass,
        mainClass;

    if (mainPage === 'Coffee house') {
        mainInfo = (
            <>
                <h1>Everything You Love About Coffee</h1>
                <div className="main__logo">
                    <span className="main__span_left"></span>
                    <img className="main__img" src={mainLogo} alt="main_logo" />
                    <span className="main__span_right"></span>
                </div>
                <p className="main__p">We makes every day full of energy and taste</p>
                <p className="main__p2">Want to try our beans?</p>
                <button className="main__btn" onClick={(e) => editMainPage(e = {target:{outerText: 'Our coffee'}})}>More</button>
            </>
        )
        headerClass = 'header';
        mainClass = 'main';
    } else if (mainPage === 'Our coffee' || mainPage === 'CoffeeProduct') {
        mainInfo = (
            <>
                <h1>Our Coffee</h1>
            </>
        )
        headerClass = 'header our_coffee';
        mainClass = 'main our_coffee';
    } else if (mainPage === 'For your pleasure') {
        mainInfo = (
            <>
                <h1>For your pleasure</h1>
            </>
        )
        headerClass = 'header pleasure';
        mainClass = 'main pleasure';
    }



    return (
        <header className={headerClass}>
            <div className="container">
                <img src={logo} alt="logo" className="header__logo" />
                <nav className='header__nav'>
                    <div className='header__nav__item' onClick={(e) => editMainPage(e)}>Coffee house</div>
                    <div className='header__nav__item' onClick={(e) => editMainPage(e)}>Our coffee</div>
                    <div className='header__nav__item' onClick={(e) => editMainPage(e)}>For your pleasure</div>
                </nav>
                <div className={mainClass}>
                    {mainInfo}
                </div>
            </div>
        </header>
    )
}

export default Header;

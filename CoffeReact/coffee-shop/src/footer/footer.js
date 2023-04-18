import logoBlack from '../img/main_logo_black.png'
import logo from '../img/footer_logo.png'

import './footer.scss'

const footerLogoBlack = (
    <div className="footer__logo">
        <span className="footer__span_left"></span>
        <img className="footer__logo__img" src={logoBlack} alt="main_logo" />
        <span className="footer__span_right"></span>
    </div>
)

const Footer = ({editMainPage}) => {

    return (
        <footer className='footer'>
            <div className="container">
                
                <div className="footer__nav">
                    <img className='footer__img' src={logo} alt="" />
                    <div className="footer__nav__item" onClick={(e) => editMainPage(e)}>Coffee house</div>
                    <div className="footer__nav__item" onClick={(e) => editMainPage(e)}>Our coffee</div>
                    <div className="footer__nav__item" onClick={(e) => editMainPage(e)}>For your pleasure</div>
                </div>
                {footerLogoBlack}
            </div>
        </footer>
    )
}

export {footerLogoBlack};
export default Footer;
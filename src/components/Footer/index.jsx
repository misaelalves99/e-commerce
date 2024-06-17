import { FaShoppingBag } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { TbLocationFilled } from "react-icons/tb";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../Footer/Footer.modules.css';

export default function Footer() {
    return (
      <>
        <footer className="footer">
          <div className="container-footer">
            <div className='container-log-cont'>
              <div className="logo-ecom">
              <Link><FaShoppingBag className="icon-logo" /></Link>
              <h2>E-commerce</h2>
              </div>
              
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. aque reiciendis inveiste ratione ex alias quis</p>
              <div className='redes-sociais'>
                <Link><div className="icon-soc"><FaLinkedin /></div></Link>
                <Link><div className="icon-soc"><FaGithub /></div></Link>
                <Link><div className="icon-soc"><FaInstagram /></div></Link>
                <Link><div className="icon-soc"><FaFacebook /></div></Link>
              </div>
              <div className='tel-loc'>
                <div className="tl">
                  <div className='icon-tl'><TbLocationFilled /></div>
                  <h3>Teófilo Otoni-MG</h3>
                </div>
                <div className="tl">
                  <div className='icon-tl'><FaPhoneVolume /></div>
                  <h3>(33) 99941-6186</h3>
                </div>
              </div>
            </div>

            <div className='container-sobr-ate'>
              <div className="sobr-aten">
                <div className="sobre-nos">
                  <h1>Sobre nós</h1>
                  <ul>
                    <Link><li>Carreiras</li></Link>
                    <Link><li>Nossas histórias</li></Link>
                    <Link><li>Termos e Condições</li></Link>
                    <Link><li>Política de Privacidade</li></Link>
                  </ul>
                </div>
                <div className="atendimento">
                  <h1>Atendimento</h1>
                  <ul>
                    <Link><li>Central de ajuda</li></Link>
                    <Link><li>Como comprar</li></Link>
                    <Link><li>Acompanhe seu pedido</li></Link>
                    <Link><li>Devoluções</li></Link>
                  </ul>
                </div>
              </div>
            </div>

            <div className="container-app">
              <div className="nosso-app">
                <h1>Nosso Aplicativo</h1>
                <div className="apps">
                  <Link>
                    <div className="app">
                      <FaAppStoreIos className="icon" />
                      <h3>App Store</h3>
                    </div>
                  </Link>
                  <Link>
                    <div className="app">
                      <FaGooglePlay className="icon" />
                      <h3>Play Store</h3>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="copyright">
            <p>E-commerce - Todos os direitos reservados 2024 </p>
            <p>Desenvolvido por Misael Alves</p>
          </div>
        </footer>
      </>
    );
}
import { FaRegCreditCard, FaTags } from "react-icons/fa";
import { FaTruckFast} from "react-icons/fa6";
import { AiFillSafetyCertificate } from "react-icons/ai";
import '../Oferta/Oferta.modules.css';

export default function Oferta() {
    return (
        <>
            <section className="section-oferta">
                <div className="container-oferta">
                    <div className="cont-off-desc">
                        <img src="../../src/assets/desc-off.png" alt="50% Off" />
                    </div>
                    <div className="cont-anun">
                        <div className="titulo-anun">
                            <h1>Aproveite a oferta até 50% de desconto</h1>
                            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis</h2>
                        </div>
                        <div className="info-comp">
                            <div className="ic">
                                <div className="icon-ic"><FaTruckFast /></div>
                                <h3>Entrega rápida</h3>
                            </div>
                            <div className="ic">
                                <div className="icon-ic"><FaRegCreditCard /></div>
                                <h3>Parcela em até 12x sem juros</h3>
                            </div>
                            <div className="ic">
                                <div className="icon-ic"><AiFillSafetyCertificate /></div>
                                <h3>Compra segura</h3>
                            </div>
                            <div className="ic">
                                <div className="icon-ic"><FaTags /></div>
                                <h3>Temos ótimas promoções</h3>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import '../Destaque/Destaque.modules.css';
// import Img1 from "../../../assests/card-product/destaque/img1.jpg";

const CardProd = [ 
    {
        id:1,
        Title: "Computador",
    },
    {
        id:2,
        Title: "Computador",
    },
    {
        id:3,
        Title: "Computador",
    },
    {
        id:4,
        Title: "Computador",
    },
]

export default function Destaque() {
    return (
        <>
            <section className='pro-dest'>
                <div className="cont-dest">
                    <div className='titulo'>
                        <h1>Produtos destaque</h1>
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing eli Eveniet eaque iusto recusandae corporis harum natus itaque</h2>
                    </div>
                    
                    <div className="container-card-des2">
                        {CardProd.map((data) => (
                            <div className='card-prod'>
                                <div className='info-sup'>
                                    <div className='off'>
                                        <h3>50% Off</h3>
                                    </div>
                                    <div className='favoritos-c'>
                                        <MdFavoriteBorder />
                                    </div>
                                </div>
                                <div className='img-card'>
                                    <img src="../src/assets/img-card.png" alt="Produto" />
                                </div>
                                <div className="info-sub">
                                    <div className="titulo-pro">
                                        <h3>Tênis Vans</h3>
                                    </div>
                                    <div className="aval">
                                        <img src="../src/assets/img-avaliacao.png" alt="Avaliacao" />
                                    </div>
                                    <div className="pre-car">
                                        <div className="preco">
                                            <h3>R$120,00</h3>
                                        </div>
                                        <div className="carrinho-c">
                                            <IoMdAddCircleOutline />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                      
                </div>
            </section>
        </>
    )
}
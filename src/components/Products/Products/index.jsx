import '../../../components/Products/Products/Products.modules.css'
// import '../../../components/Products/Products/data.js'
import Input from '../../Input';
import { Link } from "react-router-dom";
import { FaBorderAll } from "react-icons/fa6";
import { GiClothes } from "react-icons/gi";
import { GiRunningShoe } from "react-icons/gi";
import { RiCellphoneFill } from "react-icons/ri";
import { IoHeadset } from "react-icons/io5";
import { GiBilledCap } from "react-icons/gi";
import { BsFillSpeakerFill } from "react-icons/bs";
import { MdToys } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { FaTabletAlt } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";


const CardProd = [ 
    {
        id: 1,
        title: "Computador",
        images: ["../src/assets/products/roupas/roupas-01.png"],
        price: "R$120,00",
    },
    {
        id: 2,
        title: "Computador",
        images: ["../src/assets/products/roupas/roupas-02.png"],
        price: "R$120,00",
    },
    {
        id: 3,
        title: "Computador",
        images: ["../src/assets/products/roupas/roupas-03.png"],
        price: "R$120,00",
    },
    {
        id: 4,
        title: "Computador",
        images: ["../src/assets/products/roupas/roupas-04.png"],
        price: "R$120,00",
    },
    {
        id: 5,
        title: "Computador",
        images: ["../src/assets/products/roupas/roupas-05.png"],
        price: "R$120,00",
    },
    {
        id: 6,
        title: "Computador",
        images: ["../src/assets/products/roupas/roupas-06.png"],
        price: "R$120,00",
    },
    {
        id: 7,
        title: "Computador",
        images: ["../src/assets/products/sapatos/sapatos-01.png"],
        price: "R$120,00",
    },
    {
        id: 8,
        title: "Computador",
        images: ["../src/assets/products/sapatos/sapatos-02.png"],
        price: "R$120,00",
    },
    {
        id: 9,
        title: "Computador",
        images: ["../src/assets/products/sapatos/sapatos-03.png"],
        price: "R$120,00",
    },
    {
        id: 10,
        title: "Computador",
        images: ["../src/assets/products/sapatos/sapatos-04.png"],
        price: "R$120,00",
    },
    {
        id: 11,
        title: "Computador",
        images: ["../src/assets/products/sapatos/sapatos-05.png"],
        price: "R$120,00",
    },
    {
        id: 12,
        title: "Computador",
        images: ["../src/assets/products/sapatos/sapatos-06.png"],
        price: "R$120,00",
    },
    {
        id: 13,
        title: "Computador",
        images: ["../src/assets/products/celulares/celulares-01.png"],
        price: "R$120,00",
    },
    {
        id: 14,
        title: "Computador",
        images: ["../src/assets/products/celulares/celulares-02.png"],
        price: "R$120,00",
    },
    {
        id: 15,
        title: "Computador",
        images: ["../src/assets/products/celulares/celulares-03.png"],
        price: "R$120,00",
    },
    {
        id: 16,
        title: "Computador",
        images: ["../src/assets/products/celulares/celulares-04.png"],
        price: "R$120,00",
    },
    {
        id: 17,
        title: "Computador",
        images: ["../src/assets/products/celulares/celulares-05.png"],
        price: "R$120,00",
    },
    {
        id: 18,
        title: "Computador",
        images: ["../src/assets/products/celulares/celulares-06.png"],
        price: "R$120,00",
    },
    {
        id: 19,
        title: "Computador",
        images: ["../src/assets/products/fones/fones-01.png"],
        price: "R$120,00",
    },
    {
        id: 20,
        title: "Computador",
        images: ["../src/assets/products/fones/fones-02.png"],
        price: "R$120,00",
    },
    {
        id: 21,
        title: "Computador",
        images: ["../src/assets/products/fones/fones-03.png"],
        price: "R$120,00",
    },
    {
        id: 22,
        title: "Computador",
        images: ["../src/assets/products/todos/todos-04.png"],
        price: "R$120,00",
    },
    {
        id: 23,
        title: "Computador",
        images: ["../src/assets/products/fones/fones-05.png"],
        price: "R$120,00",
    },
    {
        id: 24,
        title: "Computador",
        images: ["../src/assets/products/fones/fones-06.png"],
        price: "R$120,00",
    },
    {
        id: 25,
        title: "Computador",
        images: ["../src/assets/products/acessorios/acessorios-01.png"],
        price: "R$120,00",
    },
    {
        id: 26,
        title: "Computador",
        images: ["../src/assets/products/acessorios/acessorios-02.png"],
        price: "R$120,00",
    },
    {
        id: 27,
        title: "Computador",
        images: ["../src/assets/products/acessorios/acessorios-03.png"],
        price: "R$120,00",
    },
    {
        id: 28,
        title: "Computador",
        images: ["../src/assets/products/acessorios/acessorios-04.png"],
        price: "R$120,00",
    },
    {
        id: 29,
        title: "Computador",
        images: ["../src/assets/products/acessorios/acessorios-05.png"],
        price: "R$120,00",
    },
    {
        id: 30,
        title: "Computador",
        images: ["../src/assets/products/acessorios/acessorios-06.png"],
        price: "R$120,00",
    },
    {
        id: 31,
        title: "Computador",
        images: ["../src/assets/products/eletronicos/eletronicos-01.png"],
        price: "R$120,00",
    },
    {
        id: 32,
        title: "Computador",
        images: ["../src/assets/products/eletronicos/eletronicos-02.png"],
        price: "R$120,00",
    },
    {
        id: 33,
        title: "Computador",
        images: ["../src/assets/products/eletronicos/eletronicos-03.png"],
        price: "R$120,00",
    },
    {
        id: 34,
        title: "Computador",
        images: ["../src/assets/products/eletronicos/eletronicos-04.png"],
        price: "R$120,00",
    },
    {
        id: 35,
        title: "Computador",
        images: ["../src/assets/products/eletronicos/eletronicos-05.png"],
        price: "R$120,00",
    },
    {
        id: 36,
        title: "Computador",
        images: ["../src/assets/products/eletronicos/eletronicos-06.png"],
        price: "R$120,00",
    },
    {
        id: 37,
        title: "Computador",
        images: ["../src/assets/products/brinquedos/brinquedos-01.png"],
        price: "R$120,00",
    },
    {
        id: 38,
        title: "Computador",
        images: ["../src/assets/products/brinquedos/brinquedos-02.png"],
        price: "R$120,00",
    },
    {
        id: 39,
        title: "Computador",
        images: ["../src/assets/products/brinquedos/brinquedos-03.png"],
        price: "R$120,00",
    },
    {
        id: 40,
        title: "Computador",
        images: ["../src/assets/products/brinquedos/brinquedos-04.png"],
        price: "R$120,00",
    },
    {
        id: 41,
        title: "Computador",
        images: ["../src/assets/products/brinquedos/brinquedos-05.png"],
        price: "R$120,00",
    },
    {
        id: 42,
        title: "Computador",
        images: ["../src/assets/products/brinquedos/brinquedos-06.png"],
        price: "R$120,00",
    },
    {
        id: 43,
        title: "Computador",
        images: ["../src/assets/products/computadores/computadores-01.png"],
        price: "R$120,00",
    },
    {
        id: 44,
        title: "Computador",
        images: ["../src/assets/products/computadores/computadores-02.png"],
        price: "R$120,00",
    },
    {
        id: 45,
        title: "Computador",
        images: ["../src/assets/products/computadores/computadores-03.png"],
        price: "R$120,00",
    },
    {
        id: 46,
        title: "Computador",
        images: ["../src/assets/products/computadores/computadores-04.png"],
        price: "R$120,00",
    },
    {
        id: 47,
        title: "Computador",
        images: ["../src/assets/products/computadores/computadores-05.png"],
        price: "R$120,00",
    },
    {
        id: 48,
        title: "Computador",
        images: ["../src/assets/products/computadores/computadores-06.png"],
        price: "R$120,00",
    },
    {
        id: 49,
        title: "Computador",
        images: ["../src/assets/products/tablets/tablets-01.png"],
        price: "R$120,00",
    },
    {
        id:50,
        title: "Computador",
        images: ["../src/assets/products/tablets/tablets-02.png"],
        price: "R$120,00",
    },
    {
        id:51,
        title: "Computador",
        images: ["../src/assets/products/tablets/tablets-03.png"],
        price: "R$120,00",
    },
    {
        id:52,
        title: "Computador",
        images: ["../src/assets/products/tablets/tablets-04.png"],
        price: "R$120,00",
    },
    {
        id:53,
        title: "Computador",
        images: ["../src/assets/products/tablets/tablets-05.png"],
        price: "R$120,00",
    },
    {
        id:54,
        title: "Computador",
        images: ["../src/assets/products/tablets/tablets-06.png"],
        price: "R$120,00",
    },
];

export default function Products( {handleChange} ) {
    return (
        <section className='products'>
            <div className='container-category'>
                <div className='list-category'>
                    <div className='titulo-category'>
                        <h2>Categorias</h2>
                    </div>
                    <div className='input-cat-container'>
                        <Input
                        handleChange={handleChange}
                        value="todos"
                        title="Todos"
                        name="test"
                        icon={<FaBorderAll className='icon-category' />}
                        />
                        <Input
                        handleChange={handleChange}
                        value="roupas"
                        title="Roupas"
                        name="test"
                        icon={<GiClothes className='icon-category' />}
                        />
                        <Input
                        handleChange={handleChange}
                        value="sapatos"
                        title="Sapatos"
                        name="test"
                        icon={<GiRunningShoe className='icon-category' />}
                        />
                        <Input
                        handleChange={handleChange}
                        value="celulares"
                        title="Celulares"
                        name="test"
                        icon={<RiCellphoneFill className='icon-category' />}
                        />
                        <Input
                        handleChange={handleChange}
                        value="fones"
                        title="Fones"
                        name="test"
                        icon={<IoHeadset className='icon-category' />}
                        />
                        <Input
                        handleChange={handleChange}
                        value="acessorios"
                        title="Acessórios"
                        name="test"
                        icon={<GiBilledCap className='icon-category' />}
                        />
                        <Input
                        handleChange={handleChange}
                        value="eletronicos"
                        title="Eletrônicos"
                        name="test"
                        icon={<BsFillSpeakerFill className='icon-category' />}
                        />
                        <Input
                        handleChange={handleChange}
                        value="brinquedos"
                        title="Brinquedos"
                        name="test"
                        icon={<MdToys className='icon-category' />}
                        />
                        <Input
                        handleChange={handleChange}
                        value="computadores"
                        title="Computadores"
                        name="test"
                        icon={<FaComputer className='icon-category' />}
                        />
                        <Input
                        handleChange={handleChange}
                        value="tablets"
                        title="Tablets"
                        name="test"
                        icon={<FaTabletAlt className='icon-category' />}
                        />
                    </div>
                </div>
            </div>
            
            <div className="container-card">
                {CardProd.map((data) => (
                    <div className='card-prod'>
                        <div className='info-sup'>
                            <div className='off'>
                                <h3>50% Off</h3>
                            </div>
                            <div className='favoritos-c'>
                                <Link><MdFavoriteBorder /></Link>
                            </div>
                        </div>
                        <div className='img-card-p'>
                            <img src={data.images} alt="Produto" />
                            {/* <img src="../src/assets/img-card.png" alt="Produto" /> */}
                        </div>
                        <div className="info-sub">
                            <div className="titulo-pro">
                                <h3>{data.title}</h3>
                            </div>
                            <div className="aval">
                                <img src="../src/assets/img-avaliacao.png" alt="Avaliacao" />
                            </div>
                            <div className="pre-car">
                                <div className="preco">
                                    <h3>{data.price}</h3>
                                </div>
                                <div className="carrinho-c">
                                    <Link><IoMdAddCircleOutline /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
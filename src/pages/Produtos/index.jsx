import '../Produtos/Produtos.modules.css';
import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import Footer from "../../components/Footer"; 
import Products from '../../components/Products/Products';
import Destaque from "../../components/Products/Destaque";
import Avaliados from '../../components/Products/Avaliados';
import Oferta from '../../components/Products/Oferta';
// import cardProdData from "../Produtos/cardProdData";

export default function Produtos() {
    return (
        <>
            <Header/>

            <MainContainer>
                <Products/>
                <Destaque/>
                <Avaliados/>
                <Oferta/>
            </MainContainer>

            <Footer/>
        </>
    );
}
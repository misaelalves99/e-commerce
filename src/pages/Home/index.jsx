import '../Home/Home.modules.css';
import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import Footer from "../../components/Footer";
import Propaganda from "../../components/Home/Propaganda";
import Destaque from "../../components/Home/Destaque";
import Avaliados from '../../components/Home/Avaliados';
import Oferta from '../../components/Home/Oferta';

export default function Home() {
    return (
        <>
            <Header/>

            <MainContainer>
                <Propaganda/>
                <Destaque/>
                <Avaliados/>
                <Oferta/>
            </MainContainer>

            <Footer/>
        </>
    );
}
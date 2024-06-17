import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Contato from "./pages/Contato";

// import Acessorios from "./pages/Produtos/Categories/Acessorios";
// import Brinquedos from "./pages/Produtos/Categories/Brinquedos";
// import Celulares from "./pages/Produtos/Categories/Celulares";
// import Computadores from "./pages/Produtos/Categories/Computadores";
// import Eletronicos from "./pages/Produtos/Categories/Eletronicos";
// import Fones from "./pages/Produtos/Categories/Fones";
// import Roupas from "./pages/Produtos/Categories/Roupas";
// import Tablets from "./pages/Produtos/Categories/Tablets";
// import Tenis from "./pages/Produtos/Categories/Tenis";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Home /> }/>
                <Route path="/produtos" element={ <Produtos /> }/>
                <Route path="/contato" element={ <Contato /> }/>

                {/* <Route path="/" element={ <Home /> }/>
                <Route path="/todos" element={ <Todos /> }/>
                <Route path="/roupas" element={ <Roupas /> }/>
                <Route path="/tenis" element={ <Tenis /> }/>
                <Route path="/celulares" element={ <Celulares /> }/>
                <Route path="/fones" element={ <Fones /> }/>
                <Route path="/acessorios" element={ <Acessorios /> }/>
                <Route path="/eletronicos" element={ <Eletronicos /> }/>
                <Route path="/brinquedos" element={ <Brinquedos /> }/>
                <Route path="/computadores" element={ <Computadores /> }/>
                <Route path="/tablets" element={ <Tablets /> }/> */}
            </Routes>    
        </Router>
    );
};

export default App;

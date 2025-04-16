import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import "./styles/global.css";
import HowItWorksSection from './components/HowItWorks/HowItWorksSection';
import ArtistasEclientes from './components/ArtistasEclientes/ArtistasEclientes';
import Login from './components/Login/Login';
import Cadastro from './components/Cadastro/Cadastro';
import VerArte from './components/VerArte/VerArte';
import PainelArtista from './components/PainelArtista/PainelArtista';
import PainelCliente from './components/PainelCliente/PainelCliente';
import Comissao from './components/Comissao/Comissao';
import Post from './components/Post/Post';

// Dentro do return:
<HowItWorksSection />


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <HeroSection />
                        <FeatureSection />
                        <HowItWorksSection />
                        <FAQ />
                    </>
                } />
                <Route path="/artistas_clientes" element={<ArtistasEclientes />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/ver_arte" element={<VerArte />} />
                <Route path="/painel_artista" element={<PainelArtista />} />
                <Route path="/painel_cliente" element={<PainelCliente />} />
                <Route path="/comissao" element={<Comissao />} />
                <Route path="/post" element={<Post />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

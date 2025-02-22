import React from 'react';
import logo_Giih from './assets/logo_Giih.jpg';
import instagram from './assets/LogoInsta.jpeg';
import Whatsapp from './assets/LogoWpp.jpeg';

const App = () => {
  return (
    <div className='container'>
{/* CABEÇALHO */}
      <div className='cabecalho'>
        <img className='cabecalho_image' src={logo_Giih} alt="Logo" />
        <h1 className='cabecalho_logo'>Digital Creators Brasil</h1>
        <h3 className='cabecalho_text'>Pagina inicial</h3>
        <select name="Mais" className='cabecalho_btn'>
          <option value="Pagina Inicial">Pagina Inicial</option>
          <option value="Serviços">Serviços</option>
          <option value="Sobre">Sobre</option>
          <option value="Depoimentos">Depoimentos</option>
          <option value="Contato">Contato</option>
          <i className="fa-solid fa-arrow-down"></i>
        </select>
      </div>

{/* LOGO */}
      <div className='logo'>
        <img className='logo_image' src={logo_Giih} alt="Logo" />
      </div>

{/* TEMPLATE */}
      <div className='template'>
        <h1 className='template_text'>
          Experiência <br /> completa de <br /> serviços
        </h1>
      </div>

{/* LISTA */}
      <div className='lista'>
        <div className='lista_logo'>
          <img className='lista_logo_image' src={logo_Giih} alt="Logo" />
          <p className='lista_logo_text1'>
          Posts <br /> Diversos <br /> e <br /> Logotipos
          </p>
        </div>
        <div className='lista_insta'>
          <img className='lista_insta_image' src={instagram} alt="LogoInstagram" />
          <a className='lista_logo_text2' href="https://www.instagram.com/giih.visuarts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">@giih.visuarts</a>
        </div>
        <div className='lista_wpp'>
          <img className='lista_wpp_image' src={Whatsapp} alt="LogoWpp" />
          <p className='lista_logo_text3'>(11)95919-9658</p>
        </div>
      </div>

{/* TEXTO */}
      <div className='container_texto'>
        <p className='texto'>No [ Nome do salão ], nosso objetivo é fazer você brilhar. Criamos looks lindos e modernos para as clientes, com foco em estilos versáteis para o dia a dia. Se você quer algo fashion, tradicional ou para um evento especial, o [ Nome do salão ] pode ajudar você.
        Acreditamos que você é seu melhor acessório. Por esse motivo, oferecemos uma experiência completa de serviços de unhas, cabelos e maquiagem.</p>
      </div>

{/* RODAPÉ */}
      <div className='container_rodape'>
        <p className='rodape_texto'>
          Ligue ou envie um e-mail para agendar seu horário: 5919-9658 ou [ endereço de e-mail ]
        </p>
      </div>
    </div>
  )
}

export default App


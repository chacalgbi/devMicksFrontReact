import React from 'react';
import axios from 'axios';
import Head from 'next/head';
import { Container, Jumbotron } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/menu';
import Rodape from '../components/rodape';

const Empresa = (data) => (
      <div>
        <Head>
            <title>Sobre Empresa</title>
            <meta name='robots' content='index,follow' />
            <meta name='description' content='Site de ... sobre ...' />
        </Head>
        <Menu />
        <Jumbotron fluid className="empresa">
            <style>{`.empresa{
                padding-top: 100px;
                padding-bottom: 100px;
                background-color: #fff;
            }
            .titulo-emp{
                padding-bottom: 70px;
            }`}</style>
            <Container>
                <h1 className="text-center titulo-emp">{data.response.sobre.tituloPgSobre}</h1>
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">{data.response.sobre.tituloSobre}</h2>
                        <p className="lead">{data.response.sobre.descSobre}</p>
                    </div>
                    <div className="col-md-5">
                        <img src="/logo-Micks.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
                    </div>
                </div>
            </Container>
        </Jumbotron>
        <Rodape data={data.response.rodape} />
      </div>
    );
  
Empresa.getInitialProps = async () => {
    const response = await axios.get('http://localhost:8080/sobre');
    //console.log(response.data)
    return {response: response.data}
}

export default Empresa;
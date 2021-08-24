import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';
import Head from 'next/head';
import { Jumbotron, Container } from 'reactstrap';
import Link from 'next/link';
import Menu from '../components/menu';
import Rodape from '../components/rodape';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas} from '@fortawesome/free-solid-svg-icons';
import { async } from 'regenerator-runtime';
library.add(fas);

const Home = (data) => (
    <div>
      <style>{`.descr-top{
          background-image: url(/front.jpeg);
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          padding-top: 150px;
          padding-botton: 150px;
          color: #FFF;
          text-align: center;
       }
        .servicos{
          padding-top: 100px;
          padding-bottom: 100px;
          background-color: #fff;
        }
        .icone{
          width: 110px;
          height: 110px;
          padding-top: 12px;
          background-color: #fa1e37;
          border-radius: 250px;
          font-size: 3rem;
          color: #FFF;
        }
        .circulo-serv{
          padding-top: 50px;
          padding-bottom: 50px;
        }
        .video{
          background-color: #000;
          margin-bottom: 0rem !important;
          color: #fff;
          text-align: center;
        }
        .projeto{
          padding-top: 50px;
          padding-bottom: 50px;
          background-color: #fff;
        }
        .row-projeto{
          margin-top: 70px;
        }
        .circulo{
          display: inline-block;
          height: 30px;
          width: 30px;
          line-height: 30px;
          -moz-border-radius: 15px;
          border-radius: 15px;
          background-color: #fa1e37;
          color: #fff;
          text-align: center;
          padding-top: 30px;
          margin-bottom: 30px;
        }
        .circulo-sm{
          height: 140px;
          width: 140px;
          line-height: 20px;
          -moz-border-radius: 150px;
          border-radius: 150px;
          font-size: 5rem;
        }
      `}</style>
      <Head>
        <title>Micks Telecom - DEVs</title>
        <meta name='robots' content='index, follow' />
        <meta name='description' content='Site sobre teste de desenvolvimento para Micks Telecom RH Recruta DEVs' />
      </Head>
      <Menu />
      <Jumbotron fluid className="descr-top">
      <Container>
        <h1 className="display-3">{data.response.home.tituloTopo}</h1>
        <h2>{data.response.home.descTopo}</h2>

        <Link href={data.response.home.linkBtnTopo}>
          <a className="btn btn-lg btn-light">{data.response.home.tituloBtnTopo}</a>
        </Link>
        
      </Container>
      </Jumbotron>
      <Jumbotron fluid className="servicos">
        <Container>
          <div className="row featurette">
            <div className="col-md-6">
              <h2 className="featurette-heading">{data.response.home.tituloServ}</h2>
              <p className="lead">{data.response.home.descServ}</p>
            </div>
            <div className="col-md-6">
              <div className="row circulo-serv">
                <div className="col-sm-4">
                  <div className="icone text-center">
                    <FontAwesomeIcon icon={data.response.home.iconeUmServ} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="icone text-center">
                  <FontAwesomeIcon icon={data.response.home.iconeDoisServ} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="icone text-center">
                  <FontAwesomeIcon icon={data.response.home.iconeTresServ} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Jumbotron>
      <Jumbotron fluid className="video">
        <Container>
          <h2 className="display-4">{data.response.home.tituloVideo}</h2>
          <p className="lead text-center">{data.response.home.descTituloVideo}</p>
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-8">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={data.response.home.embedVideo}></iframe>
              </div>
            </div>
          </div>
        </Container>
      </Jumbotron>
      <Jumbotron fluid className="projeto">
        <Container>
          <div className="marketing text-center">
            <h1 className="display-4">{data.response.home.tituloProj}</h1>
            <div className="row row-projeto">
              <div className="col-sm-3">
                <div className="circulo circulo-sm">
                  <FontAwesomeIcon icon={data.response.home.iconeUmProj} />
                </div>
                <h2>{data.response.home.tituloUmProj}</h2>
                <p>{data.response.home.descUmProj}</p>
              </div>
              <div className="col-sm-3">
                <div className="circulo circulo-sm">
                  <FontAwesomeIcon icon={data.response.home.iconeDoisProj} />
                </div>
                <h2>{data.response.home.tituloDoisProj}</h2>
                <p>{data.response.home.descDoisProj}</p>
              </div>
              <div className="col-sm-3">
                <div className="circulo circulo-sm">
                <FontAwesomeIcon icon={data.response.home.iconeTresProj} />
                </div>
                <h2>{data.response.home.tituloTresProj}</h2>
                <p>{data.response.home.descTresProj}</p>
              </div>
              <div className="col-sm-3">
                <div className="circulo circulo-sm">
                  <FontAwesomeIcon icon={data.response.home.iconeQuatroProj} />
                </div>
                <h2>{data.response.home.tituloQuatroProj}</h2>
                <p>{data.response.home.descQuatroProj}</p>
              </div>
            </div>
          </div>
        </Container>
      </Jumbotron>
      <Rodape data={data.response.rodape} />
    </div>
  );

  Home.getInitialProps = async () => {
    const response = await axios.get('http://localhost:8080/home');
    //console.log(response.data)
    return {response: response.data}
  }

export default Home;
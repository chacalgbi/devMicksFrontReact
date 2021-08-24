import React, { Component } from 'react';
import dynamic from "next/dynamic";
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Container, Jumbotron, Form, FormGroup, Label, Input, Button, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/menu';
import Head from 'next/head';

var id = ' ';
var nome = ' ';
var email = ' ';
var cpf = ' ';
var telefone = ' ';
var endereco = ' ';
var cidade = ' ';

function Excluir(){
  const [pegar, setPegar] = React.useState(' ');
  const [aviso, setAviso] = React.useState(' ');

  React.useEffect(() => {
    setPegar(window.location.search);
  });

  const urlParams = new URLSearchParams(pegar);
  id = urlParams.get('id')
  nome = urlParams.get('nome')
  email = urlParams.get('email')
  cpf = urlParams.get('cpf')
  telefone = urlParams.get('telefone')
  endereco = urlParams.get('endereco')
  cidade = urlParams.get('cidade')

  const apagar = () => {
    setAviso("Apagando...");
    const url = `http://localhost:8080/users/${id}`
    axios.delete(url)
    .then((response) => {
      setAviso(response.data.message);
    }).catch((err) => {
      setAviso(err);
    });
  }

  return (
    <div>
        <style>{`
          .promotion-form__group {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
          }

          .promotion-form__group label {
            margin-bottom: 5px;
            font-size: 14px;
            font-weight: 500;
            color: #555555;
          }

          .promotion-form__group input {
            border: 1px solid #AAAAAA;
            border-radius: 8px;
            background-color: #fff;
            height: 36px;
            padding: 0 15px;
          }
        `}</style>
      <Head>
        <title>Deseja apagar este usuário?</title>
        <meta name='robots' content='index,follow' />
        <meta name='description' content='Site de ... sobre ..., pagina de contato com a empresa ...' />
      </Head>
      <Menu />
      <br/><br/><br/>
      <Container>
      <h2>Deseja apagar este usuário?</h2>
      <div className="row featurette">
        <div className="col-md-6">
          <form>
            <div className="promotion-form__group">
              <label htmlFor="nome">Nome</label>
              <input id="nome" name="nome" type="text" value={nome} readOnly />
            </div>
            <div className="promotion-form__group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={email} readOnly />
            </div>
            <div className="promotion-form__group">
              <label htmlFor="senha">Senha</label>
              <input id="senha" name="senha" type="text" readOnly />
            </div>
            <div className="promotion-form__group">
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" name="cpf" type="text" value={cpf} readOnly />
            </div>
            <div className="promotion-form__group">
              <label htmlFor="telefone">Telefone</label>
              <input id="telefone" name="telefone" type="text" value={telefone} readOnly />
            </div>
            <div className="promotion-form__group">
              <label htmlFor="endereco">Endereco</label>
              <input id="endereco" name="endereco" type="text" value={endereco} readOnly />
            </div>
            <div className="promotion-form__group">
              <label htmlFor="cidade">Cidade</label>
              <input id="cidade" name="cidade" type="text" value={cidade} readOnly />
            </div>
            <div>
            </div>
          </form>
          <button type="submit" className="btn btn-danger" onClick={apagar}>Apagar</button>
        </div>
        <div className="col-md-6">
          <h3 style={{color: "red"}}>{aviso}</h3><br/>
          <img src="/logo-Micks.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
        </div>
      </div>
      </Container>
    </div>
  );
}
export default Excluir;
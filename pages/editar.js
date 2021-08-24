import React, { Component } from 'react';
import dynamic from "next/dynamic";
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Container, Jumbotron, Form, FormGroup, Label, Input, Button, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/menu';
import Head from 'next/head';

const initialValue = {
  _id: '',
  nome: '',
  email: '',
  senha: '',
  cpf: '',
  telefone: '',
  endereco: '',
  cidade: ''
}

var id = ' ';
var nome = ' ';
var email = ' ';
var cpf = ' ';
var telefone = ' ';
var endereco = ' ';
var cidade = ' ';

function Listar(){
  const [values, setValues] = React.useState(initialValue);
  const [pegar, setPegar] = React.useState(' ');
  const [exibir, setExibir] = React.useState(' ');

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

  function onChange(ev) {
    const { name, value } = ev.target;
    setValues({ ...values, [name]: value });
    
  }

  function onSubmit(ev) {
    ev.preventDefault();
    setExibir("Editando...");
    let addId = values;
    addId["_id"] = id;
    const enviar = JSON.stringify(addId)
    console.log(enviar);
    
    axios.put('http://localhost:8080/users', enviar, {headers:{
            'Content-Type': 'application/json; charset=utf-8'
          },})
    .then((response) => {
      setExibir(response.data.message);
    }).catch((err) => {
      setExibir(err);
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
            margin-bottom: 3px;
            font-size: 14px;
            font-weight: 500;
            color: #555555;
          }

          .promotion-form__group input {
            border: 1px solid #AAAAAA;
            border-radius: 8px;
            background-color: #fff;
            height: 36px;
            padding: 0 10px;
          }
        `}</style>
      <Head>
        <title>Lista de Usuários</title>
        <meta name='robots' content='index,follow' />
        <meta name='description' content='Site de ... sobre ..., pagina de contato com a empresa ...' />
      </Head>
      <Menu />
      <br/><br/><br/>
      <Container>
      <h2>Editar Usuário</h2>
      <div className="row featurette">
        <div className="col-md-6">
          <form onSubmit={onSubmit}>
            <div className="promotion-form__group">
              <label htmlFor="nome">Nome</label>
              <input id="nome" name="nome" type="text" placeholder={nome} onChange={onChange} />
            </div>
            <div className="promotion-form__group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder={email} onChange={onChange} />
            </div>
            <div className="promotion-form__group">
              <label htmlFor="senha">Senha</label>
              <input id="senha" name="senha" type="text" onChange={onChange} />
            </div>
            <div className="promotion-form__group">
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" name="cpf" type="text" placeholder={cpf} onChange={onChange} />
            </div>
            <div className="promotion-form__group">
              <label htmlFor="telefone">Telefone</label>
              <input id="telefone" name="telefone" type="text" placeholder={telefone} onChange={onChange} />
            </div>
            <div className="promotion-form__group">
              <label htmlFor="endereco">Endereco</label>
              <input id="endereco" name="endereco" type="text" placeholder={endereco} onChange={onChange} />
            </div>
            <div className="promotion-form__group">
              <label htmlFor="cidade">Cidade</label>
              <input id="cidade" name="cidade" type="text" placeholder={cidade} onChange={onChange} />
            </div>
            <div>
              <button type="submit" className="btn btn-success">Salvar</button><strong>  </strong>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <h3 style={{color: "red"}}>{exibir}</h3><br/>
          <img src="/logo-Micks.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
        </div>
      </div>
      </Container>
    </div>
  );
}
export default Listar;
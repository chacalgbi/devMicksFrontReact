import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Menu from '../components/menu';
import Rodape from '../components/rodape';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Container, Jumbotron, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialValue = {
    nome: '',
    email: '',
    senha: '',
    cpf: '',
    telefone: '',
    endereco: '',
    cidade: ''
}

const Cadastrar = (data) => {
  const [values, setValues] = useState(initialValue);
  const [exibir, setExibir] = useState('');
  const history = useHistory();
  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev) {
    ev.preventDefault();
    const enviar = JSON.stringify(values)

    axios.post('http://localhost:8080/users', enviar, {headers:{
            'Content-Type': 'application/json; charset=utf-8'
          },})
      .then((response) => {
        setExibir(response.data.message);
        console.log(`Deu bom: ${exibir}`)
      }).catch((err) => {
        setExibir(err);
        console.log(`Deu ruim: ${exibir}`);
    });
  }

  return (
    <div>
      <style>{`
          .promotion-form__group {
            display: flex;
            flex-direction: column;
            margin-bottom: 15px;
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
            padding: 0 10px;
          }
        `}</style>
      <Head>
        <title>Micks Telecom - DEVs</title>
        <meta name='robots' content='index, follow' />
        <meta name='description' content='Site sobre teste de desenvolvimento para Micks Telecom RH Recruta DEVs' />
      </Head>
      <Menu />
        <Container>
          <br/><br/><br/>
      <h2>Cadastrar Novo Usuário</h2>
      <h3 style={{color: "red"}}>{exibir}</h3>
      <div className="row featurette">
        <div className="col-md-6">
          <form onSubmit={onSubmit}>
            <div className="promotion-form__group">
              <label htmlFor="nome">Nome</label>
              <input id="nome" name="nome" type="text" onChange={onChange} />
            </div>
            <div className="promotion-form__group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" onChange={onChange} />
            </div>
            <div className="promotion-form__group">
              <label htmlFor="senha">Senha</label>
              <input id="senha" name="senha" type="text" onChange={onChange} />
            </div>
            <div className="promotion-form__group">
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" name="cpf" type="text" onChange={onChange} />
            </div>
            <div className="promotion-form__group">
              <label htmlFor="telefone">Telefone</label>
              <input id="telefone" name="telefone" type="text" onChange={onChange} />
            </div>
            <div className="promotion-form__group">
              <label htmlFor="endereco">Endereco</label>
              <input id="endereco" name="endereco" type="text" onChange={onChange} />
            </div>
            <div className="promotion-form__group">
              <label htmlFor="cidade">Cidade</label>
              <input id="cidade" name="cidade" type="text" onChange={onChange} />
            </div>
            <div>
              <button type="submit">Salvar</button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <img src="/logo-Micks.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
        </div>
      </div>
      </Container>
    </div>
  )
};

export default Cadastrar;
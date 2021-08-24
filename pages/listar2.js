import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Container, Jumbotron, Form, FormGroup, Label, Input, Button, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/menu';
import Head from 'next/head';
import Rodape from '../components/rodape';


export default class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = { listaItens: [] }
        this.refresh = this.refresh.bind(this);
    }

    
    refresh() {
        axios.get("http://localhost:8080/users")
        .then(response => { this.setState({ listaItens: response.data.users.docs}); })
        .catch(() => { console.log('Erro ao recuperar os dados'); });    
    }
    
    componentDidMount() {
        this.refresh()
    }
    
    render() {
        return (
    
            <div>
            <Head>
            <title>Lista de Usuários</title>
            <meta name='robots' content='index,follow' />
            <meta name='description' content='Site de ... sobre ..., pagina de contato com a empresa ...' />
            </Head>
            <Menu />
            <Jumbotron fluid className="contato">
                <style>{`.contato{
                            padding-top: 100px;
                            padding-bottom: 100px;
                            background-color: #fff;
                            margin-bottom: 0rem;
                        }
                        .titulo-contato{
                            padding-bottom: 70px;
                        }`}
                </style>
                <Container>
                    <h1 className="text-center titulo-contato">Listar Usuários</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Telefone</th>
                                <th>Cidade</th>
                                <th>Editar</th>
                                <th>Excluir</th>
                            </tr>
                        </thead>
                        <tbody>
                        { this.state.listaItens.map(function(item){
                                return (
                                    <tr key={item._id}>
                                        <td>{item.nome}</td>
                                        <td>{item.email}</td>
                                        <td>{item.telefone}</td>
                                        <td>{item.cidade}</td>
                                        <td><button className="btn btn-primary" > <a href={`/editar?id=${item._id}&nome=${item.nome}&email=${item.email}&cpf=${item.cpf}&telefone=${item.telefone}&cidade=${item.cidade}&endereco=${item.endereco}`} style={{color: "white"}}>Editar</a> </button></td>
                                        <td><button className="btn btn-danger" > <a href={`/excluir?id=${item._id}&nome=${item.nome}&email=${item.email}&cpf=${item.cpf}&telefone=${item.telefone}&cidade=${item.cidade}&endereco=${item.endereco}`} style={{color: "white"}}>Excluir</a> </button></td>
                                    </tr>
                                )
                              }
                            )
                        }
                        </tbody>
                    </Table>
                </Container>
            </Jumbotron>
            </div>
        ) 
    }
}
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from 'reactstrap';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="dark" dark expand="md" className="fixed-top">
            <Container>
                <NavbarBrand href="/">Mick Telecom</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/empresa">Sobre a Empresa</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/contato">Contato</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                        Opções de Usuário.
                        </DropdownToggle>
                        <DropdownMenu right>
                        <DropdownItem href="/listar2">
                            Listar Usuários
                        </DropdownItem>
                        <DropdownItem href="/cadastrar">
                            Cadastrar Usuários
                        </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
      </div>
    );
}

export default Menu;
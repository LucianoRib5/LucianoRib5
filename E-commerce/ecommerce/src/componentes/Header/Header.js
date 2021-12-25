import React from 'react';
import IconButton from '../IconButton/IconButton';
import ButtonLogin from '../../img/ButtonLogin.svg'
import { ContainerHeader } from './Styled';
import { ContainerLista } from './Styled';
import { Li } from './Styled';
import { Logo } from './Styled';

export default class Header extends React.Component{

    fazerLogin = () =>{
        alert("Logou!")
    }

    render(){
        return(
            <ContainerHeader>
                <Logo>Clothing Store</Logo>
                <ContainerLista>
                    <Li>Camisetas</Li>
                    <Li>Moletons</Li>
                    <Li>Bonés</Li>
                    <Li>Bermudas</Li>
                </ContainerLista>
                <IconButton 
                label={<img src={ButtonLogin} alt={"Botão login, utilizado pra fazer login no site."}/>}
                function={this.fazerLogin}
                />
            </ContainerHeader>
        )
    }
}
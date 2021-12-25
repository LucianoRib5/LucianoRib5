import React from 'react';
import { ContainerCard } from './Styled';
import { Img } from './Styled';

export default class CardProduto extends React.Component{
    render(){
        return(
            <ContainerCard>
                <Img src={this.props.imagemProduto} alt={this.props.altImagem}/>
                <p>{this.props.nome}</p>
                <p>R${this.props.preco}</p>
            </ContainerCard>
        )
    }
}
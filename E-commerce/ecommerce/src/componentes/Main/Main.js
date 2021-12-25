import React from 'react';
import CardProduto from '../CardProduto/CardProduto';
import Camiseta from '../../img/camiseta.jpg'
import { ContainerMain } from './Styled';

export default class Main extends React.Component{
    render(){
        return(
            <ContainerMain>
                <CardProduto
                    imagemProduto={Camiseta}
                    nome={"camiseta Short-Sleeve"}
                    preco={54.99}
                />
                <CardProduto
                    imagemProduto={Camiseta}
                    nome={"camiseta Short-Sleeve"}
                    preco={54.99}
                />
                <CardProduto
                    imagemProduto={Camiseta}
                    nome={"camiseta Short-Sleeve"}
                    preco={54.99}
                />
                <CardProduto
                    imagemProduto={Camiseta}
                    nome={"camiseta Short-Sleeve"}
                    preco={54.99}
                />
            </ContainerMain>
        )
    }
}
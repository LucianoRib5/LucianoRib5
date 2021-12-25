import React from 'react';
import { Button } from './Styled';

export default class IconButton extends React.Component{
    render(){
        return(
            <Button onClick={this.props.function}>{this.props.label}</Button>
        )
    }
}
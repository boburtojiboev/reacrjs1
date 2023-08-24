import React from 'react';
import './main.css'

export default class card extends React.Component {
    render() {
        return(
        <div className='container'>
            <img width={100} height={100} src={this.props.img} alt='meva'/>
            {this.props.title}

        </div>
        );
    }
}
import React, { Component } from 'react';
import axios from 'axios';

import QuoteBox from './QuoteBox';

export default class RandomeQuote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quote_text: '',
            quote_author: ''
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/random')
            .then(response => {
                console.log(response.data[0]);
                console.log('componentDidMount completed');
                this.setState({
                    quote_text: response.data[0].quote_text,
                    quote_author: response.data[0].quote_author
                });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    render() {
        return (
            <div className="randomquote">
                <QuoteBox quote={this.state.quote_text} author={this.state.quote_author} />
            </div>
        )
    }
}
import React, { Component } from 'react';
import axios from 'axios';

import QuoteBox from './QuoteBox';

<<<<<<< HEAD
=======
// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config();
// }
// require('dotenv').config();
>>>>>>> 7eecd6eb72620491aff8e7a6eb24fb9f21cf7e22
const API = process.env.REACT_APP_API_URI_REMOTE;

export default class RandomQuote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quote_text: '',
            quote_author: ''
        };
    }

    // TODO: refactor URI to use process.env.API
    componentDidMount() {
<<<<<<< HEAD
        axios.get( API + '/random')
            .then(response => {
                    console.log('componentDidMount completed');
                    this.setState({
                        quote_text: response.data[0].quote_text,
                        quote_author: response.data[0].quote_author
                    });
=======
        axios.get( process.env.REACT_APP_API_URI_REMOTE + '/random')
        .then(response => {
                console.log(API);
                console.log(response.data[0]);
                console.log('componentDidMount completed');
                this.setState({
                    quote_text: response.data[0].quote_text,
                    quote_author: response.data[0].quote_author
                });
>>>>>>> 7eecd6eb72620491aff8e7a6eb24fb9f21cf7e22
            })
            .catch(function (error){
                console.log(error);
            })
    }

    render() {
        return (
            <div className="randomquote container-fluid h-100 mx-auto my-auto">
                <QuoteBox quote={this.state.quote_text} author={this.state.quote_author} />
            </div>
        )
    }
}
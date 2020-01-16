import React, { Component } from 'react';
import axios from 'axios';
export default class AddQuote extends Component {



    constructor(props) {
        super(props);

        this.state = {
            quote_text: '',
            quote_author: ''
        }

        this.onChangeQuote = this.onChangeQuote.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeQuote(e) {
        this.setState({
            quote_text: e.target.value
        });
    }

    onChangeAuthor(e) {
        this.setState({
            quote_author: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Quote Text: ${this.state.quote_text}`);
        console.log(`Quote Author: ${this.state.quote_author}`);

        const newQuote = {
            quote_text: this.state.quote_text,
            quote_author: this.state.quote_author
        };


        axios.post('http://localhost:4000/quotes/add', newQuote)
            .then(res => console.log(res.data));


        this.setState({
            quote_text: '',
            quote_author: ''
        })
    }


        // TODO: Update this render

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Quote</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.quote_text}
                            onChange={this.onChangeQuote}
                        />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.quote_author}
                            onChange={this.onChangeAuthor}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Create Todo"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        )
    }

}
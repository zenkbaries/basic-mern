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


        axios.post(process.env.API_URI_REMOTE + '/random', newQuote)
            .then(res => console.log('posted'));


        this.setState({
            quote_text: '',
            quote_author: ''
        })
    }


        // TODO: Update this render to make it modal

    render() {
        return (
            <div className="container" style={{marginTop: 10}}>
                <h3>Create New Quote</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Quote: </label>
                        {/* <input
                            type="text"
                            className="form-control"
                            value={this.state.quote_text}
                            onChange={this.onChangeQuote}
                        /> */}
                        <div className="col-sm-10 col-form-label">
                            <textarea
                                className="form-control"
                                rows="5"
                                value={this.state.quote_text}
                                onChange={this.onChangeQuote}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Author: </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.quote_author}
                                onChange={this.onChangeAuthor}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Create Quote"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        )
    }

}
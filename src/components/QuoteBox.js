import React from 'react';
import QuoteCard from './QuoteCard';

const QuoteBox = (props) => {
    return (
        <div className="col-md-8 col-lg-8 mx-auto">
            <QuoteCard quote={props.quote} author={props.author} />
        </div>
    )
}

export default QuoteBox;
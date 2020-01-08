import React from 'react';

const QuoteCard = (props) => {
    return (
        <div className="card h-200">
            <div className="card-header">Quote</div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                <p>{props.quote}</p>
                <footer className="blockquote-footer">{props.author}</footer>
                </blockquote>
            </div>
        </div>
    )
}

export default QuoteCard;
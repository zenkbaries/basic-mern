import React from 'react';
import QuoteCard from './QuoteCard';

const QuoteBox = (props) => {
    return (
        <div className="container-fluid">
            {/* <div className="row mx-auto justify-content-center align-items-center flex-column "> */}
            <div className="row justify-content-center">

                <div className="col-10">
                    <QuoteCard quote={props.quote} author={props.author} />
                </div>
            </div>
        </div>
    )
}

export default QuoteBox;
import React from 'react';

const QuoteCard = (props) => {
    return (
        <div>
            <br />
            <h2>
            <span className= "float-left">Quote No. </span>
            {/* Here's the <u>best unsolicited startup advice</u> you can get! */}
            </h2>
            <br />
            <hr />
            <br />
            <h1>{props.quote}</h1>
            <br />
            <h2 className="float-right">-{props.author}</h2>
            <br className="clear" />
            <br />
        </div>
    )
}

export default QuoteCard;
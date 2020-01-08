import React from 'react';

const QuoteCard = (props) => {
    return (
        <div>
            <h2>
            <span>Quote No. </span>
            {/* Here's the <u>best unsolicited startup advice</u> you can get! */}
            </h2>

            <h1>{props.quote}</h1>
            <h2 class="pull-right">-{props.author}</h2>

            <br class="clear" />
            <br />
            <br />
            <br />
        </div>
    )
}

export default QuoteCard;
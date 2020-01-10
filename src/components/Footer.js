import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="col-xs-12 col-sm-6">
                    {/* <%= link_to "This isn't enough, I need more", root_path , :class => 'next-quote' %> */}
                </div>
                <br /> <br />
                <div className="col-xs-12 footer-blurb">
                    Proudly hacked in Denver, CO by <a href="https://github.com/zenkbaries">John Towery</a><br />
                    {/* Want to build your own Splurty Web App - <a href="http://thefirehoseproject.com">Learn how to code here</a> */}
                </div>
            </div>
        </div>
    );
}

export default Footer;
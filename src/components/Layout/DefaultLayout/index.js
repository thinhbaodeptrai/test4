import Header from './Header';
import Footer from './Footer';
import React from 'react';

function DefaultLayout({chilren}) {
    return (
        <div>
            <div className="header">
                <Header/>
            </div>
            <div className="content">{chilren}</div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    );
}

export default DefaultLayout;
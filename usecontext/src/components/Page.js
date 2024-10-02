import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

const Page = ({isDark, setIsDark}) => {
    return (
        <div className='page'>
            <Header />
            <Content />
            <Footer />
        </div>
    );
};

export default Page;
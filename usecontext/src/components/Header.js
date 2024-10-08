import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
    const {isDark} =useContext(ThemeContext)
    return (
        <div>
            <header className='header' style={{backgroundColor:isDark? 'black':'lightgray', color:isDark? 'white':'black',}}>
                <h1>반가워~~가으낭</h1>
            </header>
        </div>
    );
};

export default Header;
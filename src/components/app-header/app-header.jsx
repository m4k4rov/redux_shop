import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import { Link } from 'react-router-dom';

const AppHeader = ({total}) => {

    const addClass = (e) => {
        let headerLink = document.querySelectorAll('.header__link');
        headerLink.forEach(item => {
            item.classList.remove('active');
        });
        e.target.classList.add('active');
    }

    return (
        <header className="header">
            <Link onClick={e => addClass(e)} className="header__link active" to='/'>
                Menu
            </Link>
            <Link onClick={e => addClass(e)} className="header__link" to='cart'>
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {total} $
            </Link>
        </header>
    )
};

export default AppHeader;
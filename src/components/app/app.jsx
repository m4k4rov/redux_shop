import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Background from './food-bg.jpg';

const App = ({cri, items}) => {
    let sum = 0;
    if (items) items.forEach(item => {
        sum = sum + item.price * item.count;
    })
    return (
        <div style={{width: '100%', background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={sum}/>
            <Routes>
                <Route path='/' element={<MainPage/>} />
                <Route path='cart' element={<CartPage/>} />
            </Routes>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect (mapStateToProps) (App);
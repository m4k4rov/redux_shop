import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import { menuLoaded, addToCart } from '../../actions';
import Spinner from '../spinner/spinner';
import * as data from '../../db.json';

import './menu-list.scss';

class MenuList extends Component {

    componentDidMount() {
        /* fetch('http://localhost:3004/menu')
        .then(response => response.json())
        .then(json => this.props.menuLoaded(json) ) */
        this.props.menuLoaded(data.menu);
    }

    render() {
        const {menuItems, loading, addToCart} = this.props;

        return (
            <ul className="menu__list">
                {loading ? <Spinner /> : menuItems.map(menuItem => {
                    return <MenuListItem key={menuItem.id} menuItem={menuItem} onAddToCart={() => addToCart(menuItem.id)} />
                })}
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading
    }
}

const mapDispatchToProps = {menuLoaded, addToCart};

export default connect (mapStateToProps, mapDispatchToProps) (MenuList);
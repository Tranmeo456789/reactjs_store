import React from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import styles from './Cart.module.scss';
import TableCart from './components/TableCart';
import Button from '~/components/Button';
import BreadcrumbCart from './components/BreadcrumbCart';
import CartEmpty from './components/CartEmpty';
const cx = classNames.bind(styles);

function Cart() {
    const cart = useSelector((state) => state.cart.cartItems);
    const cartTotalQuantity = useSelector((state) => state.cart.cartTotalQuantity);

    return (
        <div className={cx('wrapper')}>
            <BreadcrumbCart />
            {cartTotalQuantity > 0 ? <TableCart cart={cart} /> : <CartEmpty />}
            <div className={cx('actions')}>
                <Button to="/thanh-toan" large info>
                    Thanh toán
                </Button>
            </div>
        </div>
    );
}

export default Cart;

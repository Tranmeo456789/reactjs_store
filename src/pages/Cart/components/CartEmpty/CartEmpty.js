import React from 'react';
import classNames from 'classnames/bind';
import styles from './CartEmpty.module.scss';

const cx = classNames.bind(styles);
function CartEmpty() {
    return <div className={cx('wrapper')}>Giỏ hàng trống</div>;
}

export default CartEmpty;

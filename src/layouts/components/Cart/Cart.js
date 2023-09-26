import React from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import ProductItem from '~/components/ProductItem';
import { useState } from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Cart.module.scss';
const cx = classNames.bind(styles);
function Cart() {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const [isHovered, setIsHovered] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);

    const handleMouseOver = () => {
        clearTimeout(timeoutId);
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        const newTimeoutId = setTimeout(() => {
            setIsHovered(false);
        }, 1000);
        setTimeoutId(newTimeoutId);
    };
    const handleClick = () => {
        navigate('/cart');
    };
    return (
        <div>
            <HeadlessTippy
                interactive
                arrow={true}
                visible={isHovered && cartItems.length > 0}
                render={(attrs) => (
                    <div
                        className={cx('search-result')}
                        tabIndex="-1"
                        {...attrs}
                        onMouseOver={handleMouseOver}
                        onMouseLeave={handleMouseLeave}
                    >
                        <PopperWrapper>
                            {cartItems.map((result) => (
                                <ProductItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
            >
                <button
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                    className={cx('wp-icon-cart')}
                >
                    <FontAwesomeIcon className={cx('icon-cart')} icon={faCartShopping} />
                    <span className={cx('badge')}>{cart.cartTotalQuantity}</span>
                </button>
            </HeadlessTippy>
        </div>
    );
}

export default Cart;

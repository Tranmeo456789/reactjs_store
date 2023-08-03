import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import ProductItem from '~/components/ProductItem';
import { useState } from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);
function Cart() {
    const cartResult = [
        {
            id: 10,
            name: 'Ba Kích Tím Dược liệu quý có tác dụng bổ thận, tráng dương',
            thumbnail: 'uploads/images/product/bakich1.png',
            price: '250000',
        },
        {
            id: 11,
            name: 'Táo mèo khô',
            thumbnail: 'uploads/images/product/taomeo1.png',
            price: '95000',
        },
    ];
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

    return (
        <div>
            <HeadlessTippy
                interactive
                arrow={true}
                visible={isHovered && cartResult.length > 0}
                render={(attrs) => (
                    <div
                        className={cx('search-result')}
                        tabIndex="-1"
                        {...attrs}
                        onMouseOver={handleMouseOver}
                        onMouseLeave={handleMouseLeave}
                    >
                        <PopperWrapper>
                            {cartResult.map((result) => (
                                <ProductItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
            >
                <button 
                  onMouseOver={handleMouseOver} 
                  onMouseLeave={handleMouseLeave} 
                  className={cx('wp-icon-cart')}
                >
                    <FontAwesomeIcon className={cx('icon-cart')} icon={faCartShopping} />
                    <span className={cx('badge')}>2</span>
                </button>
                
            </HeadlessTippy>
        </div>
    );
}

export default Cart;

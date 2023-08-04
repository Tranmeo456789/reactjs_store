import React from 'react';
import styles from './ListItemY.module.scss';
import ProductItem from '~/components/ProductItem';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';


function ListItem({ title, items, type }) {
    const cx = classNames.bind(styles);
    const chillren = (item) => {
        switch (type) {
            case 'category':
                return <p>{item.name}</p>;
            case 'product':
               return <ProductItem key={item.id} data={item}/>;
            default:
                return null;
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>{title}</div>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <Link to="" className={cx('item')}>
                            {chillren(item)}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListItem;

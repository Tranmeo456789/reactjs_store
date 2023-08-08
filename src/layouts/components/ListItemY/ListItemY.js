import React from 'react';
import styles from './ListItemY.module.scss';
import ProductItem from '~/components/ProductItem';
import TitleList from '~/layouts/components/TitleList';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

function ListItem({ title, items, type }) {
    const cx = classNames.bind(styles);
    const chillren = (item) => {
        switch (type) {
            case 'category':
                return (
                    <Link to="" className={cx('item')}>
                        {item.name}
                    </Link>
                );
            case 'product':
                return (
                    <span className={cx('item')}>
                        <ProductItem key={item.id} data={item}/>
                    </span>
                );
            default:
                return null;
        }
    };
    return (
        <div className={cx('wrapper')}>
            <TitleList type='sidebar' title={title} />
            <ul className={cx('list-item')}>
                {items.map((item) => (
                    <li key={item.id}>{chillren(item)}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListItem;

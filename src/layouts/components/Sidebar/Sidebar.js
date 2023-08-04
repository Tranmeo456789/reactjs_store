import React from 'react';
import styles from './Sidebar.module.scss';
import ListItemY from '~/layouts/components/ListItemY';

import classNames from 'classnames/bind';

function Sidebar() {
    const cx = classNames.bind(styles);
    const cats = [
        {
            id: 1,
            name:'Đồ ngâm rượu'
        },
        {
            id: 1,
            name:'Yến'
        },
        {
            id: 2,
            name:'Nước mắm'
        },
        {
            id: 3,
            name:'Đồ khô'
        },
    ];
    const products = [
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
    return (
        <div className={cx('wrapper')}>
            <ListItemY title='Danh mục sản phẩm' type='category' items={cats} />
            <ListItemY title='Sản phẩm bán chạy' type='product' items={products} />
        </div>
    );
}

export default Sidebar;

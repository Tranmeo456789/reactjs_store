import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import classNames from 'classnames/bind';

import styles from './BreadcrumbCart.module.scss';
const cx = classNames.bind(styles);

function BreadcrumbCart() {
    return (
        <div className={cx('section-detail')}>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
                <Breadcrumb.Item href="/cart" active>
                    Giỏ hàng
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}

export default BreadcrumbCart;

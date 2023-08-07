import React from 'react';
import classNames from 'classnames/bind';
import styles from './ProductInCategory.module.scss';

const cx = classNames.bind(styles);
function ProductInCategory() {
    return <div className={cx('wrapper')}>ProductInCategory</div>;
}

export default ProductInCategory;

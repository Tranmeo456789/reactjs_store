import React from 'react';
import classNames from 'classnames/bind';
import styles from './FeatureProduct.module.scss';

const cx = classNames.bind(styles);
function FeatureProduct() {
    return <div className={cx('wrapper')}>FeatureProduct</div>;
}

export default FeatureProduct;

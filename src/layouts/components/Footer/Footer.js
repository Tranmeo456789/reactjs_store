import React from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

function Footer() {
    const cx = classNames.bind(styles);
    return <div className={cx('wrapper')}>Footer</div>;
}

export default Footer;

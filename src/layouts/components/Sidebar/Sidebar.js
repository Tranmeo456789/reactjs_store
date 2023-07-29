import React from 'react';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

function Sidebar() {
    const cx = classNames.bind(styles);
    return (<div className={ cx('wrapper') }>Sidebar</div>);
}

export default Sidebar;

import React from 'react';
import classNames from 'classnames/bind';
import styles from './TitleList.module.scss';
const cx = classNames.bind(styles);
function TitleList({ title, type }) {
    switch (type) {
        case 'sidebar':
            return <div className={cx('header-sidebar','header')}>{title}</div>;
        case 'content':
            return (
                <div className={cx('wrapper')}>
                    <span className={cx('header-content','header')}>{title}</span>
                </div>
            );
        default:
            return null;
    }
}

export default TitleList;

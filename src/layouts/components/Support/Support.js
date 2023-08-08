import React from 'react';
import classNames from 'classnames/bind';
import styles from './Support.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
const items = [
    {
        id: 1,
        title: 'Miễn phí vận chuyển',
        desc:'Tới tận tay khách hàng',
        thumbnail: 'images/icon-1.png',
    },
    {
        id: 2,
        title: 'Tư vấn 24/7',
        desc:'0983195167',
        thumbnail: 'images/icon-2.png',
    },
    {
        id: 3,
        title: 'Tiết kiệm hơn',
        desc:'Với nhiều ưu đãi cực lớn',
        thumbnail: 'images/icon-3.png',
    },
    {
        id: 4,
        title: 'Đặt hàng online',
        desc:'Thao tác đơn giản',
        thumbnail: 'images/icon-4.png',
    },
];
function Support() {
    return (
        <div className={cx('wrapper')}>
            <ul>
                {items.map((item) => (
                    <li>
                        <div className={cx('wp-avatar')}>
                            <Image className={cx('avatar')} src={item.thumbnail} />
                        </div>
                        <h3 className={cx('title')}>{item.title}</h3>
                        <p className={cx('desc')}>{item.desc}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Support;

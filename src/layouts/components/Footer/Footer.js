import React from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
function Footer() {
    const cx = classNames.bind(styles);
    const infoStore = [
        {
            id: 1,
            content: '208-NguyễnChíThanh-CamRanh-KhánhHòa',
        },
        {
            id: 2,
            content: '0983195167',
        },
        {
            id: 3,
            content: 'storethuc@gmail.com',
        },
    ];
    const poicyStore = [
        {
            id: 1,
            content: 'Về chúng tôi',
        },
        {
            id: 2,
            content: 'Chính sách đổi trả',
        },
        {
            id: 3,
            content: 'Chính sách hội viên',
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('block')}>
                    <h3 className={cx('title')}>STORE THUC</h3>
                    <p className={cx('desc')}>
                        Cửa hàng luôn cung cấp luôn là sản phẩm chính hãng có thông tin rõ ràng, chính sách ưu đãi cực
                        lớn cho khách hàng có thẻ thành viên.
                    </p>
                    <div className={cx('payment')}>
                        <div className={cx('thumb')}>
                            <Image src="images/img-foot.png" />
                        </div>
                    </div>
                </div>
                <div className={cx('block')}>
                    <h3 className={cx('title')}>Thông tin cửa hàng</h3>
                    <ul className={cx('list-item')}>
                        {infoStore.map((item) => (
                            <li key={item.id}>
                                <p className={cx('desc')}>{item.content}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={cx('block')}>
                    <h3 className={cx('title')}>Chính sách mua hàng</h3>
                    <ul className={cx('list-item')}>
                        {poicyStore.map((item) => (
                            <li key={item.id}>
                                <Link className={cx('desc')}>{item.content}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={cx('block')}>
                    <h3 className={cx('title')}>Bảng tin</h3>
                    <p className={cx('desc')}>Đăng ký với chung tôi để nhận được thông tin ưu đãi sớm nhất</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;

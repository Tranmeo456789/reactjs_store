import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import config from '~/config';
import styles from './Header.module.scss';
import Image from '~/components/Image';
import Search from '~/layouts/components/Search';
import Cart from '~/layouts/components/Cart';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div>
            <header>
                <div className={cx('header-top')}>
                    <span className={cx('circle-ripple')}></span>
                    <p lang="en">Kết nối mua sắm online</p>
                </div>
                <div className={cx('wrapper')}>
                    <div className={cx('inner')}>
                        <ul className='d-flex'>
                            <li>
                                <Link to={config.routes.home} className={cx('item-menu')}>
                                    Trang chủ
                                </Link>
                            </li>
                            <li>
                                <Link to={config.routes.product} className={cx('item-menu')}>
                                    Sản phẩm
                                </Link>
                            </li>
                            <li>
                                <Link to={config.routes.new} className={cx('item-menu')}>
                                    Tin tức
                                </Link>
                            </li>
                        </ul>
                        <ul className='d-flex'>
                            <li>
                                <Link to="" className={cx('item-menu')}>
                                    Đăng ký
                                </Link>
                            </li>
                            <li className={cx('item-menu')}>|</li>
                            <li>
                                <Link to="" className={cx('item-menu')}>
                                    Đăng nhập
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('inner')}>
                        <Link to={config.routes.home} className={cx('logo-link')}>
                            <Image src='images/logo-moi.png' alt="store-thuc" />
                        </Link>
                        <Search />
                        <div className={cx('actions')}>
                            <Cart />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;

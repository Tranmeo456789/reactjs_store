import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import config from '~/config';
import images from '~/assets/images';
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
                    <div class="d-flex align-items-center">
                        <span className={cx('circle-ripple')}></span>
                    </div>
                    <p lang="en">Kết nối mua sắm online</p>
                </div>
                <div className={cx('wrapper')}>
                    <div className={cx('inner')}>
                        <Link to={config.routes.home} className={cx('logo-link')}>
                            <Image src={images.logo} alt="store-thuc" />
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

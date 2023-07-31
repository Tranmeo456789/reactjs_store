import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import config from '~/config';
import images from '~/assets/images';
import styles from './Header.module.scss';
import Image from '~/components/Image';
import Search from '~/layouts/components/Search';
import Button from '~/components/Button';
import { CartIcon } from '~/components/Icons';
const cx = classNames.bind(styles);

function Header() {
    return (
        <div>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <Image src={images.logo} alt="store-thuc" />
                    </Link>
                    <Search />

                    <div className={cx('actions')}>
                        <>
                            
                            <CartIcon/>
                        </>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;

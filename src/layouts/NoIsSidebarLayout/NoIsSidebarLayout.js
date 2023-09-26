import classNames from 'classnames/bind';

import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import styles from './NoIsSidebarLayout.module.scss';

function NoIsSidebarLayout({ children }) {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>{children}</div>
            <Footer />
        </div>
    );
}
export default NoIsSidebarLayout;

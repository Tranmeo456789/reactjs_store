import React from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Carousel from '~/layouts/components/Carousel';
import Support from '~/layouts/components/Support';
import FeatureProduct from '~/layouts/components/FeatureProduct';
import ProductInCategory from '~/layouts/components/ProductInCategory';
import TitleList from '~/layouts/components/TitleList';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <Carousel />
            <Support />
            <TitleList type='content' title='Sản phẩm nổi bật' />
            <FeatureProduct />
            <ProductInCategory />
        </div>
    );
}

export default Home;

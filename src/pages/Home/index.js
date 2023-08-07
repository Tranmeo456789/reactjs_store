import React from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Carousel from '~/layouts/components/Carousel';
import Support from '~/layouts/components/Support';
import FeatureProduct from '~/layouts/components/FeatureProduct';
import ProductInCategory from '~/layouts/components/ProductInCategory';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <Carousel/>
            <Support/>
            <FeatureProduct/>
            <ProductInCategory/>
            <ProductInCategory/>
        </div>
    );
}

export default Home;

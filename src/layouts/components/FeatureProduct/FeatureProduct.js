import React from 'react';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './FeatureProduct.module.scss';
import * as productService from '~/services/productService';
import ProductItem from '~/components/ProductItem';

const cx = classNames.bind(styles);
const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 4,
    swipeToSlide: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 200,
};
function FeatureProduct() {
    const [productFeature, setproductFeature] = useState([]);
    useEffect(() => {
        const fetchApiProduct = async () => {
            const result = await productService.productFeature();
            setproductFeature(result);
        };
        fetchApiProduct();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div>
                <Slider {...settings}>
                    {productFeature.map((item) => (
                        <div key={item.id}>
                            <ProductItem key={item.id} data={item} type="content" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default FeatureProduct;

import React from 'react';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import ReactCarousel from 'react-elastic-carousel';

import styles from './FeatureProduct.module.scss';
import * as productService from '~/services/productService';
import ProductItem from '~/components/ProductItem';

const cx = classNames.bind(styles);
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
            <ul>
                <ReactCarousel
                    itemsToShow={4}
                    showArrows={true}
                    enableMouseSwipe={true}
                    enableAutoPlay={true}
                    autoPlaySpeed={500}
                    enableTilt={true}
                    pagination={false}
                >
                    {productFeature.map((item) => (
                        <li>
                            <ProductItem key={item.id} data={item} type="content" />
                        </li>
                    ))}
                </ReactCarousel>
            </ul>
        </div>
    );
}

export default FeatureProduct;

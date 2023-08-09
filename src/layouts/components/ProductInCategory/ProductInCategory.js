import React from 'react';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductInCategory.module.scss';
import * as productService from '~/services/productService';
import ProductItem from '~/components/ProductItem';
import TitleList from '~/layouts/components/TitleList';

const cx = classNames.bind(styles);
function ProductInCategory({ product }) {
    const [catIsProduct, setcatIsProduct] = useState([]);
    useEffect(() => {
        const fetchApiProduct = async () => {
            const result = await productService.CatIsProduct();
            setcatIsProduct(result);
        };
        fetchApiProduct();
    }, []);
    return (
        <>
            {catIsProduct.map((productInCategory) => (
                <div className={cx('wrapper')} key={productInCategory.id} >
                    <TitleList type="content" title={productInCategory.name} />
                    <ul className={cx('list-item','clearfix')}>
                        {productInCategory['product'].map((item) => (
                            <li key={item.id}>
                                <ProductItem data={item} type="content" />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
}

export default ProductInCategory;

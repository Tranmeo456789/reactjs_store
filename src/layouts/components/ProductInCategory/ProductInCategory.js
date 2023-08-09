import React from 'react';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductInCategory.module.scss';
import * as productService from '~/services/productService';
import ProductItem from '~/components/ProductItem';
import TitleList from '~/layouts/components/TitleList';

const cx = classNames.bind(styles);
function ProductInCategory({ product }) {
    const [productInCategory, setproductInCategory] = useState([]);
    useEffect(() => {
        const fetchApiProduct = async () => {
            const result = await productService.productInCategory();
            setproductInCategory(result);
        };
        fetchApiProduct();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <TitleList type="content" title="danh muc" />
            <ul className={cx('list-item')}>
                {productInCategory.map((item) => (
                    <li>
                        <ProductItem key={item.id} data={item} type="content" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductInCategory;

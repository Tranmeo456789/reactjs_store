import React from 'react';
import { useEffect, useState } from 'react';
import * as categoryService from '~/services/categoryService';
import * as productService from '~/services/productService';
import styles from './Sidebar.module.scss';
import ListItemY from '~/layouts/components/ListItemY';
import Image from '~/components/Image';
import classNames from 'classnames/bind';

function Sidebar() {
    const cx = classNames.bind(styles);
    const imgBanner = [
        {
            id: 1,
            src: 'images/banner_doc3.png',
        },
        {
            id: 2,
            src: 'images/banner.png',
        },
    ];
    const [cats, setcats] = useState([]);
    const [productSelling, setproductSelling] = useState([]);
    useEffect(() => {
        const fetchApiCat = async () => {
            const result = await categoryService.category();
            setcats(result);
        };
        fetchApiCat();
    }, []);
    useEffect(() => {
        const fetchApiProduct = async () => {
            const result = await productService.productSelling();
            setproductSelling(result);
        };
        fetchApiProduct();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <ListItemY title="Danh mục sản phẩm" type="category" items={cats} />
            <ListItemY title="Sản phẩm bán chạy" type="product" items={productSelling} />
            <div className={cx('wp-banner')}>
                <ul>
                    {imgBanner.map((item) => (
                        <li key={item.id}>
                            <div>
                                <Image src={item.src} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;

import React from 'react';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './Carousel.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
const items = [
    {
        id: 1,
        thumbnail: 'uploads/images/slider/banner4.png',
    },
    {
        id: 2,
        thumbnail: 'uploads/images/slider/banner3.png',
    },
    {
        id: 3,
        thumbnail: 'uploads/images/slider/banner2.png',
    },
    {
        id: 4,
        thumbnail: 'uploads/images/slider/banner1.png',
    },
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};
function Carousel() {
    return (
        <div className={cx('wrapper')}>
            <Slider {...settings}>
                {items.map((item) => (
                    <div key={item.id}>
                        <Image className={cx('avatar')} src={item.thumbnail} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel;

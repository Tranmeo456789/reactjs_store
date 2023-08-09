import React from 'react';
import classNames from 'classnames/bind';
import ReactCarousel from 'react-elastic-carousel';

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

function Carousel() {
    return (
        <div className={cx('wrapper')}>
            <ReactCarousel itemsToShow={1} showArrows={false} enableMouseSwipe={true} enableAutoPlay={true} autoPlaySpeed={500} enableTilt={true} initialActiveIndex={0}>
                {items.map((item) => (
                    <div key={item.id}>
                        <Image className={cx('avatar')} src={item.thumbnail} />
                    </div>
                ))}
            </ReactCarousel>
        </div>
    );
}

export default Carousel;

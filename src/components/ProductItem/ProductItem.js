import PropTypes from 'prop-types';
//import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';

import Image from '~/components/Image';
import styles from './ProductItem.module.scss';
import { addToCart, getTotals } from '~/slices/cartSlice';
import FormatMoney from '~/components/FormatMoney';

const cx = classNames.bind(styles);

function ProductItem({ data, type = 'normal' }) {
    const dispatch = useDispatch();
    const handleAddToCart = (event, data) => {
        event.preventDefault();
        dispatch(addToCart(data));
        dispatch(getTotals());
    };
    const component = (data) => {
        const slug = data.id;
        const srcImage = data.thumbnail;
        const name = data.name;
        const price = data.price;
        const unit = data.unit_product ? data.unit_product.name : '';
        switch (type) {
            case 'normal':
                return (
                    <Link to={`/${slug}`} className={cx('wrapper')}>
                        <div>
                            <Image className={cx('avatar')} src={srcImage} alt={name} />
                        </div>
                        <div className={cx('info')}>
                            <h4 className={cx('name')}>
                                <p>{name}</p>
                            </h4>
                            <span className={cx('price')}>
                                <span>
                                    <FormatMoney value={price} />
                                </span>
                                <sup>đ</sup>
                                <span className={cx('space-unit')}>/</span>
                                <span>{unit}</span>
                            </span>
                        </div>
                    </Link>
                );
            case 'content':
                return (
                    <div className="position-relative">
                        <Link to={`/${slug}`} className={cx('wrapper-content')}>
                            <div className={cx('height-avatar')}>
                                <div className={cx('wp-avatar')}>
                                    <Image className={cx('avatar-content')} src={srcImage} alt={name} />
                                </div>
                            </div>
                            <div className={cx('info-content')}>
                                <h4 className={cx('name-content')}>
                                    <p>{name}</p>
                                </h4>
                                <div className={cx('price-content')}>
                                    <span>
                                        <FormatMoney value={price} />
                                    </span>
                                    <small>
                                        <sup>đ</sup>
                                    </small>
                                    <span className={cx('space-unit')}>/</span>
                                    <span>{unit}</span>
                                </div>
                                <div className={cx('action')}>
                                    <button onClick={(e) => handleAddToCart(e, data)}>Thêm giỏ hàng</button>
                                </div>
                            </div>
                        </Link>
                    </div>
                );
            default:
                return null;
        }
    };
    return <>{component(data)}</>;
}

ProductItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default ProductItem;

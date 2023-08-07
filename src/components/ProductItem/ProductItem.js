
import PropTypes from 'prop-types';
//import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);
function ProductItem({ data }) {
    const srcImage = data.thumbnail;
    return (
        <Link to={`/@${data.id}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={srcImage} alt={data.name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <p>{data.name}</p>
                </h4>
                <span className={cx('price')}>{data.price}đ</span>
            </div>
        </Link>
    );
}

ProductItem.propTypes = {
    data: PropTypes.object.isRequired,
}
export default ProductItem;
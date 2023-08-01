import classNames from 'classnames/bind';

import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);
function Cart() {
  return (
    <FontAwesomeIcon className={cx('icon-cart')} icon={faCartShopping} />
  )
}

export default Cart
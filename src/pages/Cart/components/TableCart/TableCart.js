import React from 'react';
import classNames from 'classnames/bind';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faAdd, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';

import styles from './TableCart.module.scss';
import Image from '~/components/Image';
import FormatMoney from '~/components/FormatMoney';
import { addToCart, getTotals, decreaseCart, removeFromCart } from '~/slices/cartSlice';
const cx = classNames.bind(styles);
function TableCart(props) {
    const cart = props.cart;
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        dispatch(getTotals());
    };
    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
        dispatch(getTotals());
    };
    const handleRemoveToCart = (product) => {
        dispatch(removeFromCart(product));
        dispatch(getTotals());
    };
    return (
        <>
            <div className={cx('head-list-cart')}>
                <Container fluid>
                    <Row>
                        <Col xs={2}>Ảnh sản phẩm</Col>
                        <Col xs={10}>
                            <Row>
                                <Col xs={6}>Tên sản phẩm</Col>
                                <Col xs={6}>
                                    <Row>
                                        <Col xs={10}>
                                            <Row>
                                                <Col xs={5}>Số lượng</Col>
                                                <Col xs={5}>Thành tiền</Col>
                                            </Row>
                                        </Col>
                                        <Col xs={2}>Tác vụ</Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={cx('body-list-cart')}>
                <Container fluid>
                    {cart.map((item) => (
                        <div key={item.id} className={cx('row-product')}>
                            <Row>
                                <Col xs={4} md={2}>
                                    <Link>
                                        <div className={cx('wp-avatar')}>
                                            <Image className={cx('avatar-content')} src={item.thumbnail} />
                                        </div>
                                    </Link>
                                </Col>
                                <Col xs={8} md={10}>
                                    <Row className={cx('height-100')}>
                                        <Col lg={6} md={12} className={cx('center-tab')}>
                                            <Link href="" className={cx('name-product')}>
                                                {item.name}
                                            </Link>
                                            <p>
                                                <span className={cx('title-price')}>Đơn giá: </span>
                                                <span className={cx('price-unit')}>
                                                    <FormatMoney value={item.price} />
                                                    <span> / </span>
                                                    <span>{item.unit_product ? item.unit_product.name : ''}</span>
                                                </span>
                                            </p>
                                        </Col>
                                        <Col lg={6} md={12}>
                                            <Row className={cx('height-100')}>
                                                <Col xs={10}>
                                                    <Row className={cx('height-100')}>
                                                        <Col xs={12} md={5} className={cx('center-tab')}>
                                                            <div className={cx('cart-product-quantity')}>
                                                                <button onClick={() => handleDecreaseCart(item)}>
                                                                    <FontAwesomeIcon
                                                                        className={cx('icon-add-cart')}
                                                                        icon={faMinus}
                                                                    />
                                                                </button>
                                                                <div className={cx('count')}>{item.cartQuantity}</div>
                                                                <button onClick={() => handleAddToCart(item)}>
                                                                    <FontAwesomeIcon
                                                                        className={cx('icon-add-cart')}
                                                                        icon={faAdd}
                                                                    />
                                                                </button>
                                                            </div>
                                                        </Col>
                                                        <Col
                                                            xs={12}
                                                            md={5}
                                                            className={cx('price-product', 'center-tab')}
                                                        >
                                                            <FormatMoney value={item.cartQuantity * item.price} />
                                                            <span>đ</span>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col xs={2} className={cx('center-tab')}>
                                                    <button
                                                        className={cx('btn-remove')}
                                                        onClick={() => handleRemoveToCart(item)}
                                                    >
                                                        <FontAwesomeIcon
                                                            className={cx('icon-remove-item-cart')}
                                                            icon={faTrash}
                                                        />
                                                    </button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    ))}
                </Container>
            </div>
        </>
    );
}

export default TableCart;

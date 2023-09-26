//import classNames from 'classnames/bind';
import numeral from 'numeral';

//import styles from './FormatMoney.module.scss';

//const cx = classNames.bind(styles);
numeral.register('locale', 'custom', {
    delimiters: {
        thousands: '.',
        decimal: ',',
    },
});
numeral.locale('custom');
function FormatMoney(props) {
    const value = Number(props.value);
    return <span>{numeral(value).format('0,0')}</span>;
}

export default FormatMoney;

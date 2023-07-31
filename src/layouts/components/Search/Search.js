import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';

import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('search')}>
            <input placeholder="Nhập nội dung tìm kiếm!" spellCheck={false} />

            <button className={cx('clear')}>
                <FontAwesomeIcon icon={faCircleXmark} />
            </button>

            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

            <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                <SearchIcon />
            </button>
        </div>
    );
}

export default Search;

import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Actions.module.scss';
import Profile from './Profile';

const cx = classNames.bind(styles);

function Actions() {
    const isUser = true;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('action__item')}>
                <i className={cx('fa-light', 'fa-medal')}></i>
            </div>

            <div className={cx('action__item')}>
                <i className={cx('fa-light', 'fa-globe')}></i>
            </div>

            {isUser ? (
                <Profile />
            ) : (
                <div className={cx('auth__btn')}>
                    <Link to='/login'>
                        <span className={cx('auth__btn-login')}>Sign in</span>
                    </Link>

                    <Link to='/register'>
                        <button className={cx('auth__btn-register')}>
                            Sign up
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Actions;

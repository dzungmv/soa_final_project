import classNames from 'classnames/bind';
import styles from './SignIn.module.scss';
import { Link } from 'react-router-dom';

import login from '~/assets/images/login.jpg';

const cx = classNames.bind(styles);

function SignIn() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('image')}>
                    <img
                        className={cx('image__action')}
                        src={login}
                        alt='login'
                    />
                </div>
                <div className={cx('form')}>
                    <div className={cx('form__container')}>
                        <h3 className={cx('form__title')}>Find your account</h3>
                        <div className={cx('description')}>
                            <span>
                                Please enter your email address to search for
                                your account. We will send your code in your
                                email address. Please check your email.
                            </span>
                        </div>
                        <input
                            className={cx('form-control')}
                            type='text'
                            placeholder='Email'
                        />

                        <button className={cx('form-control', 'form-btn')}>
                            Submit
                        </button>

                        <div className={cx('register')}>
                            <Link
                                className={cx('resgister__direct')}
                                to='/login'
                            >
                                Back to login.
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;

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
                        <h3 className={cx('form__title')}>Sign in</h3>
                        <input
                            className={cx('form-control')}
                            type='text'
                            placeholder='Email'
                        />

                        <input
                            className={cx('form-control')}
                            type='password'
                            placeholder='Password'
                        />

                        <button className={cx('form-control', 'form-btn')}>
                            Sign in
                        </button>

                        <Link>
                            <span className={cx('forgot-password')}>
                                Forgot password?
                            </span>
                        </Link>

                        <hr />

                        <div className={cx('form__footer')}>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;

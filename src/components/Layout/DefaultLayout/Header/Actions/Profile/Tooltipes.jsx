import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Tooltipes() {
    return (
        <div className={cx('tooltip')}>
            <div className={cx('tooltip-container')}>
                <div className={cx('tooltip-item', 'profile')}>
                    <Image className={cx('avatar')} src='' />
                    <div className={cx('info')}>
                        <span className={cx('name')}>jungjung261</span>
                        <span className={cx('id')}>
                            ID:
                            <span className={cx('id__name')}>jungjung261</span>
                        </span>
                    </div>
                </div>

                <div className={cx('tooltip-item')}>
                    <i className={cx('fa-regular', 'fa-sack-dollar')}></i>
                    <span className={cx('tooltip-item__label')}>Withdraw</span>
                </div>

                <div className={cx('tooltip-item')}>
                    <i className={cx('fa-regular', 'fa-credit-card')}></i>
                    <span className={cx('tooltip-item__label')}>Buy card</span>
                </div>

                <div className={cx('tooltip-item')}>
                    <i className={cx('fa-regular', 'fa-user-group')}></i>
                    <span className={cx('tooltip-item__label')}>
                        Follower list
                    </span>
                </div>

                <div className={cx('tooltip-item')}>
                    <i className={cx('fa-regular', 'fa-gear')}></i>
                    <span className={cx('tooltip-item__label')}>
                        Account settings
                    </span>
                </div>

                <hr />
                <Link to='/login'>
                    <div className={cx('tooltip-item')}>
                        <i
                            className={cx(
                                'fa-regular',
                                'fa-right-from-bracket'
                            )}
                        ></i>
                        <span className={cx('tooltip-item__label')}>
                            Log out
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Tooltipes;

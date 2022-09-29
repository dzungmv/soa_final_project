import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
import rose_cover from '~/assets/images/fake_data/rose_cover.jpg';
import rose_avatar from '~/assets/images/fake_data/rose.jpg';
import lol from '~/assets/icons/lol.jpg';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header__container')}>
                    <div className={cx('cover__photo')}>
                        <img src={rose_cover} alt='' />
                    </div>
                    <div className={cx('avatar')}>
                        <div className={cx('avatar__image')}>
                            <img src={rose_avatar} alt='' />
                        </div>
                    </div>

                    <div className={cx('info')}>
                        <div className={cx('info__left')}>
                            <div className={cx('name')}>
                                <span>JungJung</span>
                                {/* <div className={cx('follow-btn')}>Follow</div> */}
                            </div>
                            <div className={cx('game__play')}>
                                <div className={cx('game__play-image')}>
                                    <img src={lol} alt='' />
                                </div>
                            </div>
                            <div className={cx('achie')}>
                                <div className={cx('achie__item')}>
                                    <span>Follower</span>
                                    <p>175 people</p>
                                </div>

                                <div className={cx('achie__item')}>
                                    <span>Has been active</span>
                                    <p>120 hour</p>
                                </div>

                                <div className={cx('achie__item')}>
                                    <span>Completion rate</span>
                                    <p>100%</p>
                                </div>
                            </div>
                        </div>

                        <div className={cx('info__right')}>
                            <div className={cx('info__price')}>
                                Price: <span>$100</span>
                            </div>
                            <div className={cx('info__rating')}>
                                <i className={cx('fa-solid', 'fa-star')}></i>
                                <i className={cx('fa-solid', 'fa-star')}></i>
                                <i className={cx('fa-solid', 'fa-star')}></i>
                                <i className={cx('fa-solid', 'fa-star')}></i>
                                <i className={cx('fa-solid', 'fa-star')}></i>
                                <span>(43 ratings)</span>
                            </div>
                            <div className={cx('info__action')}>
                                <div className={cx('info__action-btn')}>
                                    <i
                                        className={cx(
                                            'fa-solid',
                                            'fa-rectangle-history-circle-user'
                                        )}
                                    ></i>
                                    Rent
                                </div>
                                <div className={cx('info__action-btn')}>
                                    <i
                                        className={cx(
                                            'fa-brands',
                                            'fa-facebook-messenger'
                                        )}
                                    ></i>
                                    Message
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;

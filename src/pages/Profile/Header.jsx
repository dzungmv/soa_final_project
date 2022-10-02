import classNames from 'classnames/bind';

import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function Header({ info_data, exeScrollRating }) {
    return (
        <div className={cx('header')}>
            <div className={cx('header__container')}>
                <div className={cx('cover__photo')}>
                    <img src={info_data.coverImage} alt='' />
                </div>
                <div className={cx('avatar')}>
                    <div className={cx('avatar__image')}>
                        <img src={info_data.avatar} alt='' />
                    </div>
                </div>

                <div className={cx('info')}>
                    <div className={cx('info__left')}>
                        <div className={cx('name')}>
                            <span>{info_data.name}</span>
                            {/* <div className={cx('follow-btn')}>Follow</div> */}
                        </div>
                        <div className={cx('game__play')}>
                            {info_data.gamePlay.map((data, index) => {
                                return index < 5 ? (
                                    <img key={index} src={data} alt='' />
                                ) : index === 5 ? (
                                    <div
                                        key={index}
                                        className={cx('game__play-image')}
                                        style={{
                                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${data})`,
                                        }}
                                    >
                                        <i
                                            className={cx(
                                                'fa-regular',
                                                'fa-ellipsis'
                                            )}
                                        ></i>
                                    </div>
                                ) : null;
                            })}
                        </div>
                        <div className={cx('achie')}>
                            <div className={cx('achie__item')}>
                                <span>Follower</span>
                                <p>{info_data.follower}</p>
                            </div>

                            <div className={cx('achie__item')}>
                                <span>Has been active</span>
                                <p>{info_data.hasbeenActive} hours</p>
                            </div>

                            <div className={cx('achie__item')}>
                                <span>Completion rate</span>
                                <p>{info_data.competitionRate}%</p>
                            </div>
                        </div>
                    </div>

                    <div className={cx('info__right')}>
                        <div className={cx('info__price')}>
                            Price: <span>${info_data.price}</span>
                        </div>
                        <div className={cx('info__rating')}>
                            <i className={cx('fa-solid', 'fa-star')}></i>
                            <i className={cx('fa-solid', 'fa-star')}></i>
                            <i className={cx('fa-solid', 'fa-star')}></i>
                            <i className={cx('fa-solid', 'fa-star')}></i>
                            <i className={cx('fa-solid', 'fa-star')}></i>
                            <span>({info_data.ratings} ratings)</span>
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
                <hr />
                <div className={cx('navigation')}>
                    <div className={cx('navigation__item')}>Introduction</div>
                    <div
                        className={cx('navigation__item')}
                        onClick={exeScrollRating}
                    >
                        Rating
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

import { useState } from 'react';

import { useClampText } from 'use-clamp-text';
import classNames from 'classnames/bind';

import styles from './Body.module.scss';

const cx = classNames.bind(styles);

function Body({ info_data, ratingRef }) {
    //* Truncate text
    const _text = `💬 Hi mn. Tôi tên Chi 🤍`;
    const [text] = useState(_text);
    const [expanded, setExpanded] = useState(false);
    const [ref, { noClamp, clampedText, key }] = useClampText({
        text,
        lines: 6,
        ellipsis: 100,
        expanded,
    });
    const toggleExpanded = () => setExpanded((state) => !state);

    //* Scroll to Rating

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('container__box', 'intro')}>
                    <div className={cx('title')}>Intro</div>
                    <div className={cx('intro__bio')}>
                        <span>Rose love jungjung</span>
                    </div>
                    <hr />
                    <div className={cx('intro__birtday')}>
                        <i className={cx('fa-thin', 'fa-cake-candles')}></i>
                        <div className={cx('info')}>
                            <p>February 11</p>
                            <span>Birthday</span>
                        </div>
                    </div>
                </div>

                <div className={cx('content')}>
                    <div className={cx('container__box', 'info')}>
                        <div className={cx('info__title')}>
                            <span className={cx('title')}>Infomation</span>
                            <div className={cx('info__action')}>
                                <i
                                    className={cx('fa-regular', 'fa-ellipsis')}
                                ></i>
                            </div>
                        </div>
                        <div
                            ref={ref}
                            key={key}
                            className={cx('info__caption')}
                        >
                            {clampedText}
                            {text && (
                                <span
                                    className={cx('btn-toggle')}
                                    onClick={toggleExpanded}
                                >
                                    {noClamp || `...See more`}
                                </span>
                            )}
                        </div>
                        <div className={cx('info__gallery')}>
                            {info_data.gallery_image.map((data, index) => {
                                const count =
                                    info_data.gallery_image.length - 4;
                                if (info_data.gallery_image.length === 1) {
                                    return (
                                        <div
                                            key={index}
                                            className={cx('image__1')}
                                        >
                                            <img src={data} alt='' />
                                        </div>
                                    );
                                } else if (
                                    info_data.gallery_image.length === 2
                                ) {
                                    return (
                                        <div
                                            key={index}
                                            className={cx('image__2')}
                                        >
                                            <img src={data} alt='' />
                                        </div>
                                    );
                                } else if (
                                    info_data.gallery_image.length === 3
                                ) {
                                    return (
                                        <div
                                            key={index}
                                            className={cx('image__3')}
                                        >
                                            <img src={data} alt='' />
                                        </div>
                                    );
                                } else if (index < 3) {
                                    return (
                                        <img key={index} src={data} alt='' />
                                    );
                                } else if (index === 3) {
                                    return (
                                        <div
                                            key={index}
                                            className={cx('image__more')}
                                            style={{
                                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${data})`,
                                            }}
                                        >
                                            <span
                                                className={cx('image__count')}
                                            >
                                                +{count}
                                            </span>
                                        </div>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        </div>
                    </div>

                    <div
                        ref={ratingRef}
                        className={cx('container__box', 'info__rating')}
                    >
                        <div className={cx('title')}>Rating</div>
                        <div className={cx('rating')}>
                            <div className={cx('rating__item')}>
                                <div className={cx('rating__item--avatar')}>
                                    <img src={info_data.avatar} alt='' />
                                </div>
                                <div className={cx('rating__item--content')}>
                                    <div className={cx('user')}>
                                        <div className={cx('user__name')}>
                                            Lisa
                                        </div>
                                        <div className={cx('user__comment')}>
                                            In publishing and graphic design,
                                            Lorem ipsum is a placeholder text
                                            commonly used to demonstrate the
                                            visual form of a document or a
                                            typeface without relying on
                                            meaningful content. Lorem ipsum may
                                            be used as a placeholder before
                                            final copy is available.
                                        </div>
                                    </div>

                                    <div className={cx('ratings')}>
                                        <div className={cx('ratings__star')}>
                                            <i
                                                className={cx(
                                                    'fa-solid',
                                                    'fa-star'
                                                )}
                                            ></i>
                                            <i
                                                className={cx(
                                                    'fa-solid',
                                                    'fa-star'
                                                )}
                                            ></i>
                                            <i
                                                className={cx(
                                                    'fa-solid',
                                                    'fa-star'
                                                )}
                                            ></i>
                                            <i
                                                className={cx(
                                                    'fa-solid',
                                                    'fa-star'
                                                )}
                                            ></i>
                                            <i
                                                className={cx(
                                                    'fa-solid',
                                                    'fa-star'
                                                )}
                                            ></i>
                                        </div>

                                        <div className={cx('rating__time')}>
                                            8/3/2022, 6:14:45 PM
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;

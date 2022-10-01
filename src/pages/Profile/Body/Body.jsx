import classNames from 'classnames/bind';

import styles from './Body.module.scss';

const cx = classNames.bind(styles);

function Body({ info_data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('intro')}>
                    <div className={cx('intro__title')}>Intro</div>
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
                    <div className={cx('info')}>
                        <div className={cx('info__title')}>Information</div>
                        <div className={cx('info__caption')}>
                            Lorem Ipsum is simply dummy text of the printing
                        </div>
                        <div className={cx('info__gallery')}>
                            {info_data.gallery_image.map((data, index) => {
                                const count =
                                    info_data.gallery_image.length - 4;
                                if (info_data.gallery_image.length === 1) {
                                    return (
                                        <div className={cx('image__1')}>
                                            <img src={data} alt='' />
                                        </div>
                                    );
                                } else if (
                                    info_data.gallery_image.length === 2
                                ) {
                                    return (
                                        <div className={cx('image__2')}>
                                            <img src={data} alt='' />
                                        </div>
                                    );
                                } else if (
                                    info_data.gallery_image.length === 3
                                ) {
                                    return (
                                        <div className={cx('image__3')}>
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

                                // return index < 4 ? (
                                //     <div className={cx('img__4')}>
                                //         <img key={index} src={data} alt='' />
                                //     </div>
                                // ) : index === 1 ? (
                                //     <div key={index} className={cx('img__1')}>
                                //         <img src={data} alt='' />
                                //     </div>
                                // ) : null;
                            })}
                        </div>
                        {/* <div className={cx('info__gallery--item')}></div>
                        <div className={cx('info__gallery--item')}></div>
                        <div className={cx('info__gallery--item')}></div>
                        <div className={cx('info__gallery--item')}></div>  */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;

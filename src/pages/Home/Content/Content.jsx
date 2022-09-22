import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import styles from './Content.module.scss';
import slide1 from '~/assets/images/slide1.jpeg';
import slide2 from '~/assets/images/slide2.jpg';

const cx = classNames.bind(styles);
const slides = [
    { id: 1, image: slide1 },
    {
        id: 2,
        image: slide2,
    },
];

function Content() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider')}>
                <Swiper
                    cssMode={true}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: true,
                    }}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    mousewheel={true}
                    keyboard={true}
                    loop={true}
                    className={cx('swiper-content')}
                >
                    {slides.map((data) => {
                        return (
                            <SwiperSlide key={data.id}>
                                <img src={data.image} alt='' />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}

export default Content;

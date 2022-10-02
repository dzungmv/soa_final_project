import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
import Header from './Header';
import BodyContent from './Body';
import rose_cover from '~/assets/images/fake_data/rose_cover.jpg';
import rose_avatar from '~/assets/images/fake_data/rose.jpg';
import lol from '~/assets/icons/lol.jpg';

const cx = classNames.bind(styles);

const fake_data = {
    id: 1,
    name: 'Rose',
    avatar: rose_avatar,
    coverImage: rose_cover,
    gamePlay: [lol, lol, lol, lol, lol, lol, lol, lol, lol],
    follower: 120,
    hasbeenActive: 90,
    competitionRate: 90,
    price: 200,
    ratings: 12,
    gallery_image: [
        rose_avatar,
        rose_avatar,
        rose_avatar,
        // rose_avatar,
        // rose_avatar,
        // rose_avatar,
        // rose_avatar,
    ],
};

const name = fake_data.name;
const useMouseEffect = (state) => useEffect(state, [state]);

function Profile() {
    //* Scroll to Rating
    const ratingRef = useRef(null);
    const exeScrollRating = () => ratingRef.current.scrollIntoView();
    useMouseEffect(exeScrollRating);

    useEffect(() => {
        document.title = `${name}`;
    });
    return (
        <div className={cx('wrapper')}>
            <Header info_data={fake_data} exeScrollRating={exeScrollRating} />
            <BodyContent info_data={fake_data} ratingRef={ratingRef} />
        </div>
    );
}

export default Profile;

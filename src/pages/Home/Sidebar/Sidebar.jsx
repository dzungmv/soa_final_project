import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import lolIcon from '~/assets/icons/lol.jpg';
import tfIcon from '~/assets/icons/teamfight.jpg';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const gameList = [
    {
        id: 1,
        name: 'League of Legends',
        image: lolIcon,
    },

    {
        id: 2,
        name: 'Teamfight Tactics',
        image: tfIcon,
    },
];

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('title')}>Game list</span>
            {gameList.map((data) => {
                return (
                    <div key={data.id} className={cx('list-item')}>
                        <Image className={cx('item__icon')} src={data.image} />
                        <span className={cx('item__label')}>{data.name}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default Sidebar;

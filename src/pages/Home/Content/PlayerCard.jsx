import classNames from 'classnames/bind';

import styles from './Content.module.scss';
import teamFlight from '~/assets/icons/teamfight.jpg';
import lol from '~/assets/icons/lol.jpg';

const cx = classNames.bind(styles);

const __vipPlayer = [
    {
        id: 1,
        name: 'Mina',
        image: teamFlight,
        isOnline: true,
        bio: 'In publishing and graphic design',
        gamePlay: [
            teamFlight,
            teamFlight,
            teamFlight,
            teamFlight,
            lol,
            teamFlight,
            teamFlight,
            teamFlight,
            teamFlight,
        ],
        rating: 4.9,
    },
];

function PlayerCard() {
    return (
        <div className={cx('player')}>
            <span className={cx('player__title')}>VIP PLAYER</span>
            <div className={cx('container')}>
                {__vipPlayer.map((player) => (
                    <div key={player.id} className={cx('card')}>
                        <div className={cx('card__image')}>
                            <img src={player.image} alt='' />
                        </div>
                        <div className={cx('card__info')}>
                            <div className={cx('card__info-name')}>
                                <span>{player.name}</span>
                                <span className={cx('is__active')}>
                                    {player.isOnline ? (
                                        <i
                                            className={cx(
                                                'fa-solid',
                                                'fa-circle'
                                            )}
                                        ></i>
                                    ) : (
                                        <i
                                            style={{ color: 'gray' }}
                                            className={cx(
                                                'fa-solid',
                                                'fa-circle'
                                            )}
                                        ></i>
                                    )}
                                </span>
                            </div>

                            <div className={cx('card__bio')}>
                                <span>{player.bio}</span>
                            </div>

                            <div className={cx('card__footer')}>
                                <div className={cx('game__play')}>
                                    {player.gamePlay.map((data, index) => {
                                        const count =
                                            player.gamePlay.length - 5;
                                        return index < 4 ? (
                                            <img
                                                key={index}
                                                src={data}
                                                alt=''
                                            />
                                        ) : index === 4 ? (
                                            <div
                                                key={index}
                                                className={cx('game__count')}
                                            >
                                                <img src={data} alt='' />
                                                <span className={cx('count')}>
                                                    +{count}
                                                </span>
                                            </div>
                                        ) : null;
                                    })}
                                </div>

                                <div className={cx('rating')}>
                                    <i
                                        className={cx(
                                            'fa-sharp',
                                            'fa-solid',
                                            'fa-star'
                                        )}
                                    ></i>
                                    <span>{player.rating}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlayerCard;

import classNames from 'classnames/bind';

import Image from '~/components/Image';
import styles from './NotificationTT.module.scss';

const cx = classNames.bind(styles);

const notification = [
    {
        id: 1,
        authour: 'System',
        title: 'You have a new message.',
    },
];

function NoticationTT() {
    return (
        <div className={cx('tooltip-container')}>
            <span className={cx('title')}>Notifications</span>
            {notification ? (
                <>
                    {notification.map((noti) => {
                        return (
                            <div key={noti.id} className={cx('tooltip-item')}>
                                <Image
                                    className={cx('tooltip-item__avatar')}
                                    src=''
                                />
                                <div className={cx('content')}>
                                    <span className={cx('tooltip-item__label')}>
                                        {noti.authour}
                                    </span>
                                    <span
                                        className={cx('tooltip-item__label ')}
                                    >
                                        {noti.title}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </>
            ) : (
                <div className={cx('no-notification')}>
                    <span>No notifications</span>
                </div>
            )}
        </div>
    );
}

export default NoticationTT;

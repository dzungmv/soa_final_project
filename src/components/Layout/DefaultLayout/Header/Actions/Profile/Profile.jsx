import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/themes/light.css';

import Image from '~/components/Image';
import styles from './Profile.module.scss';
import Tooltipes from './Tooltipes';
import NoticationTT from './NotificationTT';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper')}>
            <Tippy
                content={<NoticationTT />}
                trigger='click'
                placement='bottom'
                interactive
                arrow={false}
                animation='scale'
                theme='light'
            >
                <div className={cx('action__item')}>
                    <i className={cx('fa-light', 'fa-bell')}></i>
                </div>
            </Tippy>

            <Tippy
                content={<Tooltipes />}
                trigger='click'
                placement='bottom-start'
                interactive
                arrow
                animation='scale'
                theme='light'
            >
                <Image className={cx('avatar')} src='' />
            </Tippy>
        </div>
    );
}

export default Profile;

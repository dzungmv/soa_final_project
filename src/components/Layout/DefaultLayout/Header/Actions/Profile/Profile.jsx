import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/themes/light.css';

import Image from '~/components/Image';
import styles from './Profile.module.scss';
import Tooltipes from './Tooltipes';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper')}>
            {/* <Tooltip
                trigger='click'
                interactive
                position='bottom-start'
                html={<Tooltipes />}
            >
                <Image className={cx('avatar')} src='' />
            </Tooltip> */}

            {/* <Menu items={MENU_ITEMS}>
                <Image className={cx('avatar')} src='' />
            </Menu> */}

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

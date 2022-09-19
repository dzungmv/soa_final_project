import classNames from 'classnames/bind';
import { Tooltip } from 'react-tippy';

import Image from '~/components/Image';
import styles from './Profile.module.scss';
import Tooltipes from './Tooltipes';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper')}>
            <Tooltip
                trigger='click'
                interactive
                position='bottom-start'
                html={<Tooltipes />}
            >
                <Image className={cx('avatar')} src='' />
            </Tooltip>
        </div>
    );
}

export default Profile;

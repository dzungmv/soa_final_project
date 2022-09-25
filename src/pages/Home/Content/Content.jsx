import classNames from 'classnames/bind';

import styles from './Content.module.scss';
import Swipers from './Swipers';
import PlayerCard from './PlayerCard';

const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider')}>
                <Swipers />
            </div>
            <div className={cx('content')}>
                <div className={cx('search')}>
                    <div className={cx('filter')}>
                        <select name='' id='' className={cx('filter__gender')}>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                    </div>

                    <PlayerCard />
                </div>
            </div>
        </div>
    );
}

export default Content;

import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Sidebar from './Sidebar';
import Content from './Content';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('side-bar')}>
                <Sidebar />
            </div>
            <div className={cx('container')}>
                <Content />
            </div>
        </div>
    );
}

export default Home;

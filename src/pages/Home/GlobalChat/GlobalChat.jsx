import { useState } from 'react';
import { COffcanvas, COffcanvasBody } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import Tippy from '@tippyjs/react';

import classNames from 'classnames/bind';
import Image from '~/components/Image';
import fake_data from './chat-data.json';

import styles from './GlobalChat.module.scss';

const cx = classNames.bind(styles);

function GlobalChat() {
    const [visible, setVisible] = useState(false);

    const handleOpen = () => {
        setVisible((prev) => !prev);
    };

    return (
        <div className={cx('wrapper')}>
            <Tippy content='Chats Global' arrow={false} theme={'light'}>
                <div className={cx('btn-click')} onClick={handleOpen}>
                    <div
                        className={cx('fa-brands', 'fa-facebook-messenger')}
                    ></div>
                </div>
            </Tippy>
            <COffcanvas
                placement='start'
                visible={visible}
                onHide={() => setVisible(false)}
            >
                <div className={cx('header')}>
                    <div className={cx('title')}>Chats Global</div>
                    <div
                        className={cx('close-btn')}
                        onClick={() => setVisible(false)}
                    >
                        <i className={cx('fa-regular', 'fa-xmark')}></i>
                    </div>
                </div>
                <COffcanvasBody>
                    <div className={cx('mess')}>
                        {fake_data.map((data) => {
                            return (
                                <div key={data.id} className={cx('mess-item')}>
                                    <div className={cx('info__avatar')}>
                                        <Image src='' />
                                    </div>
                                    <div className={cx('content')}>
                                        <span className={cx('player__name')}>
                                            {data.name}
                                        </span>
                                        : {data.content}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </COffcanvasBody>
            </COffcanvas>
        </div>
    );
}

export default GlobalChat;

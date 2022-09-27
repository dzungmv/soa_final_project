import { useState } from 'react';
import {
    COffcanvas,
    COffcanvasHeader,
    COffcanvasTitle,
    CCloseButton,
    COffcanvasBody,
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import Tippy from '@tippyjs/react';

import classNames from 'classnames/bind';

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
                    <span className={cx('title')}>Title</span>
                </div>
                <COffcanvasBody>
                    Content for the offcanvas goes here. You can place just
                    about any Bootstrap component or custom elements here.
                </COffcanvasBody>
            </COffcanvas>
        </div>
    );
}

export default GlobalChat;

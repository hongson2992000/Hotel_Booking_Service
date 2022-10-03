import classNames from 'classnames';
import { useState } from 'react';
import { CONSTANT } from '../../../util/constant/settingSystem';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import Styles from './Navigation.module.scss'

const Navigation = () => {

    const [isExtend, setExtend] = useState(false);

    const handleOpenNav = () => {
        setExtend(!isExtend)
    }

    return (
        <div className={classNames('d-block d-md-flex hs-bg-dark hs-text-white', Styles.navContainer)}>
            <div className={classNames('row col-12 alight-item-center', Styles.navContent)}>
                {isExtend && <MobileNavigation onClick={handleOpenNav} />}
                <div className={classNames('col-md-4 d-flex', Styles.rightNav)}>
                    <div className={classNames('d-md-none', Styles.btnNav)} onClick={handleOpenNav}>
                        <i className="fa-solid fa-bars hs-text-white" style={{ fontSize: 20 }}></i>
                    </div>
                    <div className={classNames('col-md-4', Styles.logo)}>
                        <img
                            className="logo"
                            src="https://i.ibb.co/kQFB7PG/logo-lagi-8-resize.jpg"
                            alt=""
                            style={{ width: "40px", height: "40px" }}
                        ></img>
                    </div>
                    <div className='col-md-8 hs-pl-16 text-lg'>{CONSTANT.HOTEL_NAME}</div>
                </div>
                <div className='col-10 col-md-8'>
                    <div className={classNames('d-none d-md-flex col-12', Styles.leftNav)}>
                        {
                            CONSTANT.NAV_ITEMS.map((item, idx) => {
                                return (
                                    <div key={idx} className={classNames('text-sm', Styles.navLink)}>
                                        <a href={item.link}>{item.name}</a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
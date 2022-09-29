import classNames from "classnames"
import { CONSTANT } from "../../../util/constant/settingSystem";
import Styles from './OverviewRoom.module.scss'

const OverviewRoom = () => {

    const data = CONSTANT.INTRODUCE;

    return (
        <div className={classNames('col-12', Styles.overviewRoomContainer)} style={{ '--backgroundImage': `url(${'https://i.ibb.co/Tvn99dK/background.jpg'})` }}>
            <div className="col-12 row d-block d-lg-flex hs-py-64">
                <div className={classNames('col-6 hs-px-64 d-none d-lg-block', Styles.leftOverview)}>
                    <div className={Styles.imageMiddle}>
                        <img
                            src="https://i.ibb.co/Csg8Vvy/stick1.jpg"
                            className={classNames('', Styles.overviewRoomImage1)}
                            alt=""
                        ></img>
                    </div>
                    <div className={Styles.image}>
                        <img
                            src="https://i.ibb.co/3Ryrcg8/stick2.jpg"
                            className={Styles.overviewRoomImage2}
                            alt=""
                        ></img>
                    </div>
                    <div className={Styles.imageMiddle}>
                        <img
                            src="https://i.ibb.co/HYfwgxD/stick3.jpg"
                            className={Styles.overviewRoomImage3}
                            alt=""
                        ></img>
                    </div>
                </div>
                <div className={classNames('col-12 col-lg-6', Styles.rightOverview)}>
                    <div className={classNames('hs-py-32', Styles.introduceContainer)}>
                        <div className='text-xl hs-text-grey'>
                            {data.hotel_title}
                        </div>
                        <div className='text-xl hs-text-white hs-py-24'>
                            NHỮNG CĂN PHÒNG XINH ĐẸP, THOÁNG MÁT
                        </div>
                        <hr className={classNames('hs-text-dark-brown hs-mt-8', Styles.hr1)} />
                        <div className={classNames('hs-text-black-grey hs-py-64', Styles.description)}>
                            <p>
                                {data.description}
                            </p>
                        </div>
                        <div className={classNames('')}>
                            <p className="text-lg">
                                <a href="/" className="hs-text-dark-brown">
                                    {data.detail_label}
                                </a>
                            </p>
                        </div>
                        <hr className={classNames('hs-text-dark-brown hs-mt-8', Styles.hr2)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverviewRoom
import SpecComponent from "../../components/spec/spec";
import BuildingSwiper from "../../components/swipers/hero/swiper";
import "../../scss/global.scss";
import "./building.scss";
import { slides, icons } from "../../utils/building";
import { useLayoutEffect } from "react";

const Building: React.FC = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <div className='hero'>
                <div className='contain split-text'>
                    <div className='gradient'></div>
                        <img src='../images/building/1.jpg' className="hero-image" id="heroimage" alt='building' />
                    <h1>Landmark</h1>
                </div>
                <div className='build-split'>
                    <div className='contain build-split'>
                        <h1>building</h1>
                        <div className='blue-box'>
                            <h4>
                                Welcome to One Kingsway, where exceptional
                                office space meets unrivalled prestige. Enjoying
                                a commanding position overlooking Aldwych, it
                                boasts an impressive reimagined reception and a
                                brand new tenant penthouse lounge space.
                            </h4>
                        </div>
                    </div>
                </div>
                <div className='max-width'>
                    <div className='contain max-width'>
                        <BuildingSwiper
                            shadow={false}
                            id={"mid blue-pag"}
                            slides={slides}
                        />
                    </div>
                </div>
                <div className='contain'>
                    <div className='building-sub-header'>
                        <h2>Premium</h2>
                        <h2>specification</h2>
                        <div>
                            <SpecComponent icons={icons} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Building;

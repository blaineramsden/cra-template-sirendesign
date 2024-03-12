import React from "react";

const LocationContent: React.FC = () => {
    return (
        <>
            <div className='contain beige-wrapper'>
                <div className='box beige' style={{width: '90%'}}>
                    <h5 className='header'>
                        <b>London's largest new public space of a decade</b>
                    </h5>
                    <h5>
                        Over two years, Westminster City Council invested £22m
                        into Stand Aldwch, converting it into a tranquil
                        pedestrian-friendly space at the heart of London
                        measuring more than 75,500 sq ft.
                    </h5>
                </div>
            </div>
            <div className='contain gallery-wrapper desktop'>
                <div className='photo-wrapper beige'>
                    <div className='left-wrapper'>
                        <div className='flex-box'>
                            <img
                                src='../images/location/gallery/1.jpg'
                                alt='1'
                                className='img-pad'
                            />
                            <img
                                src='../images/location/gallery/2.jpg'
                                alt='2'
                            />
                        </div>
                        <div>
                            <img
                                src='../images/location/gallery/3.jpg'
                                alt='3'
                                className='img-pad'
                            />
                        </div>
                        <div className="text-wrapper">
                            <h5>
                                <b>London’s entertainment centre</b> <br></br><br></br>One Kingsway
                                is in the heart of the West End’s shopping,
                                entertainment, culinary and cultural
                                district, home to Covent Garden Market and
                                the world renowned Royal Opera House.<br></br><br></br> Chic
                                restaurants serve European cuisines, and the
                                nearby theatres draw crowds for plays and
                                musicals. Nearby Michelin Star restaurants
                                sit side-by-side with a huge range of places
                                for quicker bites.
                            </h5>
                        </div>
                    </div>
                    <div className='right-wrapper'>
                        <img
                            src='../images/location/gallery/4.jpg'
                            alt='4'
                            className='img-pad'
                        />
                        <img src='../images/location/gallery/5.jpg' alt='5' />
                    </div>
                </div>
            </div>
            <div className='loc-mobile'>
                <div>
                    <div className='top-images'>
                        <div>
                            <img
                                src='../images/location/gallery/4.jpg'
                                alt='1'
                            />
                        </div>
                        <div>
                            <img
                                src='../images/location/gallery/2.jpg'
                                alt='2'
                                className='second-image'
                            />
                        </div>
                    </div>
                </div>
                <div className='beige-section'>
                    <div>
                        <img src='../images/location/gallery/3.jpg' style={{paddingRight: '1.5rem'}} alt='3' />
                    </div>
                    <div>
                        <h5>
                            <b>London’s entertainment centre</b> <br></br>
                            <br></br>One Kingsway is in the heart of the West
                            End’s shopping, entertainment, culinary and cultural
                            district, home to Covent Garden Market and the world
                            renowned Royal Opera House.<br></br>
                            <br></br> Chic restaurants serve European cuisines,
                            and the nearby theatres draw crowds for plays and
                            musicals. Nearby Michelin Star restaurants sit
                            side-by-side with a huge range of places for quicker
                            bites.
                        </h5>
                    </div>
                    <div className='bottom-images'>
                        <div>
                            <img
                                src='../images/location/gallery/1.jpg'
                                alt='5'
                            />
                        </div>
                        <div>
                            <img
                                src='../images/location/gallery/5.jpg'
                                alt='5'
                            />
                        </div>
                        <img className="triangle" src="../images/location/triangle.svg" alt="triangle" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LocationContent;

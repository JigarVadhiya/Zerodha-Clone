import React from 'react'

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className="container">
            <div className="row p-5">
                <div className="col-6 p-5">
                    <img src={imageURL} alt="Image" />
                </div>
                <div className="col-2"></div>
                <div className="col-4 p-3 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo} className='text-decoration-none'>Try Demo <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href={learnMore} className='text-decoration-none' style={{ marginLeft: "50px" }} >Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className='mt-4'>
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="Image" /></a>
                        <a href={appStore} style={{ marginLeft: "20px" }}><img src="media/images/appstoreBadge.svg" alt="Image" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
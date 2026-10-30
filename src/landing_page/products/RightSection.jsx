import React from 'react'

function RightSection({ imageURL, productName, productDescription, learnMore }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4 p-3 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={learnMore} className='text-decoration-none'>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <img src={imageURL} alt="Image" />
                </div>
            </div>
        </div>
    );
}

export default RightSection;
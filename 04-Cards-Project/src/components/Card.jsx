const Card = () => {
    return (
        <div className="card">
            <div className="top">
                <img src="https://www.vhv.rs/dpng/d/417-4179580_amazon-logo-png-free-download-searchpng-transparent-png.png" alt="" />
                <button>Save</button>
            </div>
            <div className="center">
                <span>Amazon</span>
                <p>5 days ago</p>
                <h2>Software Developer</h2>
                <div className="tags">
                    <button>Part-Time</button>
                    <button>Fresher</button>
                </div>
            </div>
            <div className="line">
                _____________________________
            </div>
            <div className="bottom">
                <div className="price">
                    <span>$120/hr</span>
                    <p>Mumbai, India</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    )
}


export default Card ;
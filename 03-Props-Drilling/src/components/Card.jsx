const Card = (props) => {
    return (
        <div className="card">
            <img src={props.pfp} alt="" />
            <h3>{props.user},{props.age}</h3>
            <p>
                {props.desc}
            </p>
            <button>View Profile</button>
        </div>
    )
}

export default Card ; 
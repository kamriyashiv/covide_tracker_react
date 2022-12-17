const Card=(props)=>{
    return(
        <>
            <li className="card">
                <p>{props.name}</p>
                <h2>{props.data}</h2>
                <p>{props.subName}</p>
            </li>
        </>
    );
}

export default Card;
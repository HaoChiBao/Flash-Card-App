function GamePage(props) {

    function handleClick(){ window.location.assign(props.route) }

    return (
        <div className="game" >

            <img className="game-img" src={props.img}></img>
            <div className="content">
                <div className="game-title">{props.name}</div>
                <div className="subtext">{props.description}</div>
                <button onClick={handleClick}>Play</button>
            </div>
        </div>
    )

}

export default GamePage
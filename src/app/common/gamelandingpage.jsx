function GamePage(props) {

    return (
        <div className="game" >

            <img className="game-img" src={props.img}></img>
            <div className="content">
                <div className="game-title">{props.name}</div>
                <div className="subtext">{props.description}</div>
                <button to={props.route}>Play</button>
            </div>
        </div>
    )

}

export default GamePage
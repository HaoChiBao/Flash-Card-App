import GamePage from "../common/gamelandingpage";
import { GAME } from "./games";
import './games.css'
import Header from "../common/nav";


export default function Games() {
    const games = GAME.map(game => {
        return (
            <GamePage
                img={game.img}
                name={game.title}
                description={game.description}
                route={game.route}
            />
        )
    })

    return (

        <div>
            <Header />

            <div className="gamer">

                {games}

            </div>
        </div>
    )
}
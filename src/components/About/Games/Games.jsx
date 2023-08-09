import Game from "./Game/Game";

const Games = ({ games }) => {
    return (
        <ul className="games__list">
            {games.map((game) => {
                return (
                    <li key={game.id}>
                        <Game {...game} />
                    </li>
                );
            })}
        </ul>
    );
};

export default Games;

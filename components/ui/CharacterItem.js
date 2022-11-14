import Link from "next/link";

const CharacterItem = (props) => {
    const {character} = props
    return (
        <>
            <Link href={`/characters/${character.char_id}`} className="character-item">
                <div className="character-image">
                    <img src={character.img} alt=""/>
                </div>
                <div className="title">
                    <span className="portrayed">{character.portrayed}</span>
                    <h4>{character.name} </h4>
                    <span className="status">{character.status}</span>
                </div>
            </Link>
        </>
    )
}

export default CharacterItem
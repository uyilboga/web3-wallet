import PropTypes from "prop-types";

const CharacterImage = (props) => {
    const {character} = props
    return (
        <>
            <div className="character-image">
                <img src={character.img} alt={character.name}/>
            </div>
        </>
    )
}

CharacterImage.propTypes = {
    character: {
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
    }
}

export default CharacterImage
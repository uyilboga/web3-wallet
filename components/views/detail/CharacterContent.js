import PropTypes from "prop-types";

const CharacterContent = (props) => {
    const {character} = props
    return (
        <>
            <div className="character-content">
                <h3>{character.name}</h3>

                <div className="item">
                    <span className="name">Birthday: </span>
                    <span className="value">{ character.birthday } </span>
                </div>

                <div className="item">
                    <span className="name">Nick Name: </span>
                    <span className="value">{ character.nickname } </span>
                </div>

                <div className="item">
                    <span className="name">Portrayed By: </span>
                    <span className="value">{ character.portrayed } </span>
                </div>

                <div className="item">
                    <span className="name">Category: </span>
                    <span className="value">{ character.category } </span>
                </div>

                <div className="item">
                    <span className="name">Status: </span>
                    <span className="value">{ character.status } </span>
                </div>

                <div className="item">
                    <div className="occupation-title"><span>Occupations</span></div>
                    <div className="occupations">
                        <ul>
                            {
                                character.occupation.map((i, index) => {
                                    return (
                                        <li key={index}>
                                            <span>{i}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

CharacterContent.propTypes = {
    character: {
        char_id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        nickname: PropTypes.string.isRequired,
        occupation: PropTypes.array.isRequired,
        birthday: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        portrayed: PropTypes.string.isRequired,
    }
}

export default CharacterContent
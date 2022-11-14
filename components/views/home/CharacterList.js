import {Col, Row} from "react-bootstrap";
import {CharacterItem} from "../../ui";

const CharacterList = (props) => {
    const {filteredItems} = props
    return (
        <>
            <div className="character-list">
                <Row>
                    {
                        !filteredItems.length
                            ?
                            <p className="empty">There is not any character related to search</p>
                            :
                            filteredItems.map((character, index) => {
                                return (
                                    <Col lg={3} sm={12} key={index}>
                                        <CharacterItem character={character}/>
                                    </Col>
                                )
                            })
                    }
                </Row>
            </div>
        </>
    )
}

export default CharacterList
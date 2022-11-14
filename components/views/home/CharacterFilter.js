import {Col, Row} from "react-bootstrap";
import {Search} from "react-feather";

const CharacterFilter = (props) => {
    const {setQuery} = props

    return (
        <>
            <div className="character-filter">
                <Row>
                    <Col lg={6} sm={12}>
                        <h3>Characters</h3>
                    </Col>
                    <Col lg={6} sm={12}>
                        <div className="filter-items d-flex align-items-center justify-content-end">
                            <div className="search">
                                <span className="search-icon">
                                    <Search size={21}/>
                                </span>
                                <input type="text" onChange={(e) => setQuery(e.target.value)} placeholder="Search..."/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default CharacterFilter
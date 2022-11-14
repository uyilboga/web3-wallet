import Head from "next/head";

import {fetchCharacterDetail} from "../../lib/apiService";

import Layout from "../../layouts/layout";
import CharacterContent from "../../components/views/detail/CharacterContent";
import CharacterImage from "../../components/views/detail/CharacterImage";
import {Container, Row, Col, Spinner} from "react-bootstrap";
import {useEffect, useState} from "react";

const CharacterDetail = ({query}) => {
    const [character, setCharacter] = useState(null)
    const [loading, setLoading] = useState(true)

    const getCharacterDetail = async () => {
        setLoading(true)
        const res = await fetchCharacterDetail(query.id)
        if (res.name !== 'error') {
            setCharacter(res[0])
            setLoading(false)
        } else {
            console.log(res.name + '-' + res.code)
        }
    }

    useEffect(() => {
        getCharacterDetail()
    }, [])

    return (
        <Layout>
            {
            loading
                ?
                <div className="loading"><Spinner variant="primary"/></div>
                :
                <div className="character-detail">
                    <Head>
                        <title>{character.name} - Breaking Bad</title>
                        <meta name="description" content="the characters of Breaking bad"/>
                    </Head>
                    <Container>
                        <Row className="justify-content-between">
                            <Col lg={4}>
                                <CharacterImage character={character}/>
                            </Col>
                            <Col lg={7}>
                                <CharacterContent character={character}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            }
        </Layout>
    )
}



CharacterDetail.getInitialProps = async ({query}) => {
    return { query }
}

export default CharacterDetail
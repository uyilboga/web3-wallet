import Head from 'next/head'
import {fetchCharacters} from "../lib/apiService";
import { useState} from "react";
import { Container } from "react-bootstrap";
import CharacterList from "../components/views/home/CharacterList";
import CharacterFilter from "../components/views/home/CharacterFilter";
import Layout from "../layouts/layout";

export default function Home({characters}) {
    const [query, setQuery] = useState('')

    const filteredItems = characters.filter((character) => {
        if (query === 'all') {
            return characters
        }
        return character.status.toLowerCase().includes(query.toLowerCase()) || character.name.toLowerCase().includes(query.toLowerCase())
    })

    return (
        <>
            <Head>
                <title>Characters - Breaking Bad</title>
                <meta name="description" content="the characters of Breaking bad"/>
            </Head>

            <Layout>
                <div className="characters">
                    <Container>
                        <CharacterFilter setQuery={setQuery}/>
                        <CharacterList filteredItems={filteredItems}/>
                    </Container>
                </div>
            </Layout>
        </>
    )
}

export async function getServerSideProps() {
    const characters = await fetchCharacters()
    return { props: { characters } }
}

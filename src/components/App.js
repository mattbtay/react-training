import { useState, useEffect } from "react";

import { Grid, GridItem, Container, Box } from '@chakra-ui/react'

import SearchBar from "./SearchBar";
import pixabay from "../api/pixabay";
import MediaList from "./MediaList";
import VideoPlayer from "./VideoPlayer";

const App = () => {

    useEffect(() => {
        getVideosFromSearch('cats')
    }, [])

    const [videos, setVideos] = useState([])

    const getVideosFromSearch = async (searchTerm) => {
        const response = await pixabay.get('/videos', {
            params: {
                q: searchTerm
            }
        })
        setVideos(response.data.hits)
        // console.log(response)
    }

    return (
        <Box w='100%' p={12}>
        <h1>React App</h1>
        <SearchBar firstName="Matt" lastName="Taylor" onSearchBarChange={getVideosFromSearch} />
        <Grid templateColumns='2fr 1fr' gap={5}>
            <GridItem>
                <VideoPlayer video='' />
            </GridItem>
            <GridItem><MediaList videos={videos} /></GridItem>
        </Grid>
        </Box>
    );
}

export default App;
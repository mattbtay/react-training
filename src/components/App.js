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

    const [videoKey, setVideoKey] = useState([]);
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState({})
    
    const getVideosFromSearch = async (searchTerm) => {
        const response = await pixabay.get('/videos', {
            params: {
                q: searchTerm
            }
        })
        setVideos(response.data.hits)
        setSelectedVideo(response.data.hits[0].videos.tiny.url)
        // console.log(response)
    }

    const onSelectVideo = (video, videoKey) => {
        setVideoKey((videoKey) => videoKey + 1);
        setSelectedVideo(video)
        
    }

    return (
        <Container maxW='992px'>
            <h1>React App</h1>
            <SearchBar firstName="Matt" lastName="Taylor" onSearchBarChange={getVideosFromSearch} />
            <Grid templateColumns='2fr 1fr' gap={5}>
                <GridItem>
                    <VideoPlayer key={videoKey} video={selectedVideo} />
                </GridItem>
                <GridItem><MediaList videos={videos} onSelectVideo={onSelectVideo}/></GridItem>
            </Grid>
        </Container>
    );
}

export default App;
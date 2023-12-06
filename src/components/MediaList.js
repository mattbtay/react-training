import React from 'react';
import MediaItem from './MediaItem';

const MediaList = ({ videos, onSelectVideo }) => {
    const renderedList = videos.map((video, index) => {
        return <MediaItem onVideoSelect={onSelectVideo} key={index} media={video} />;
    });

    return <>{renderedList}</>;
};

export default MediaList;

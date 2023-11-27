import React from 'react';
import MediaItem from './MediaItem';

const MediaList = ({ videos }) => {
    const renderedList = videos.map((video, index) => {
        return <MediaItem key={index} media={video} />;
    });

    return <>{renderedList}</>;
};

export default MediaList;

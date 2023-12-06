const VideoPlayer = ({ video }) => {
    if (!video) {
        return ;
    }
    return (
        <video controls width="100%" src={video} />
    )
};

export default VideoPlayer;
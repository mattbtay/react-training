const VideoPlayer = ({ video }) => {
    return (
        <video controls width="100%">
            <source src={video} type="video/webm" />
        </video>
    )
};

export default VideoPlayer;
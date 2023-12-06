import { Card, CardHeader, CardBody, CardFooter, Image, Text, Stack } from '@chakra-ui/react'

const MediaItem = ({media, idx, onVideoSelect}) => {

const onCardSelect = (e) => {
    onVideoSelect(e.currentTarget.dataset.url)
}

return (
        <Card onClick={onCardSelect} data-url={media.videos.small.url} direction='row' gap={3} mb="4" p={4}>
           
            <Image
                objectFit='cover'
                src={`https://i.vimeocdn.com/video/${media.picture_id}_140x140.jpg`}
                alt={media.videos}
                borderRadius='lg'
            />
            <Stack mt='6' spacing='4px'>
                <Text>Author: {media.user}</Text>
                <Text>Video Type: {media.user}</Text>
                <Text>Tags: {media.tags}</Text>
                <Text>Views: {media.views}</Text>
            </Stack>
            
        </Card>
    )
}

export default MediaItem;
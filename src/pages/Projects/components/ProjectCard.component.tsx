import { Project } from '@/models/project.model';
import { Box, Image } from '@chakra-ui/react';
import notFound from '../../../assets/404.svg';

export interface props {
    project: Project;
}
function ProjectCard(props: props) {
    return (
        <Box
            key={props.project.id}
            boxSize={['300px', '200px', '250px', '350px']}
        >
            <Image
                borderRadius={'lg'}
                boxShadow="lg"
                fallbackSrc={notFound}
                h="full"
                objectFit="cover"
                src={props.project.images[0]}
                w="full"
            />
        </Box>
    );
}

export default ProjectCard;

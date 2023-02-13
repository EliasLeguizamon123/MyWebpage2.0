import { Project } from '@/models/project.model';
import { Box, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import notFound from '../../../assets/404.png';

export interface props {
    project: Project;
}
function ProjectCard(props: props) {
    const navigate = useNavigate();
    const handlerNavigateToProjectID = () => {
        navigate(`/projects/${props.project.id}`);
    };

    return (
        <Box
            key={props.project.id}
            boxSize={['300px', '200px', '250px', '350px']}
            style={{ cursor: 'pointer' }}
            onClick={() => handlerNavigateToProjectID()}
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

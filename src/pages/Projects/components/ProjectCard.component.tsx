import { Project } from '@/models/project.model';
import {
    Badge,
    Box,
    Button,
    Flex,
    Image,
    SimpleGrid,
    Text,
} from '@chakra-ui/react';
import notFound from '../../../assets/404.png';

import { FiGithub } from 'react-icons/fi';
import { CiFloppyDisk } from 'react-icons/ci';

export interface props {
    project: Project;
}
const handleLink = (link: string) => {
    window.open(link, '_blank');
};

function ProjectCard(props: props) {
    return (
        <SimpleGrid columns={[1, 1, 1, 2]} gap={2} w="full">
            <Flex
                direction={'column'}
                p={2}
                textAlign={['center', 'center', 'left', 'left']}
                w="full"
            >
                <Text as="i" fontSize="2xl">
                    {props.project.title}
                </Text>
                <Text>{props.project.description}</Text>
                <Box p={1}>
                    {props.project.tools.map((tool) => (
                        <Badge key={tool} m={1} variant="fires">
                            {tool}
                        </Badge>
                    ))}
                </Box>
                <Flex gap={14} justify="left" pt={2} w="full">
                    {props.project.repo ? (
                        <Button
                            rightIcon={<FiGithub />}
                            variant="newGhost"
                            onClick={() => {
                                handleLink(props.project.repo);
                            }}
                        >
                            Github
                        </Button>
                    ) : null}
                    {props.project.demo ? (
                        <Button
                            rightIcon={<CiFloppyDisk />}
                            variant="newGhost"
                            onClick={() => {
                                handleLink(props.project.demo);
                            }}
                        >
                            Demo
                        </Button>
                    ) : null}
                </Flex>
            </Flex>
            <Flex align={'center'} direction={'column'} p={2}>
                <Image
                    borderRadius={'lg'}
                    boxShadow="lg"
                    fallbackSrc={notFound}
                    maxH={['100px', '100px', '100px', '150px']}
                    objectFit="cover"
                    src={props.project.images[0]}
                    w={['250px', '300px', '300px', '350px']}
                />
            </Flex>
        </SimpleGrid>
    );
}

export default ProjectCard;

import { getProjects } from '../../services/projects.service';
import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import notFound from '../../assets/404.png';
import { Project } from '@/models/project.model';

function Projects() {
    const projects = sessionStorage.getItem('projects')
    const [myProjects, setmyProjects] = useState(JSON.parse(projects));

    useEffect(() => {
        if (myProjects.length < 1) {
            getProjects().then((res) => {
                setmyProjects(res.data);
            });
        }
    }, []);

    return (
        <Box>
            <Navbar />
            <SimpleGrid
                columns={[1, 2, 3, 3]}
                p={8}
                pt="6rem"
                spacing={8}
                style={{
                    placeItems: 'center',
                }}
                w="full"
            >
                {myProjects.map((project: Project) => (
                    <Box
                        key={project.id}
                        bg="white"
                        boxSize={'250px'}
                        boxShadow='2xl'
                        borderRadius='12px'
                    >
                        <Image
                            fallbackSrc={notFound}
                            h="full"
                            objectFit="cover"
                            src={project.images[0]}
                            borderRadius='12px'
                            w="full"
                        />
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
}

export default Projects;

import { getProjects } from '../../services/projects.service';
import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import notFound from '../../assets/404.svg';
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
                columns={[1, 2, 2, 3]}
                p={8}
                pt="6rem"
                spacing={8}
                style={{
                    placeItems: 'center',
                }}
                w="100vw"
            >
                {myProjects.map((project: Project) => (
                    <Box
                        key={project.id}
                        bg="white"
                        boxSize={['300px', '300px', '300px', '400px']}
                    >
                        <Image
                            fallbackSrc={notFound}
                            h="full"
                            objectFit="cover"
                            src={project.images[0]}
                            w="full"
                        />
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
}

export default Projects;

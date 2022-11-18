import { AppStore } from '../../redux/store';
import { getProjects } from '../../services/projects.service';
import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../components/Navbar';
import notFound from '../../assets/404.svg';

function Projects() {
    const projects = useSelector((store: AppStore) => store.projects);
    const [myProjects, setmyProjects] = useState(projects);

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
                {myProjects.map((project) => (
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

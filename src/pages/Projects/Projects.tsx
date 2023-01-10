import { getProjects } from '../../services/projects.service';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from '../../components/Navbar';

import { Project } from '@/models/project.model';
import Loading from '../Loading/Loading';
import ProjectCard from './components/ProjectCard.component';

function Projects() {
    const [myProjects, setmyProjects] = useState<Project[]>();

    useEffect(() => {
        if (myProjects === undefined) {
            getProjects().then((res) => {
                setmyProjects(res.data);
            });
        }
    }, []);

    return (
        <Box>
            <Navbar />
            {myProjects !== undefined ? (
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
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </SimpleGrid>
            ) : (
                <Loading />
            )}
        </Box>
    );
}

export default Projects;

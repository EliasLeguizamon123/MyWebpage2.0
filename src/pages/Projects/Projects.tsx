import { getProjects } from '../../services/projects.service';
import { Box, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from '../../components/Navbar';

import { Project } from '@/models/project.model';
import Loading from '../Loading/Loading';
import ProjectCard from './components/ProjectCard.component';

function Projects() {
    const [myProjects, setmyProjects] = useState<Project[]>();
    const [loading, setloading] = useState<boolean>(true);

    useEffect(() => {
        getProjects()
            .then((res) => {
                if (res.status === 200) {
                    setmyProjects(res.data);
                } else {
                    setmyProjects([]);
                }
            })
            .finally(() => {
                setloading(false);
            });
    }, []);

    return (
        <Box>
            <Navbar />
            {!loading ? (
                <VStack pt={24} px={2} w="full">
                    {myProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </VStack>
            ) : (
                <Loading />
            )}
        </Box>
    );
}

export default Projects;

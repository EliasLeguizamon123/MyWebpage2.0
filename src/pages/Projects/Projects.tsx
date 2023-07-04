import { getProjects } from '../../services/projects.service';
import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
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
        getProjects().then((res) => {
            setmyProjects(res.data);
            setloading(false);
        });
    }, []);

    return (
        <Box>
            <Navbar />
            {myProjects !== undefined ? (
                <Flex>
                    {myProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </Flex>
            ) : (
                <Loading />
            )}
        </Box>
    );
}

export default Projects;

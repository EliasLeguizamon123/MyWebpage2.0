import { Project } from '@/models/project.model';
import { getProjectByID } from '../../services/projects.service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Stack } from '@chakra-ui/react';
import Navbar from '../../components/Navbar';
import SectionOne from './components/ProjectDetailSectionOne.component';

function ProjectDetail() {
    const [project, setProject] = useState<Project>();
    const { id } = useParams();

    useEffect(() => {
        getProjectByID(id).then((res) => {
            setProject(res.data);
        });
    }, []);

    return (
        <Box>
            <Navbar />
            <Stack p={4} w="full">
                {project !== undefined ? (
                    <Box h="full" mt="6rem" textAlign="center" w="full">
                        <SectionOne project={project} />
                    </Box>
                ) : null}
            </Stack>
        </Box>
    );
}
export default ProjectDetail;

import { Project } from '@/models/project.model';
import { getProjectByID } from '../../services/projects.service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Stack, Text } from '@chakra-ui/react';
import Navbar from '../../components/Navbar';

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
                    <Box>
                        <Text>{project.title}</Text>
                    </Box>
                ) : null}
            </Stack>
        </Box>
    );
}
export default ProjectDetail;

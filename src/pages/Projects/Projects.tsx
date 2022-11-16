import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { getProjects } from '../../services/projects.service';

function Projects() {
    // useEffect(() => {
    //     getProjects().then((res) => {
    //         console.log(res.data);
    //     });
    // }, []);

    return <Navbar />;
}

export default Projects;

import { Button, SimpleGrid } from '@chakra-ui/react';
import {
    DiJavascript1,
    DiPython,
    DiNodejsSmall,
    DiReact,
    DiNpm,
    DiAngularSimple,
} from 'react-icons/di';
import {
    SiNodemon,
    SiChakraui,
    SiYarn,
    SiVite,
    SiPrisma,
    SiSequelize,
    SiMongodb,
    SiMysql,
    SiElectron,
    SiTailwindcss,
    SiDeno,
    SiExpress,
    SiDocker,
    SiGit,
    SiTypescript,
    SiIonic,
    SiMocha,
    SiChai,
    SiPug,
    SiBun,
    SiVitest,
} from 'react-icons/si';

function TechStackGallery() {
    const tech = [
        {
            icon: <DiJavascript1 size="32px" />,
            title: 'Javascript',
            url: 'https://www.javascript.com/',
        },
        {
            icon: <DiPython size="32px" />,
            title: 'Python',
            url: 'https://www.python.org/',
        },
        {
            icon: <SiTypescript size="32px" />,
            title: 'Typescript',
            url: 'https://www.typescriptlang.org/',
        },
        {
            icon: <SiExpress size="32px" />,
            title: 'Express',
            url: 'https://expressjs.com/',
        },
        {
            icon: <SiMocha size="32px" />,
            title: 'Mocha',
            url: 'https://mochajs.org/',
        },
        {
            icon: <SiChai size="32px" />,
            title: 'Chai',
            url: 'https://www.chaijs.com/',
        },
        {
            icon: <DiNodejsSmall size="32px" />,
            title: 'Node.js',
            url: 'https://nodejs.org/',
        },
        {
            icon: <SiDeno size="32px" />,
            title: 'Deno',
            url: 'https://deno.land/',
        },
        {
            icon: <SiNodemon size="32px" />,
            title: 'Nodemon',
            url: 'https://nodemon.io/',
        },
        {
            icon: <SiPug size="32px" />,
            title: 'Pug',
            url: 'https://pugjs.org/',
        },
        {
            icon: <DiReact size="32px" />,
            title: 'React',
            url: 'https://reactjs.org/',
        },
        {
            icon: <DiAngularSimple size="32px" />,
            title: 'Angular',
            url: 'https://angular.io/',
        },
        {
            icon: <SiChakraui size="32px" />,
            title: 'Chakra UI',
            url: 'https://chakra-ui.com/',
        },
        {
            icon: <SiTailwindcss size="32px" />,
            title: 'Tailwind',
            url: 'https://tailwindcss.com/',
        },
        {
            icon: <DiNpm size="32px" />,
            title: 'NPM',
            url: 'https://www.npmjs.com/',
        },
        {
            icon: <SiYarn size="32px" />,
            title: 'Yarn',
            url: 'https://yarnpkg.com/',
        },
        {
            icon: <SiVite size="32px" />,
            title: 'Vite',
            url: 'https://vitejs.dev/',
        },
        {
            icon: <SiPrisma size="32px" />,
            title: 'Prisma',
            url: 'https://www.prisma.io/',
        },
        {
            icon: <SiSequelize size="32px" />,
            title: 'Sequelize',
            url: 'https://sequelize.org/',
        },
        {
            icon: <SiMongodb size="32px" />,
            title: 'MongoDB',
            url: 'https://www.mongodb.com/',
        },
        {
            icon: <SiMysql size="32px" />,
            title: 'MySQL',
            url: 'https://www.mysql.com/',
        },
        {
            icon: <SiElectron size="32px" />,
            title: 'Electron',
            url: 'https://www.electronjs.org/',
        },
        {
            icon: <SiDocker size="32px" />,
            title: 'Docker',
            url: 'https://www.docker.com/',
        },
        {
            icon: <SiGit size="32px" />,
            title: 'Git',
            url: 'https://git-scm.com/',
        },
        {
            icon: <SiIonic size="32px" />,
            title: 'Ionic',
            url: 'https://ionicframework.com/',
        },
        {
            icon: <SiBun size="32px" />,
            title: 'Bun',
            url: 'https://bun.sh/',
        },
        {
            icon: <SiVitest size="32px" />,
            title: 'Vitest',
            url: 'https://vitest.dev/',
        },
    ];

    return (
        <SimpleGrid
            columns={[1, 2, 3, 5]}
            gap={2}
            pt={4}
            textAlign="center"
            w="full"
        >
            {tech.map((item, index) => (
                <a key={index} href={item.url} rel="noreferrer" target="_blank">
                    <Button variant="tech" w="full">
                        {item.icon}
                        {item.title}
                    </Button>
                </a>
            ))}
        </SimpleGrid>
    );
}

export default TechStackGallery;

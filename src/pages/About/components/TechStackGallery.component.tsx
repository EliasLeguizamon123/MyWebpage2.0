import { SimpleGrid, useColorMode } from '@chakra-ui/react';
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
} from 'react-icons/si';

function TechStackGallery() {
    const { colorMode } = useColorMode();

    return (
        <SimpleGrid
            color={colorMode === 'light' ? 'primary' : ''}
            columns={[2, 3, 5]}
            pl={['5rem', 8, 4]}
            pt={4}
            spacingX={-4}
            spacingY={8}
            textAlign="center"
            w="85vw"
        >
            <DiJavascript1 size="32px" />
            <DiPython size="32px" />
            <DiNodejsSmall size="32px" />
            <SiNodemon size="32px" />
            <DiReact size="32px" />
            <DiAngularSimple size="32px" />
            <SiChakraui size="32px" />
            <DiNpm size="32px" />
            <SiYarn size="32px" />
            <SiVite size="32px" />
            <SiPrisma size="32px" />
            <SiSequelize size="32px" />
            <SiMongodb size="32px" />
            <SiMysql size="32px" />
            <SiElectron size="32px" />
        </SimpleGrid>
    );
}

export default TechStackGallery;

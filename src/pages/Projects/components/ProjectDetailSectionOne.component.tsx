import { Project } from '@/models/project.model';
import { Image, SimpleGrid, Text, VStack, Button } from '@chakra-ui/react';

interface props {
    project: Project;
}

function SectionOne(props: props) {
    return (
        <SimpleGrid columns={[1, 1, 1, 2]}>
            <VStack>
                <Text as="i" fontSize="2xl" py={'2rem'}>
                    {props.project.title}
                </Text>
                <Text>{props.project.description}</Text>
                <Text as="i" fontSize="2xl">
                    Links
                </Text>
                <SimpleGrid
                    columns={
                        props.project.demo !== '' || props.project.repo !== ''
                            ? 1
                            : 2
                    }
                    spacing={'4rem'}
                >
                    {props.project.demo !== '' ? (
                        <a
                            href={props.project.demo}
                            rel="demo noreferrer"
                            target="_blank"
                        >
                            <Button
                                fontSize="20px"
                                size="sm"
                                variant="newGhost"
                            >
                                Demo
                            </Button>
                        </a>
                    ) : null}
                    {props.project.repo !== '' ? (
                        <a
                            href={props.project.repo}
                            rel="code noreferrer"
                            target="_blank"
                        >
                            <Button
                                fontSize="20px"
                                size="sm"
                                variant="newGhost"
                            >
                                Code
                            </Button>
                        </a>
                    ) : null}
                </SimpleGrid>
            </VStack>
            <Image borderRadius="md" src={props.project.images[0]} />
        </SimpleGrid>
    );
}

export default SectionOne;

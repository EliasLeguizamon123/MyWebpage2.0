import { Heading, HStack, SimpleGrid, Text } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { Navigation } from '../models/navigation.model';

interface props {
    nav: Navigation[];
}
function CustomNavContent(props: props) {
    const location = useLocation();

    return (
        <SimpleGrid columns={1} h="full" pt="2rem" textAlign="center">
            {props.nav.map((item: Navigation) => (
                <HStack key={item.index} justify="center" py="1rem">
                    <Text as="sub">0{item.index}</Text>
                    <Link key={item.index} to={item.path}>
                        {location.pathname === item.path ? (
                            <Heading variant="selected">{item.title}</Heading>
                        ) : (
                            <Heading variant="navigation">{item.title}</Heading>
                        )}
                    </Link>
                </HStack>
            ))}
        </SimpleGrid>
    );
}

export default CustomNavContent;

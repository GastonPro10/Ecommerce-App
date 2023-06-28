import { Grid, GridItem, Text } from "@chakra-ui/react";
/* import {BsTruck} from 'react-icons/bs' */
import { Image } from "@chakra-ui/next-js";
import { IconType } from "react-icons/lib";

type Props = {
    title: string;
    content: string;
    icon: any;
}

export default function Middleritem({icon, title, content}:Props){
    return(
        <Grid gridTemplateColumns='40px 1fr' alignItems='center' gap='1rem'>
            <GridItem>
                {icon}
            </GridItem>
            <GridItem>
                <Text textTransform='uppercase' fontSize='xs' fontWeight='bold'>{title}</Text>
                <Text fontSize='xs'>{content}</Text>
            </GridItem> 
        </Grid>
    )
}
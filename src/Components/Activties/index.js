import React from 'react';

import { AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import {
    Container,
    Header,
    Title,
    Card,
    CardHeader,
    Avatar,
    Description,
    Bold,
    CardBody,
    UserNAme,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel,
    HeaderItens,
    HeaderOptions,
    OptionsTitleActive,
    OptionsTitle
} from './styles';


import avatar from '../../../assets/images/avatar.png';



const Activties = () => {
    return (
        <Container>
            <Header>
                <HeaderItens>
                    <Title>Atividades</Title>
                    <HeaderOptions>
                        <OptionsTitleActive>Todos</OptionsTitleActive>
                        <OptionsTitle>Minhas</OptionsTitle>
                    </HeaderOptions>
                </HeaderItens>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@FranciscoSilva</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserNAme>Sicrano Siva Santos</UserNAme>
                </CardBody>

                <CardFooter>

                    <Details>
                        <Value>R$ 18,00 </Value>

                        <Divider />

                        <AntDesign name="lock" size={14} color="white" />
                        <Date>há 1 ano</Date>
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="white" />
                            <OptionLabel>0</OptionLabel>
                        </Option>

                        <Option>
                            <Ionicons name="heart-outline" size={14} color="white" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>

                </CardFooter>

            </Card>

        </Container>
    );
}

export default Activties;
import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';

import {
    Container,
    Wapper,
    Header,
    Text,
    Profile,
    ProfileImg,
    ProfileText,
    ProfileNexText,
    SeeProfile,
    ProfileSeeText,
    ProfileTitle,
    ProfileSettings,
    ProfileSettingsTitle,
    ProfileSettingsItem
}
    from './styles';

import imgProfline from '../../../assets/images/avatar.png'

const icon = <MaterialIcons name="navigate-next" size={24} color="gray" />;

const items = [
    {
        key: String(Math.random()),
        title: 'Meu PicPay',
        description: '@SicranoSivaSanto'
    },
    {
        key: String(Math.random()),
        title: 'Meu número',
        description: '(85) 98965-9999'
    },
    {
        key: String(Math.random()),
        title: 'Meu e-mail',
        description: 'SicranoSivaSanto@hotmail.com'
    },
    {
        key: String(Math.random()),
        title: 'Dados pessoais',
        description: icon,
    },
    {
        key: String(Math.random()),
        title: 'Conta bancária',
        description: icon
    },

    {
        key: String(Math.random()),
        title: 'Taxas e limites',
        description: icon
    },
    {
        key: String(Math.random()),
        title: 'Meus endereços',
        description: icon
    },
    {
        key: String(Math.random()),
        title: 'Meu Favoritos',
        description: icon
    },
    {
        key: String(Math.random()),
        title: 'Atualizações',
        description: icon
    },
    {
        key: String(Math.random()),
        title: 'Mais informações',
        description: icon
    },
]

const Settings = () => {
    return (

        <Wapper>
            <Container>

                <Header>
                    <Text>Ajustes</Text>
                </Header>

                <Profile>
                    <ProfileImg source={imgProfline} />
                    <ProfileText>@SicranoSivaSantos</ProfileText>
                    <ProfileNexText>Sicrano Siva Santos</ProfileNexText>
                    <SeeProfile>
                        <ProfileSeeText>Ver meu perfil</ProfileSeeText>
                    </SeeProfile>
                </Profile>

                <ProfileTitle>MINHA CONTA</ProfileTitle>

                {items.map((item) => (
                    <ProfileSettings key={item.key}>
                        <ProfileSettingsTitle>{item.title}</ProfileSettingsTitle>
                        <ProfileSettingsItem>{item.description}</ProfileSettingsItem>
                    </ProfileSettings>

                ))}
            </Container>
        </Wapper>

    )
}

export default Settings;
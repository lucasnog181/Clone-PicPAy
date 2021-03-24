import React from 'react';

import { StyleSheet } from 'react-native';

import MapView, { Marker } from 'react-native-maps';

import { MaterialCommunityIcons, AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons'

import {
    Container,
    Wapper,
    Header,
    Title,
    Card,
    CardTitle,
    CardItem,
    ViewMap,
    MapTitle,
    TextView,
    TitleMap,
    Text,
    ServicesTitle,
    ContainerServices,
    CardServices
} from './styles';



const marker = <FontAwesome name="map-marker" size={24} color="#10c86e" />;



const items = [

    {
        key: String(Math.random()),
        icon: <MaterialCommunityIcons
            name="qrcode-scan"
            size={23}
            color="#10c86e"
        />,
        description: 'Pagar pessoas',

    },
    {
        key: String(Math.random()),
        icon: <AntDesign
            name="qrcode"
            size={23}
            color="#10c86e"
        />,
        description: 'Pix',

    },
    {
        key: String(Math.random()),
        icon: <FontAwesome
            name="barcode"
            size={23}
            color="#10c86e"
        />,
        description: 'Pagar boleto',

    },
    {
        key: String(Math.random()),
        icon: <MaterialCommunityIcons
            name="credit-card-check"
            size={23} color="#10c86e"
        />,
        description: 'Pagar na maquininha',

    },

]



const itemsCard2 = [
    {
        key: String(Math.random()),
        icon: <MaterialCommunityIcons name="cellphone-iphone" size={23} color="#10c86e" />,
        description: 'Recarga de celular'
    },
    {
        key: String(Math.random()),
        icon: <FontAwesome5 name="bus-alt" size={23} color="#10c86e" />,
        description: 'Cartão Transporte'
    },

    {
        key: String(Math.random()),
        icon: <MaterialCommunityIcons name="gas-station" size={23} color="#10c86e" />,
        description: 'Shell Box'
    },
]


function Pay() {
    return (
        <Wapper>
            <Container>
                <Header>

                    <MaterialCommunityIcons
                        name="qrcode-scan"
                        size={28}
                        color="#10c86e"
                    />

                    <Title>Transações</Title>

                </Header>

                <Card>
                    {items.map((item) => (
                        <CardItem key={item.key}>
                            {item.icon}
                            <CardTitle>{item.description}</CardTitle>
                        </CardItem>
                    ))}
                </Card>

                <ViewMap>

                    <MapTitle>
                        {marker}
                        <TextView>
                            <TitleMap>Locais próximos</TitleMap>
                            <Text>Confira estabelecimentos perto de voçê</Text>
                        </TextView>
                    </MapTitle>

                    <MapView initialRegion={{
                        latitude: -3.8691916,
                        longitude: -38.6258074,
                        latitudeDelta: 0.008,
                        longitudeDelta: 0.008,
                    }} zoomEnabled={false}
                        pitchEnabled={false}
                        scrollEnabled={true}
                        rotateEnabled={false} style={styles.mapStyle} >


                        <Marker
                            icon={marker}
                            coordinate={{
                                latitude: -3.8691916,
                                longitude: -38.6258074,
                            }}
                        />

                    </MapView>

                </ViewMap>

                <ContainerServices>

                    <ServicesTitle>Serviços</ServicesTitle>

                    <CardServices>
                        {itemsCard2.map((item) => (
                            <CardItem key={item.key}>
                                {item.icon}
                                <CardTitle>{item.description}</CardTitle>
                            </CardItem>
                        ))}
                    </CardServices>

                </ContainerServices>


            </Container>
        </Wapper>
    );
}



const styles = StyleSheet.create({

    mapStyle: {
        width: '100%',
        height: 85,
    },
});


export default Pay;
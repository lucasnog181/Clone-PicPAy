import React from 'react';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import {
    Wapper,
    Container,
    Header,
    BalanceContainer,
    BalanceTitle,
    Balance,
    GifContainer,
    CodeContainer
} from './styles';


import Sugestions from '../../Components/Sugestions/index'
import Activties from '../../Components/Activties/index'
import Tips from '../../Components/Tips/index'
import Banner from '../../Components/Banner';


function Home() {
    return (
        <Wapper>
            <Container>
                <Header>

                    <CodeContainer>
                        <MaterialCommunityIcons
                            name="qrcode-scan"
                            size={30}
                            color="#10c86e"
                        />
                    </CodeContainer>

                    <BalanceContainer>
                        <BalanceTitle>Meu saldo</BalanceTitle>
                        <Balance>R$ 1.000.000</Balance>
                    </BalanceContainer>

                    <GifContainer>
                        <AntDesign
                            name="gift"
                            size={30}
                            color="#10c86e"
                        />
                    </GifContainer>

                </Header>

                <Sugestions />
                <Activties />
                <Tips />
                <Banner />
            </Container>
        </Wapper>
    );
}

export default Home;
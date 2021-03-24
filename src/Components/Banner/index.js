import React from 'react';
import img13 from '../../../assets/images/13.png';

import { Container, Details, Img, Title, Descriptions, PayNow, Text } from './styles';

const Banner = () => {
    return (
        <Container>
            <Details>
                <Title>Cobre um amigo</Title>
                <Descriptions>Mantenha suas parcerias em dia,
                use o PicPay para fazer uma cobrança.
                </Descriptions>

                <PayNow>
                    <Text>Cobre agora</Text>
                </PayNow>
            </Details>

            <Img source={img13} />
        </Container>
    );
}

export default Banner;
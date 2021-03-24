import React, { useState } from 'react';

import { Switch } from 'react-native';
import { Foundation, Ionicons, FontAwesome5, FontAwesome, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import {
    Header,
    Container,
    Wapper,
    HeaderContainer,
    GraphButton,
    Title,
    BalanceContainer,
    Value,
    Bold,
    EyeButton,
    Info,
    Actions,
    ActionsLabel,
    Action,
    UseBalance,
    UseBalanceTitle,
    PaymentMethods,
    PaymentMethodsTitle,
    Card,
    CardDetails,
    CardTitle,
    CardDescription,
    Img,
    CardBody,
    AddButton,
    AddLabel,
    UseTicketContainer,
    UseTicketButton,
    UseTicketLabel,
} from './styles';

import creditCard from '../../../assets/images/credit-card.png';


function Wallet() {

    const [isVisible, setIsVisible] = useState(true);
    const [useBalance, setUseBalance] = useState(true);

    function handleToogleEyeButton() {
        setIsVisible((prevState) => !prevState)
    }


    function handleToogleBalanceButton() {
        setUseBalance((prevState) => !prevState)
    }

    return (

        <Wapper>

            <Container>

                <Header colors={useBalance ? ['#52E78C', '#1AB563'] : ['#D3D3D3', '#868686']}>

                    <GraphButton>
                        <Foundation name="graph-bar" size={28} color="white" />
                    </GraphButton>

                    <HeaderContainer>

                        <Title>Saldo PicPay</Title>

                        <BalanceContainer>
                            <Value>
                                R$ <Bold>{isVisible ? "1.000.000" : "----"}</Bold>
                            </Value>

                            <EyeButton onPress={handleToogleEyeButton}>
                                <Ionicons name={isVisible ? "ios-eye-outline" : "ios-eye-off-outline"} size={26} color="white" />
                            </EyeButton>
                        </BalanceContainer>

                        <Info>Seu saldo está rendendo 100% do  CDI</Info>

                        <Action>
                            <Actions>
                                <FontAwesome5 name="money-bill-wave" size={24} color="white" />
                                <ActionsLabel>Adicionar</ActionsLabel>
                            </Actions>

                            <Actions>
                                <FontAwesome name="bank" size={24} color="white" />
                                <ActionsLabel>Adicionar</ActionsLabel>
                            </Actions>

                        </Action>

                    </HeaderContainer>
                </Header>

                <UseBalance>
                    <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>

                    <Switch value={useBalance} onValueChange={setUseBalance} />
                </UseBalance>

                <PaymentMethods>
                    <PaymentMethodsTitle>
                        Formas de pagamento
                </PaymentMethodsTitle>

                    <Card>
                        <CardBody>
                            <CardDetails>
                                <CardTitle>Cadastre seu cartão de credito</CardTitle>
                                <CardDescription>Cadastre seu cartão de credito para fazer pagamentos mesmo quando tiver saldo no seu Picpay</CardDescription>
                            </CardDetails>

                            <Img source={creditCard} resizeMode="contain" />
                        </CardBody>

                        <AddButton>
                            <AntDesign name="pluscircleo" size={30} color="#0DB060" />
                            <AddLabel>
                                Adicionar cartão de crédito
                     </AddLabel>
                        </AddButton>

                    </Card>

                    <UseTicketContainer>
                        <UseTicketButton>
                            <MaterialCommunityIcons name="ticket-outline" size={20} color="#0DB060" />
                            <UseTicketLabel>
                                Usar código promocional
            </UseTicketLabel>
                        </UseTicketButton>
                    </UseTicketContainer>

                </PaymentMethods>


            </Container>

        </Wapper>
    );
}

export default Wallet;
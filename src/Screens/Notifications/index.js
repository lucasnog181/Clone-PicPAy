import React from 'react';

import { Container, Wapper, Header, NotificationsTitle, ConfigTitle, NotificationsText, ConfigText, Card, CardText, Cardtime } from './styles';


const items = [
    {
        key: String(Math.random()),
        title: 'O saque de R$ 290,90 para sua conta bancária não pode ser realizado.',
        date: 'Hoje as 14:00'
    },

    {
        key: String(Math.random()),
        title: 'No seu primeiro pagamento em qualquer coisa usando o PicPay a gente te devolve 30%.toque para saber mais.',
        date: 'Hoje as 14:25'
    },

    {
        key: String(Math.random()),
        title: 'Pague um amigo pela primeira vez com o PicPay hoje e ganhe R$20 de volta! Toque mais para saber.',
        date: 'Hoje as 14:32'
    },

    {
        key: String(Math.random()),
        title: 'No seu primeiro pagamento em qualquer coisa usando o PicPay a gente te devolve 30%.toque para saber mais.',
        date: 'Hoje as 14:45'
    },

    {
        key: String(Math.random()),
        title: 'No seu primeiro pagamento em qualquer coisa usando o PicPay a gente te devolve 30%.toque para saber mais.',
        date: 'Hoje as 14:55'
    },

    {
        key: String(Math.random()),
        title: 'No seu primeiro pagamento em qualquer coisa usando o PicPay a gente te devolve 30%.toque para saber mais.',
        date: 'Hoje as 15:25'
    },
    {
        key: String(Math.random()),
        title: 'No seu primeiro pagamento em qualquer coisa usando o PicPay a gente te devolve 30%.toque para saber mais.',
        date: 'Hoje as 15:25'
    },
    {
        key: String(Math.random()),
        title: 'No seu primeiro pagamento em qualquer coisa usando o PicPay a gente te devolve 30%.toque para saber mais.',
        date: 'Hoje as 15:25'
    },
    {
        key: String(Math.random()),
        title: 'No seu primeiro pagamento em qualquer coisa usando o PicPay a gente te devolve 30%.toque para saber mais.',
        date: 'Hoje as 15:25'
    },
    {
        key: String(Math.random()),
        title: 'No seu primeiro pagamento em qualquer coisa usando o PicPay a gente te devolve 30%.toque para saber mais.',
        date: 'Hoje as 15:25'
    },
    {
        key: String(Math.random()),
        title: 'No seu primeiro pagamento em qualquer coisa usando o PicPay a gente te devolve 30%.toque para saber mais.',
        date: 'Hoje as 15:25'
    },

    {
        key: String(Math.random()),
        title: 'No seu primeiro pagamento em qualquer coisa usando o PicPay a gente te devolve 30%.toque para saber mais.',
        date: 'Hoje as 15:25'
    },
    {
        key: String(Math.random()),
        title: 'No seu primeiro pagamento em qualquer coisa usando o PicPay a gente te devolve 30%.toque para saber mais.',
        date: 'Hoje as 15:25'
    },
    {
        key: String(Math.random()),
        title: 'No seu primeiro pagamento em qualquer coisa usando o PicPay a gente te devolve 30%.toque para saber mais.',
        date: 'Hoje as 15:25'
    },
    {
        key: String(Math.random()),
        title: 'No seu primeiro pagamento em qualquer coisa usando o PicPay a gente te devolve 30%.toque para saber mais.',
        date: 'Hoje as 15:25'
    },
    {
        key: String(Math.random()),
        title: 'No seu primeiro pagamento em qualquer coisa usando o PicPay a gente te devolve 30%.toque para saber mais.',
        date: 'Hoje as 15:25'
    },


]


const Notifications = () => {

    return (

        <Wapper>

            <Container>

                <Header>

                    <NotificationsTitle>
                        <NotificationsText>Notificações</NotificationsText>
                    </NotificationsTitle>

                    <ConfigTitle>
                        <ConfigText>Configurar</ConfigText>
                    </ConfigTitle>

                </Header>

                {
                    items.map((item) => (
                        <Card key={item.key}>
                            <CardText>{item.title}</CardText>
                            <Cardtime>{item.date}</Cardtime>
                        </Card>

                    ))
                }

            </Container>

        </Wapper>


    );
}

export default Notifications;
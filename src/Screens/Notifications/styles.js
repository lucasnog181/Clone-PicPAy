import styled from 'styled-components/native';


export const Wapper = styled.SafeAreaView`
background: #000;
flex: 1 ;
`;



export const Container = styled.ScrollView``;

export const Header = styled.View`

height:50px;
padding:0 16px;
flex-direction: row;
align-items: center;
justify-content:space-between;
margin-top:8px;
margin-bottom:20px;

`;

export const NotificationsTitle = styled.View``;

export const ConfigTitle = styled.TouchableOpacity``;

export const NotificationsText = styled.Text`

color:#FFF;
font-weight:bold;
font-size:20px;

`;

export const ConfigText = styled.Text`

color:#FFF;
font-weight:bold;
font-size:15px;
color:#10c86e;

`;


export const Card = styled.View`

border-bottom-width:1px;
border-bottom-color:#181818;

border-top-width:1px;
border-top-color:#181818;

padding:20px;

`;

export const CardText = styled.Text`

color:#FFF;
flex:1;
font-size:15px;


`;

export const Cardtime = styled.Text`

color:#FFF;
margin-top:15px;
font-weight:bold;
font-size:13px;

`;
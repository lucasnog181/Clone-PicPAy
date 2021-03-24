import styled from 'styled-components/native';


export const Wapper = styled.SafeAreaView`
background: #000;
flex: 1 ;
`;

export const Container = styled.ScrollView``;



export const Header = styled.View`

padding:0 16px;
margin-top:16px;

`;



export const Title = styled.Text`

color: #FFF;
font-weight:bold;
margin-top:20px;
font-size:25px;

`;


export const Card = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddingLeft: 16,
    },
}))`
 
 margin-top:24px;
`;

export const CardItem = styled.TouchableOpacity`
border-color:#3A3A3A;
border-width:1px;
width:113px;
height:113px;
border-radius:8px;
padding:13px;
justify-content:space-between;
margin-right:17px;

`;


export const CardTitle = styled.Text`
color: #fff;
font-weight:bold;
font-size:16px;
`;


export const ViewMap = styled.View`

padding:0 16px;
margin-top:20px;


`;


export const MapTitle = styled.View`

background: #fff;
height:70px;
border-top-left-radius:8px;
border-top-right-radius:8px;

flex-direction:row;

padding: 15px 15px;
align-items: center;

`;


export const TextView = styled.View`

`;

export const TitleMap = styled.Text`
color:#353535;
margin-left:10px;
font-weight:bold;
font-size:15px;
`;

export const Text = styled.Text`
 color: gray;
 margin-left:10px;
`;


export const ServicesTitle = styled.Text`

color: #FFF;
font-weight:bold;
font-size:25px;

`;


export const ContainerServices = styled.View`

padding:0 16px;
margin-top:25px;

`;


export const CardServices = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddingLeft: 16,
    },
}))`
 
 margin-top:24px;
`;
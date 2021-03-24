import styled from 'styled-components/native';


export const Wapper = styled.SafeAreaView`
background: #000;
flex: 1 ;

`;

export const Container = styled.ScrollView``;


export const Header = styled.View`
height:50px;
padding:0 16px;
align-items: center;
margin-top:20px;
margin-bottom:5px;

`;


export const Text = styled.Text`
color: #fff;
font-size:20px;
font-weight:bold;

`;

export const Profile = styled.View`
height:250px;
align-items: center;
margin-top:20px;
`;


export const ProfileImg = styled.Image`
width:100px;
height:100px;
`;

export const ProfileText = styled.Text`
color: #fff;
font-size:20px;
margin-top:20px;
font-weight:bold;
`;


export const ProfileNexText = styled.Text`
 color:#A8A8A8;
 margin-top:5px;
 font-size:15px;
`;



export const SeeProfile = styled.TouchableOpacity``;



export const ProfileSeeText = styled.Text`
color:#10c86e;
margin-top:20px;
`;


export const ProfileTitle = styled.Text`
color: #fff;
padding:18px;
border-bottom-width:1px;
border-bottom-color:#181818;
font-weight:bold;
font-size:13px;
`;


export const ProfileSettings = styled.TouchableOpacity`
flex-direction:row;
justify-content:space-between;
padding:18px;
border-bottom-width:1px;
border-bottom-color:#181818;
`;


export const ProfileSettingsTitle = styled.Text`

color: #fff;
font-size:14px;
font-weight:bold;

`;


export const ProfileSettingsItem = styled.Text`

color: #A8A8A8;
font-size:14px;

`;
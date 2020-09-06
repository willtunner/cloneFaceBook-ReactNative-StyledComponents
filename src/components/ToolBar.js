import React from 'react';
import styled from 'styled-components';

// Importa icones
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

// Importa o avatar
import Avatar from './Avatar';

// StyledComponents
//#region 
const Container = styled.View`
width: 100%;
height: 92px;
/* background: orange; */
`;

const Row = styled.View`
flex-direction: row;
background: #FFF;
width: 100%;
padding: 0 11px;
align-items: center;
`;

const Input = styled.TextInput`
height: 50px;
width: 100%;
padding: 0 8px;
`;

const Divider = styled.View`
width: 100%;
height: 0.5px;
background: #f0f0f0;
`;

const Menu = styled.TouchableOpacity`
flex: 1;
flex-direction: row;
align-items: center;
justify-content: center;
height: 42px;
`;

const MenuText = styled.Text`
padding-left: 11px;
font-weight: 500;
font-size: 12px;
`;

const Separator = styled.View`
width: 1px;
height: 26px;
background: #F0F0F0;
`;


const BottomDivider = styled.View`
width: 100%;
height: 9px;
background: #F0F2F5;
`;

//#endregion

const ToolBar = () => {
    return (
        <>
            <Container>
                <Row>
                    <Avatar source={require('../assets/user1.jpg')} />
                    <Input placeholder="No que você está pensando, William?" />
                </Row>

                <Divider />

                <Row>
                    <Menu onPress={() => alert('Acessou livecam')}>
                        <Ionicons name="ios-videocam" size={22} color="#F44337" />
                        <MenuText>Live</MenuText>
                    </Menu>

                    <Separator />

                    <Menu onPress={() => alert('Acessou fotos')}>
                        <MaterialIcons name="photo-size-select-actual" size={20} color="#4CAF50" />
                        <MenuText>Foto</MenuText>
                    </Menu>

                    <Separator />

                    <Menu onPress={() => alert('Acessou Criar salas')}>
                        <MaterialCommunityIcons name="video-plus" size={22} color="#E141FC" />
                        <MenuText>Room</MenuText>
                    </Menu>
                </Row>
            </Container>

            <BottomDivider />
        </>
    )
}

export default ToolBar
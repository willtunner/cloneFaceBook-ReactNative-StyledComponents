import React from 'react';
import styled from 'styled-components';
import { ScrollView } from 'react-native';

// Importa Componentes
import Avatar from './Avatar';

// Importar icones
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Container = styled.View`
width: 100%;
height: 58px;
/* background: orange; */
flex-direction: row;
align-items: center;
`;

const Room = styled.TouchableOpacity`
width: 130px;
height: 40px;
flex-direction: row;
align-items: center;
border-radius: 20px;
border-width: 1px;
border-color: #82B1FF;
padding: 0 15px;
margin-right: 12px;
`;

const Text = styled.Text`
color: #1777f2;
font-size: 12px;
padding-left: 3px;
`;

const User = styled.View`
margin-right: 13px;
`;

const BottomDivider = styled.View`
width: 100%;
height: 9px;
background: #F0F2F5;
`;

const Users = () => {
    return (
        <>
            <Container>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ paddingLeft: 11 }}
                >
                    <Room>
                        <MaterialCommunityIcons
                            name='video-plus'
                            size={26}
                            color='#E141FC'
                        />
                        <Text>Create Room</Text>
                    </Room>

                    <User>
                        <Avatar
                            source={require('../assets/user2.jpg')}
                            online={true}
                        />
                    </User>

                    <User>
                        <Avatar
                            source={require('../assets/user3.jpg')}
                            online={true}
                        />
                    </User>

                    <User>
                        <Avatar
                            source={require('../assets/user4.jpg')}
                            online={true}
                        />
                    </User>

                    <User>
                        <Avatar
                            source={require('../assets/user5.jpg')}
                            online={true}
                        />
                    </User>

                    <User>
                        <Avatar
                            source={require('../assets/user3.jpg')}
                            online={true}
                        />
                    </User>
                </ScrollView>
            </Container>

            <BottomDivider />
        </>
    );
}

export default Users;
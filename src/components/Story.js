import React from 'react';
import styled from 'styled-components';

import { ScrollView } from 'react-native';

// Import icons
import { AntDesign } from '@expo/vector-icons';

// Import Component
import Avatar from './Avatar';

const Container = styled.View`
width: 100%;
height: 192px;
/* background: orange; */
flex-direction: row;
align-items: center;
`;

const Card = styled.View`
width: 106px;
height: 170px;
position:relative;
margin-right: 8px;
`;

const CardStory = styled.Image`
width: 100%;
height: 170px;
border-radius: 12px;
`;


// Botão circular branco com + nos storys
const CardUser = styled.View`
position: absolute;
top: 8px;
left: 8px;
background: #FFF;
border-radius: 20px;
width: 39px;
height: 39px;
align-items: center;
justify-content: center;
`;

const CardFooter = styled.View`
width: 100%;
position: absolute;
bottom: 12px;
left: 9px;
`;

const Text = styled.Text`
font-size: 13px;
font-weight: bold;
color: #FFF;
text-shadow: 1px 1px 1px rgba(0,0,0,0.4);
`;

const BottomDivider = styled.View`
width: 100%;
height: 9px;
background: #F0F2F5;
`;

const Story = () => {
    return (
        <>
            <Container>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ paddingLeft: 11 }}
                >
                    {/* Card com o plus + pessoal */}
                    <Card>
                        <CardStory source={require('../assets/story1.jpg')} />

                        <CardUser>
                            <AntDesign
                                name='plus'
                                size={24}
                                color='#1777F2'
                            />
                        </CardUser>
                        <CardFooter>
                            <Text>Add To Story</Text>
                        </CardFooter>
                    </Card>

                    {/* Card de amigos online */}
                    <Card>
                        <CardStory
                            source={require('../assets/story2.jpg')}
                        />

                        <CardUser>
                            <Avatar
                                source={require('../assets/user2.jpg')}
                                story={true}
                            />
                        </CardUser>

                        <CardFooter>
                            <Text>Fulana da S.</Text>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardStory
                            source={require('../assets/story3.jpg')}
                        />

                        <CardUser>
                            <Avatar
                                source={require('../assets/user3.jpg')}
                                story={true}
                            />
                        </CardUser>

                        <CardFooter>
                            <Text>Jobs Pereira</Text>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardStory
                            source={require('../assets/story4.jpg')}
                        />

                        <CardUser>
                            <Avatar
                                source={require('../assets/user4.jpg')}
                                story={true}
                            />
                        </CardUser>

                        <CardFooter>
                            <Text>Gates Pinheiro</Text>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardStory
                            source={require('../assets/story1.jpg')}
                        />

                        <CardUser>
                            <Avatar
                                source={require('../assets/user5.jpg')}
                                story={true}
                            />
                        </CardUser>

                        <CardFooter>
                            <Text>Kratos GOD</Text>
                        </CardFooter>
                    </Card>

                </ScrollView>
            </Container>
            <BottomDivider />
        </>
    )
}

export default Story;
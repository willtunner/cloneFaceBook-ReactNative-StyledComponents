import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

// Importando Components
import Avatar from './Avatar';

// Importando Icones
import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const Container = styled.View`
flex:1;
/* background: orange; */
`;

const Header = styled.View`
height: 50px;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-top: 6px;
padding: 0 11px;
`;

const Row = styled.View`
align-items: center;
flex-direction: row;
`;

const User = styled.Text`
font-size: 12px;
font-weight: bold;
color: #222121;
`;

const Time = styled.Text`
font-size: 9px;
color: #747476;
`;

const Post = styled.Text`
font-size: 12px;
color: #222121;
line-height: 16px;
padding: 0 11px;
`;

const Photo = styled.Image`
margin-top: 9px;
width: 100%;
height: 300px;
`;

const Footer = styled.View`
padding: 0 11px;
`;

const FooterCount = styled.View`
flex-direction: row;
justify-content: space-between;
padding: 9px 0;
`;

const IconCount = styled.View`
background: #1878F3;
width: 20px;
height: 20px;
border-radius: 10px;
align-items: center;
justify-content: center;
margin-right: 6px;
`;

const TextCount = styled.Text`
font-size: 11px;
color: #424040;
`;

const Separator = styled.View`
width: 100%;
height: 1px;
background: #f9f9f9;
`;

const FooterMenu = styled.View`
flex-direction: row;
justify-content: space-between;
padding: 9px 0;
`;

const Button = styled.TouchableOpacity`
flex-direction: row;
`;

const Icon = styled.View`
margin-right: 6px;
`;

const Text = styled.Text`
font-size: 12px;
color: #424040;
`;

const BottomDivider = styled.View`
width: 100%;
height: 9px;
background: #F0F2F5;
`;

const Feed = () => {
    return (
        <>
            <Container>
                <Header>
                    <Row>
                        <Avatar source={require('../assets/user3.jpg')} />

                        <View style={{ paddingLeft: 10 }}>
                            <User>WillTunner</User>
                            <Row>
                                <Time>4:20m</Time>
                                <Entypo name='dot-single' size={12} color='#747476' />
                                <Entypo name='globe' size={10} color='#747476' />
                            </Row>
                        </View>
                    </Row>
                    <Entypo name='dots-three-horizontal' size={15} color='#222121' />
                </Header>

                <Post>
                    Clone um facebook usando React e styledComponents utilizando o NextJs etc....
                </Post>
                <Photo source={require('../assets/post1.jpg')} />

                <Footer>
                    <FooterCount>
                        <Row>
                            <IconCount>
                                <AntDesign name='like1' size={12} color="#FFF" />
                            </IconCount>
                            <TextCount>420 likes</TextCount>
                        </Row>
                        <TextCount>3k comments</TextCount>
                    </FooterCount>

                    <Separator />

                    <FooterMenu>
                        <Button>
                            <Icon>
                                <AntDesign
                                    name='like2'
                                    size={20}
                                    color='#424040'
                                />
                            </Icon>
                            <Text>Like</Text>
                        </Button>

                        <Button>
                            <Icon>
                                <MaterialCommunityIcons
                                    name='comment-outline'
                                    size={20}
                                    color='#424040'
                                />
                            </Icon>
                            <Text>Comment</Text>
                        </Button>

                        <Button>
                            <Icon>
                                <MaterialCommunityIcons
                                    name='share-outline'
                                    size={20}
                                    color='#424040'
                                />
                            </Icon>
                            <Text>Compartilhar</Text>
                        </Button>
                    </FooterMenu>
                </Footer>

                <BottomDivider />

                {/* Fim do primeiro post */}

                <Header>
                    <Row>
                        <Avatar source={require('../assets/user4.jpg')} />

                        <View style={{ paddingLeft: 10 }}>
                            <User>Nikola Tesla</User>
                            <Row>
                                <Time>4:20m</Time>
                                <Entypo name='dot-single' size={12} color='#747476' />
                                <Entypo name='globe' size={10} color='#747476' />
                            </Row>
                        </View>
                    </Row>
                    <Entypo name='dots-three-horizontal' size={15} color='#222121' />
                </Header>

                <Post>
                    Clone um facebook usando React e styledComponents utilizando o NextJs etc....
                </Post>
                <Photo source={require('../assets/post2.jpg')} />

                <Footer>
                    <FooterCount>
                        <Row>
                            <IconCount>
                                <AntDesign name='like1' size={12} color="#FFF" />
                            </IconCount>
                            <TextCount>420 likes</TextCount>
                        </Row>
                        <TextCount>3k comments</TextCount>
                    </FooterCount>

                    <Separator />

                    <FooterMenu>
                        <Button>
                            <Icon>
                                <AntDesign
                                    name='like2'
                                    size={20}
                                    color='#424040'
                                />
                            </Icon>
                            <Text>Like</Text>
                        </Button>

                        <Button>
                            <Icon>
                                <MaterialCommunityIcons
                                    name='comment-outline'
                                    size={20}
                                    color='#424040'
                                />
                            </Icon>
                            <Text>Comment</Text>
                        </Button>

                        <Button>
                            <Icon>
                                <MaterialCommunityIcons
                                    name='share-outline'
                                    size={20}
                                    color='#424040'
                                />
                            </Icon>
                            <Text>Compartilhar</Text>
                        </Button>
                    </FooterMenu>
                </Footer>

                <BottomDivider />

                <Header>
                    <Row>
                        <Avatar source={require('../assets/user5.jpg')} />

                        <View style={{ paddingLeft: 10 }}>
                            <User>Leo D20</User>
                            <Row>
                                <Time>4:20m</Time>
                                <Entypo name='dot-single' size={12} color='#747476' />
                                <Entypo name='globe' size={10} color='#747476' />
                            </Row>
                        </View>
                    </Row>
                    <Entypo name='dots-three-horizontal' size={15} color='#222121' />
                </Header>

                <Post>
                    Clone um facebook usando React e styledComponents utilizando o NextJs etc....
                </Post>
                <Photo source={require('../assets/post2.jpg')} />

                <Footer>
                    <FooterCount>
                        <Row>
                            <IconCount>
                                <AntDesign name='like1' size={12} color="#FFF" />
                            </IconCount>
                            <TextCount>420 likes</TextCount>
                        </Row>
                        <TextCount>3k comments</TextCount>
                    </FooterCount>

                    <Separator />

                    <FooterMenu>
                        <Button>
                            <Icon>
                                <AntDesign
                                    name='like2'
                                    size={20}
                                    color='#424040'
                                />
                            </Icon>
                            <Text>Like</Text>
                        </Button>

                        <Button>
                            <Icon>
                                <MaterialCommunityIcons
                                    name='comment-outline'
                                    size={20}
                                    color='#424040'
                                />
                            </Icon>
                            <Text>Comment</Text>
                        </Button>

                        <Button>
                            <Icon>
                                <MaterialCommunityIcons
                                    name='share-outline'
                                    size={20}
                                    color='#424040'
                                />
                            </Icon>
                            <Text>Compartilhar</Text>
                        </Button>
                    </FooterMenu>
                </Footer>

                <BottomDivider />

                {/* Fim do segundo post */}

            </Container>
        </>
    )
}

export default Feed;
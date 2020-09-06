import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
width: 40px;
height: 40px;
position: relative;
`;

const User = styled.Image`
	width: 40px;
	height: 40px;
	border-radius: 20px;
	border-color: #1777f2;
	border-width: ${props => (props.story ? '3px' : 0)}; /* Se tiver a propriedade story acrescenta essa borda azul no story = true */
`;

const UserActive = styled.View`
width: 15px;
height: 15px;
border-radius: 8px;
background: #4BCB1F;
position: absolute;
bottom: -2px;
right: -2px;
border-width: 2px;
border-color: #FFF;
`;


const Avatar = ({source, online, story}) => {
    return(
        <Container>
            <Container>
			<User source={source} story={story}/>
			{online && <UserActive />}
		</Container>
        </Container>
    )
}

export default Avatar;
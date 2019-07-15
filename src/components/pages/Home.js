import React from 'react';
import Container from 'react-bootstrap/Container';

export const Home = () => (
    <Container fluid>
        <h1  style={titleStyle} className="PageTitle">Hi!</h1>
        <h2>My name is Jerry and I am a software developer.</h2>
        <p>Want to get in touch?</p>
        <img src={require('../../imgs/Component 3 – 2.svg')} alt={'uhoh'}/>
    </Container>
)

const titleStyle = {
    textAlign: 'center',
    fontSize: '100px',
    paddingTop: '100px'
}
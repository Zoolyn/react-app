import React from 'react';
import Container from 'react-bootstrap/Container';

export const Home = () => (
    <>
        <Container style={mainStyle} fluid>
            <h1 className="PageTitle">Hi!</h1>
            <h2>My name is Jerry and I am a software developer.</h2>
            <p><a href={"/about"}><img style={{width:'200px'}} src={require('../../imgs/LMB.svg')} alt={'uhoh'}/></a></p>
        </Container>
        <Container fluid className='contactSection'>
            <p>Want to get in touch?</p>
            <img src={require('../../imgs/Component 3 – 2.svg')} alt={''}/>
        </Container>
    </>
)

const mainStyle = {
    backgroundColor: '#F5F5F5',
    textAlign: 'center',
    height: '80vh',
    width: '100vw',
    paddingTop: '20vh'
}
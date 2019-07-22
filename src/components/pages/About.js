import React from 'react'
import Container from 'react-bootstrap/Container';

export const About = () => (
    <>
        <Container>
            <h1 className="PageTitle">About Me</h1>
            <h2>My name is Jerry Zhu. I am a software developer, I also build and design things for the web!</h2>
            <h3>I am currently a senior at Rutgers University working towards a B.S. in Computer Science and Minor in Economics.</h3>
            <br/>
            <h3>I have spent most of life with a passion for computers and technology, drawn to the possiblilities that technology can bring to the world. This passion would later develop into a passion to persue software development and design. I strive to not only write clear and concise code, but to also to create unique and well-functioning interfaces.</h3>
            <p>Technologies I have worked with:</p>
        </Container>
        <Container fluid className='contactSection'>
            <p>Want to get in touch?</p>
            <img src={require('../../imgs/Component 3 – 2.svg')} alt={'uhoh'}/>
        </Container>
    </>
)
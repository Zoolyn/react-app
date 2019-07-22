import React from 'react'
import Container from 'react-bootstrap/Container';

export const Work = () => (
    <>
        <Container>
            <h1 className="PageTitle">Projects</h1>
            <h2>Check out what I worked on or currently working on below!</h2>
            <p>Song Recommender Application</p>
            <p>JSP, CSS, SQL, AWS, Tomcat</p>
            <p>A web application that allows users to input a song name to be recommended. Users can also view a listed of songs that have been recommended.</p>
            <img src={require('../../imgs/Component.svg')} alt={''}/>
        </Container>
        <Container fluid className='contactSection'>
            <p>Want to get in touch?</p>
            <img src={require('../../imgs/Component 3 – 2.svg')} alt={'uhoh'}/>
        </Container>
    </>
)
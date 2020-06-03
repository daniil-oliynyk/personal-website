import React from 'react'
import styled from 'styled-components'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import BackgroundImage from '../assests/Background4.jpg'



const Styles = styled.div`
    .jumbo {
        background: url(${BackgroundImage});
        height: 100vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-bottom: 0;
        z-index: -3;
        
    }
    .title {
        color: white;
        font-family: Montserrat;
        z-index: 2;
    }
    .location{
        text-decoration: underline;
        font-weight: bold;
    }

`;

export default function Landing(props) {
    return(
        <Styles>
            <Jumbotron fluid className="jumbo">
                <Container>
                    <h1 className="title">Hello World.<br/>
                    My name is <strong>Daniil Oliynyk</strong>. <br/>
                    I'm an aspiring software developer <br/>
                    from <span className="location">Toronto, Canada</span>.                           
                    </h1>
                </Container>
            </Jumbotron>
        </Styles>
    )
}
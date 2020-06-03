import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Styles = styled.div`
    .projects-bg {
        
        
        height: 100vh;
        background-size: cover;
        margin-top: 0px;


    }

    .about-me {
        text-align: center;
        padding-top: 10vh
    }

    .bio {
        padding-top: 3vh
    }
`


export default function Main(props) {
    return(
        <Styles>
            <div className="projects-bg">

                <div className="about-me">
                    <h1> About me</h1>
                    <Row className="bio">
                        <Col>
                            <p>I am a fourth year Computer Science Major at the University of Toronto Mississauga.
                                 I am also doing a double minor in Math and Statistics alongside my major. </p>
                            
                        </Col>
                        <Col> 
                            <p> ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga</p> 
                            <p> ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga</p>
                        </Col>
                    </Row>
                </div>
            
            </div>
            
        </Styles>
    )
    
}

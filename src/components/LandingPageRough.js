import React, { Component } from 'react'
import styled from 'styled-components'
import BackgroundImage from '../assests/Background2.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Styles = styled.div`
    .bg {
        background: url(${BackgroundImage});
        height: 100vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    .helloworld {
        text-align: center;
        color: red;
    }
`

class Landing extends Component {
    render() {
        return(
            <Styles>
                
                <div className="bg">
                    <div className="overlay"></div>
                    <div>
                        <Container>
                            <Row>
                                <Col xs={6}>Hello World</Col>
                            </Row>
                        </Container>
                    </div>
                </div>


            </Styles>


        )


    }
}
export default Landing
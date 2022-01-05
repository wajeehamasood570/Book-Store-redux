import React from 'react'
import { Container, Button, Col, Card } from 'react-bootstrap'
import bookData from './Bookapi'
import { useSelector } from 'react-redux'


const Home = () => {
    const books = useSelector((state) => state.books);
    console.log(bookData);
    return (
        <div>

            <Container>
                <h2 className="sub-header mt-5 text-center">Online Book Bazar</h2>
                {books.map((item) => {
                    return (
                        <>
                            <Col lg={2} xs={4} md={3} sm={12} className="cardd" >
                                <div width='55rem' className="cardstyle">
                                    <Card style={{ width: '100%' }} className="carding">
                                        <img width='80%' src={item.image} />
                                        <Card.Body>
                                            <Card.Title><h4>{item.title}</h4></Card.Title>
                                            <Card.Title><p>{item.author}</p></Card.Title>
                                            <Button  variant="danger">Add Book</Button>
                                        </Card.Body>

                                    </Card>
                                </div>
                            </Col>     </>
                    )
                })}
            </Container>
        </div>
    )
}

export default Home

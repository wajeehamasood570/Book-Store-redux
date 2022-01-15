import React from 'react'
import { Container, Button, Col, Card } from 'react-bootstrap'
import bookData from './Bookapi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Home = () => {
    const books = useSelector((state) => state.books);
    console.log(books);
    if (!books?.length) return <h1 className='homehead'>Oops! No Books in your store :( <br/> Please  <Link className="navlink" to={`/add`}>Add book </Link></h1>

    return (
            <>
                <Container>
                    <h2 className="sub-header mt-5 text-center">Online Book Bazar</h2>

                    {
                        books.map((item) => {
                            return (
                                <>


                                  

                                    <Col lg={2} xs={4} md={3} sm={12} className="cardd" >
                                        <div width='55rem' className="cardstyle">
                                            <Card style={{ width: '100%' }} className="carding">
                                                <img width='80%' src={item.image.url} />
                                                <Card.Body>
                                                    <Card.Title><h4>{item.title}</h4></Card.Title>
                                                    <Card.Title><p>{item.author}</p></Card.Title>
                                                    <Card.Title><p>{item.category}</p></Card.Title>
                                                    <Button variant="danger">Add Book</Button>
                                                </Card.Body>

                                            </Card>
                                        </div>
                                    </Col>
                                </>
                            )
                        })
                    }
                </Container>
            </>

        )
    }



export default Home

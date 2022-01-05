import React,{useState} from 'react'
import { Form, Button, Container, FormControl, InputGroup } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { addBook } from "../store/actions";

const Addbook = () => {
    const [title, settitle] = useState("");
    const [author, setauthor] = useState("");
    const [category, setcategory] = useState("");
    const [image, setimage] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("sda");
        const result = {image, title, author};
        dispatch(addBook(result));
        //{type:'ADDBOOK',payload}
      };
    return (
        <div>

            <Container>
                <br />
                <br />

                <Form onSubmit={handleSubmit} >
                    <h3>Add a new Book!</h3>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Book Image</Form.Label>
                        <br/>
                        <input type='file' onChange={(e) => setimage(e.target.value)}/>
                       

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Book Title:</Form.Label>
                        <Form.Control onChange={(e) => settitle(e.target.value)} type="name" placeholder="Enter book name" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Author Name:</Form.Label>
                        <Form.Control onChange={(e) => setauthor(e.target.value)} type="name" placeholder="Enter author name" />

                    </Form.Group>


                    {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Book category</Form.Label>
                        <br />
                        
                         <input type="radio" id="html" name="fav_language" value="HTML" />
                        <label for="html" className='radio'>HTML</label><br />
                        <input type="radio" id="css" name="fav_language" value="CSS" />
                        <label for="css" className='radio'>CSS</label><br />
                        <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                        <label for="javascript" className='radio'>JavaScript</label>
                        
                       
            
                    </Form.Group> */}




                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Addbook

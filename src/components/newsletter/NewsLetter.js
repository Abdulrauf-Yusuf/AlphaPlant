import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
const NewsLetter = () =>{
    return (
        <Container>
         <Row className="text-center mb-4">
                  <Col>
                  <h1  style={{color:'#0C3C36',borderBottom: '2px solid #0C3C36', display:'inline'}}>Sign Up For Our Newsletter</h1>
                  </Col></Row>
            <Form   className="text-center mb-4">
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Control type="email" placeholder="Enter email"  style={{maxWidth:'49.7rem',display:'grid', margin:'0 auto'}}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="outline-success" type="submit"> Sign Up </Button>
            </Form>
        </Container>
    )
}
export default NewsLetter
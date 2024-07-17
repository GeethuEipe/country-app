import '../../custom.css'

import { Col, Container, Row } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'
import React from 'react'

const Login = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100 custom-padding">
      <Row className="align-items-center justify-content-md-between w-100">
        <Col md={4}>
          <h2 className="fw-bold">Sign In</h2>
          <p>
            New user?
            <Link to="/" className="px-2 text-decoration-none">
              Create an account
            </Link>
          </p>
          <LoginForm />
        </Col>
        <Col md={4} className="d-none d-md-block image">
          <img src="/images/Illustration.png" alt="Welcome illustration" />
        </Col>
      </Row>
    </Container>
  )
}

export default Login

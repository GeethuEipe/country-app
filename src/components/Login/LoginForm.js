import { Button, Form } from 'react-bootstrap'

import React from 'react'
import SocialMedia from '../ui/SocialMedia'
import { login } from '../features/user/userSlice'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = data => {
    console.log(data)
    dispatch(login())
    toast.success('Login successful!')
    setTimeout(() => {
      navigate('/home')
    }, 2000)
  }
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Username or email"
            {...register('email', {
              required: 'Email is required!',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address'
              }
            })}
            className="custom-input mb-4"
          />
          {errors.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'Password is required!',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters long'
              }
            })}
            className="custom-input mb-4"
          />
          {errors.password && (
            <p className="text-danger">{errors.password.message}</p>
          )}
        </Form.Group>
        <div className="form-check custom-checkbox mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="keepSignedIn"
            {...register('keepSignedIn', {
              required: 'You must agree to keep signed in!'
            })}
          />
          <label className="form-check-label" htmlFor="keepSignedIn">
            Keep me signed in
          </label>
          {errors.keepSignedIn && (
            <p className="text-danger">{errors.keepSignedIn.message}</p>
          )}
        </div>
        <Button variant="primary" type="submit" className="custom-button">
          Sign In
        </Button>
        <div className="text-with-borders mb-3">
          <div className="border-left"></div>
          <div className="text">Or Sign in with</div>
          <div className="border-right"></div>
        </div>
        <SocialMedia />
      </Form>
    </>
  )
}

export default LoginForm

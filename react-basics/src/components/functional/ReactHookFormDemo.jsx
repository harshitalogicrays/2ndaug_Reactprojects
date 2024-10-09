import React, { useState } from 'react'
import { Button, Col, FloatingLabel, Form, Image, InputGroup, Row } from 'react-bootstrap'
import  Container  from 'react-bootstrap/Container'
import Image1 from '../../assets/images/login.png'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { useForm } from 'react-hook-form'

const ReactHookFormDemo = () => {
    let [show,setShow] =useState(false)
    let {register,handleSubmit,getValues,formState:{errors}, trigger }=useForm()

    const AddUser=(user)=>{
        // alert(JSON.stringify(getValues()))
        alert(JSON.stringify(user))
    }

    {/* register your input into the hook by invoking the "register" function */}
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
  return (
   <>
    <Container className='p-4 mt-5'>
        <Row>
            <Col xs={4}><Image src={Image1} fluid roundedCircle className='bg-secondary p-3' /></Col>
            <Col>
                <Form onSubmit={handleSubmit(AddUser)}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" {...register('username', {required:"Username is required",minLength:{
                            value:5,message:"Min 5 char"
                        }
                        } )}
                        onBlur={()=>trigger('username')}></Form.Control>
                        {errors.username && <span  className='text-danger'>{errors.username.message}</span>}
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" {...register('email',
                            {required:{value:true,message:'Email is required'},
                            pattern:{
                                value:/^[\w\.]+\@[\w]+\.[a-zA-Z]{2,3}$/,
                                message:"Invalid Email"
                            }
                        }
                        )} onBlur={()=>trigger('email')}></Form.Control>
                         {errors.email && <span  className='text-danger'>{errors.email.message}</span>}
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <InputGroup>
                            <Form.Control type={show ? "text":"password"} name="password"
                            {...register('password',{required:"Password is required",pattern:{
                                value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d]).{6,12}$/,
                                message:"atleast 1 upper, 1lower and 1 digit, min 6 max 12 char"
                            }})} onBlur={()=>trigger('password')}></Form.Control>
                            <Button type="button" variant='info' 
                            onClick={()=>setShow(!show)}>{show ? <BsEye/> : <BsEyeSlash/>} </Button>
                        </InputGroup>
                        {errors.password && <span  className='text-danger'>{errors.password.message}</span>}
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <FloatingLabel label="Confirm Password" className='text-dark'>
                        <Form.Control type="password" name="cpassword"
                        {...register('cpassword',{
                            required:"password is required",
                            validate:(cpwd)=>{
                                let {password} =getValues()
                                return password==cpwd || "password not match"
                            }

                        })} onBlur={()=>trigger('cpassword')} placeholder=''></Form.Control>
                        </FloatingLabel>
                        {errors.cpassword && <span  className='text-danger'>{errors.cpassword.message}</span>}
                    </Form.Group> <div class="d-grid gap-2">
                    <Button type="submit" variant='danger'>Submit</Button>
                    </div>
                </Form>
            </Col>
        </Row>
    </Container>
   </>
  )
}

export default ReactHookFormDemo

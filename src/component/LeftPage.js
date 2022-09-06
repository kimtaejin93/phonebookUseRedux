import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';


const LeftPage = () => {
  const [name,setName]=useState("");
  const [number,setNumber]=useState(0);
  const dispatch=useDispatch();
  const userInfo=(event)=>{
    event.preventDefault();
    dispatch({type:"userInfo",payLoad:{name:name,number:number}})
    console.log(name,number);
  }
  return (
    <Form onSubmit={(event)=>{userInfo(event)}}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" placeholder="이름을 입력하세요" onChange={(e)=>{setName(e.target.value)}} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="forNumber">
        <Form.Label>연락처</Form.Label>
        <Form.Control type="num" placeholder="연락처를 입력하세요" onChange={(e)=>{setNumber(e.target.value)}}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
  )
}

export default LeftPage
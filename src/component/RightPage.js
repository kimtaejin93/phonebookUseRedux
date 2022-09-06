import React from 'react'
import Button from 'react-bootstrap/Button';
import {Form,Row,Col} from 'react-bootstrap/';
import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
const RightPage = () => {
  const [filterName,setFilterName]=useState("");
  console.log(filterName);
  const dispatch=useDispatch()
  const search=(event)=>{
    event.preventDefault();
    dispatch({type:"search",payLoad:filterName});
  }
  return (
    <Form onSubmit={(event)=>search(event)}>
    <Row>
        <Col lg={10}>
            <Form.Control type="text" placeholder="이름을 입력하세요" onChange={(event)=>setFilterName(event.target.value)}/>
        </Col>
        <Col lg={2}>
            <Button variant="primary" type="submit">
            검색
            </Button>
        </Col>
    </Row>
 
</Form>
  )
}

export default RightPage
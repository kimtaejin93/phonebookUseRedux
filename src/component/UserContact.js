import React from 'react'
import {Row,Col} from 'react-bootstrap/';
const UserContact = (props) => {
  return (
    <Row>
    <Col lg={1}>
     <img className="user-img" src="https://api-private.atlassian.com/users/6b5c1609134a5887d7f3ab1b73557664/avatar"></img>
    </Col>
    <Col lg={11}>
        <div>{props.item.name}</div>
        <div>{props.item.number}</div>
        
    </Col>
</Row>
  )
}

export default UserContact
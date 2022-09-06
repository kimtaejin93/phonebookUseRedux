import './App.css';
import LeftPage from './component/LeftPage';
import RightPage from './component/RightPage';
import {Container,Row,Col} from 'react-bootstrap/'
import UserContact from './component/UserContact';
import { useSelector } from 'react-redux/es/exports'; 
function App() {
  const contactList=useSelector(state=>state.contactList);
  const filterName=useSelector(state=>state.filterName);
  const filterList=contactList.filter((word)=>(word.name.includes(filterName)))
  return (
    <Container>
      <h1 className='title'>
        연락처
      </h1>
      <Row>
        <Col>
          <LeftPage/>
        </Col>
        <Col>
          <RightPage/>
          {filterList.map((item)=>(<UserContact item={item}/>))}
          {console.log(contactList)}
          {console.log(filterList)}
        </Col>
      </Row>
    </Container>
  );
}

export default App;

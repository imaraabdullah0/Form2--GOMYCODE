import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Section1.css';

function Section1() {
  return (
   <div className='container1'>
    <div className='who row'>
      <div className='col'>
        <h2 className='h2 '>who i am!</h2>
        <p className='p text-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia optio magni odit amet, nam ab quas similique nostrum eveniet, atque architecto tempore! Omnis consequatur earum temporibus neque, non ipsa eum tempora magni porro alias libero, dolores velit odio sint, excepturi ipsum praesentium optio! Odit repudiandae possimus placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos omnis rerum, necessitatibus autem fugiat alias veniam similique  ?</p>
      </div>
      <div className='form col border rounded'>
      <Form.Group className="mb-3">
        <Form.Label className='text-light'><strong>e-mail</strong></Form.Label>
        <Form.Control placeholder="enter e-mail" disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className='text-light' ><strong>password</strong></Form.Label>
        <Form.Control placeholder="password" disabled />
      </Form.Group>
       <button type="button" class="btn btn-outline-primary">Log In</button>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Can't check this" disabled />
      </Form.Group>
      </div>
    </div>

   </div>
  );
}

export default Section1;
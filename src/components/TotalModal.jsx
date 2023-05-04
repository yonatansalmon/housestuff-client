import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const TotalModal = ({ show, setShow, total, setTotal }) => {
  const [newTotal, setNewTotal] = useState(total);

  const handleTotalChange = async (e) => {
    try {
      const res = await axios.post('http://localhost:8080/api/budget/total/', { total: newTotal });
      console.log(res.data);
      setTotal(res.data.total);
      setShow(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Form.Control type='number' placeholder='Total' value={newTotal} onChange={(e) => setNewTotal(e.target.value)} />
        <Button variant='primary' className='ChangeTotalBtn' onClick={handleTotalChange}>
          Change Total
        </Button>
      </Modal>
    </>
  );
};

export default TotalModal;

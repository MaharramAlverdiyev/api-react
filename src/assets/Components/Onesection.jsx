import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { globalContext } from '../Context/GlobalProvider';

const Onesection = () => {
  const {allApi, loading} = useContext(globalContext)
  console.log(allApi);

  return (
    <section className='d-flex flex-wrap gap-2 justify-content-center p-4'>
       {loading ? "loading...":  allApi.map((item) => {
        return (
          <Card key={item.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      })}
    </section>
  )
}

export default Onesection

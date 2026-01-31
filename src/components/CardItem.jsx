import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';


function CardItem(props) {

  return (
    <Link className="text-decoration-none text-reset" to={`/products/${props.id}`}>
      <Card className="h-100 bg-dark text-light border-secondary shadow-sm" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} className="bg-light p-3"
          style={{ height: "220px", objectFit: "contain" }} />

        <Card.Body className="d-flex flex-column">
          <Card.Title className="fs-6">{props.title}</Card.Title>
          <Card.Text className="text-secondary small">
            {props.desc}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush mt-auto">
          <ListGroup.Item className="bg-dark text-light border-secondary fw-semibold">{props.price}</ListGroup.Item>
        </ListGroup>
      </Card>
    </Link>
  );


}

export default CardItem

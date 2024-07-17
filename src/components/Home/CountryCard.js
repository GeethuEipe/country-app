import { Card } from 'react-bootstrap'
import React from 'react'

const CountryCard = ({ name, region, flag }) => {
  return (
    <Card className="country-card mb-4 mt-4">
      <Card.Body className="d-flex align-items-center gap-4">
        <img src={flag} alt={`${name} flag`} className="country-image" />
        <div className="ml-3">
          <Card.Title className="fw-bold">{name}</Card.Title>
          <Card.Text>{region}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  )
}
export default CountryCard

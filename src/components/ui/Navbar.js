import React from 'react'

const Navbar = ({ handleRegionChange, region }) => {
  const filters = [
    { label: 'All', region: '' },
    { label: 'Asia', region: 'Asia' },
    { label: 'Europe', region: 'Europe' }
    // Add more filters as needed
  ]
  return (
    <div className="d-flex align-items-center justify-content-between ">
      <h4 className="d-none d-md-block fw-bold">Countries</h4>
      <div className="filters mb-3">
        {filters.map((filter, index) => (
          <span
            key={index}
            className={`filter-item d-none d-md-block ${
              region === filter.region ? 'active' : ''
            }`}
            onClick={() => handleRegionChange(filter.region)}>
            {filter.label}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Navbar

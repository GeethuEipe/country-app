import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import CountryCard from './CountryCard'
import Loader from '../ui/Loader'
import MobileMenu from '../ui/MobileMenu'
import Navbar from '../ui/Navbar'
import { fetchCountries } from '../features/countries/countrySlice'

const CountryList = () => {
  const dispatch = useDispatch()
  const { countries, status } = useSelector(state => state.countries)
  const [region, setRegion] = useState('')
  const [loading, setLoading] = useState(false)
  const [visibleCountries, setVisibleCountries] = useState([])
  const [loadCount, setLoadCount] = useState(10)

  useEffect(() => {
    if (status === 'idle') {
      setLoading(true)
      dispatch(fetchCountries())
        .then(() => setLoading(false))
        .catch(() => setLoading(false))
    }
  }, [status, dispatch])

  useEffect(() => {
    setVisibleCountries(
      countries
        .filter(country => (region ? country.region === region : true))
        .slice(0, loadCount)
    )
  }, [countries, region, loadCount])

  const handleRegionChange = selectedRegion => {
    setRegion(selectedRegion)
    setLoadCount(10)
  }
  const handleLoadMore = () => {
    setLoadCount(prevCount => prevCount + 10)
  }

  return (
    <section>
      <div className="d-block d-md-none">
        <MobileMenu handleRegionChange={handleRegionChange} />
      </div>
      <Container className="mt-4">
        <Navbar handleRegionChange={handleRegionChange} region={region} />
        <div style={{ marginTop: '40px' }}>
          {loading ? (
            <Loader />
          ) : (
            <>
              {visibleCountries.length > 0 ? (
                <Row>
                  {visibleCountries.map((country, index) => (
                    <Col md={6} key={index}>
                      <CountryCard
                        name={country.name}
                        region={country.region}
                        flag={country.flag}
                      />
                    </Col>
                  ))}
                </Row>
              ) : (
                <div className="text-center mt-4">
                  <p className="fw-bold">No Data Found!</p>
                </div>
              )}
              {visibleCountries.length < countries.length && (
                <div className="text-center mt-3">
                  <Button className="btn btn-dark" onClick={handleLoadMore}>
                    Load More
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </Container>
    </section>
  )
}

export default CountryList

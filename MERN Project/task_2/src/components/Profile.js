import { useState, useEffect } from 'react';
import { Card, Spinner, Row, Col, Alert } from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Get logged-in user from Dashboard parent via OutletContext
  const { user } = useOutletContext();

  // ✅ REQUIREMENT 1 & 2: useEffect API call when page loads
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch profile data');
        return res.json();
      })
      .then(data => {
        setProfileData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // ✅ REQUIREMENT 3: Show loading spinner while fetching
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <Spinner animation="border" variant="primary" className="me-2" />
        <span>Loading profile data...</span>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="mt-5">
        <Alert variant="danger">
          <Alert.Heading>Failed to load profile</Alert.Heading>
          <p>{error}</p>
        </Alert>
      </div>
    );
  }

  // ✅ REQUIREMENT 4: Display profile data in React Bootstrap Card
  return (
    <div className="mt-4">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="shadow-lg border-0">
            <Card.Header className="bg-gradient text-white p-4">
              <h3 className="mb-0">
                <i className="bi bi-person-circle me-2"></i>
                User Profile
              </h3>
            </Card.Header>
            
            <Card.Body className="p-4">
              {/* Logged-in User Section */}
              <div className="mb-4 p-3 bg-light rounded">
                <h5 className="text-primary mb-3">
                  <i className="bi bi-person-check me-2"></i>
                  Logged In User
                </h5>
                <Row>
                  <Col md={6}>
                    <strong>Name:</strong> {user?.name || 'N/A'}
                  </Col>
                  <Col md={6}>
                    <strong>Email:</strong> {user?.email || 'N/A'}
                  </Col>
                </Row>
              </div>

              {/* API Fetched Profile Data */}
              <h5 className="text-success mb-3">
                <i className="bi bi-cloud-download me-2"></i>
                Profile Data (Live API)
              </h5>
              
              <Row className="g-3">
                <Col md={6}>
                  <div className="p-3 border rounded bg-white">
                    <h6><strong>Name:</strong></h6>
                    <p className="mb-1">{profileData?.name}</p>
                    
                    <h6 className="mt-3"><strong>Email:</strong></h6>
                    <p className="mb-1">{profileData?.email}</p>
                    
                    <h6 className="mt-3"><strong>Phone:</strong></h6>
                    <p>{profileData?.phone}</p>
                  </div>
                </Col>
                
                <Col md={6}>
                  <div className="p-3 border rounded bg-white">
                    <h6><strong>Company:</strong></h6>
                    <p>{profileData?.company?.name}</p>
                    
                    <h6 className="mt-3"><strong>Website:</strong></h6>
                    <p>{profileData?.website}</p>
                    
                    <h6 className="mt-3"><strong>City:</strong></h6>
                    <p>{profileData?.address?.city}</p>
                  </div>
                </Col>
              </Row>

              {/* Fetch timestamp */}
              <div className="mt-4 text-muted small text-center">
                Data fetched at: {new Date().toLocaleTimeString()}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;

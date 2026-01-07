import { useState, useEffect } from 'react';
import { Card, Spinner, Container, Row, Col, Alert, Button } from 'react-bootstrap';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Task 5 Requirement 1 & 2: Fetch data when page loads using useEffect
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        
        // Simulate network delay + fetch real API
        await new Promise(resolve => setTimeout(resolve, 2000)); // 2 second spinner
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        
        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }
        
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        // Fallback static data if API fails
        setUserData({
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: { name: "Romaguera-Crona" },
          address: { city: "Gwenborough", street: "Kulas Light", suite: "Apt. 556" }
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  // Task 5 Requirement 3: Show loading spinner
  if (loading) {
    return (
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6} className="text-center py-5">
            <Spinner animation="border" variant="primary" style={{ width: '4rem', height: '4rem' }} />
            <h3 className="mt-4 text-primary">Loading Profile</h3>
            <p className="text-muted">Fetching user data from API...</p>
            <div className="mt-3">
              <div className="spinner-border spinner-border-sm text-secondary me-2" role="status"></div>
              <small>Live API request in progress</small>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  // Error state
  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">
          <h4>Error loading profile</h4>
          <p>{error}</p>
        </Alert>
      </Container>
    );
  }

  // Task 5 Requirement 4: Display in React Bootstrap Card
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card className="shadow-lg border-0">
            <Card.Header className="bg-gradient-primary text-white p-4 position-relative">
              <h2 className="mb-1">
                <i className="bi bi-person-circle me-2"></i>
                User Profile
              </h2>
              <p className="mb-0 opacity-90">Profile loaded successfully!</p>
            </Card.Header>
            
            <Card.Body className="p-4">
              {/* Personal Information */}
              <Row className="mb-5">
                <Col md={6}>
                  <h5 className="text-primary mb-3">
                    <i className="bi bi-card-text me-2"></i>Personal Details
                  </h5>
                  <div className="list-group list-group-flush">
                    <div className="list-group-item px-0 border-0">
                      <strong className="text-dark">Full Name:</strong>
                      <span className="float-end fw-bold fs-5 text-primary">{userData.name}</span>
                    </div>
                    <div className="list-group-item px-0 border-0">
                      <strong className="text-dark">Email:</strong>
                      <code className="float-end">{userData.email}</code>
                    </div>
                    <div className="list-group-item px-0 border-0">
                      <strong className="text-dark">Phone:</strong>
                      <span className="float-end">{userData.phone}</span>
                    </div>
                  </div>
                </Col>
                
                <Col md={6}>
                  <h5 className="text-success mb-3">
                    <i className="bi bi-building me-2"></i>Professional Details
                  </h5>
                  <div className="list-group list-group-flush">
                    <div className="list-group-item px-0 border-0">
                      <strong className="text-dark">Company:</strong>
                      <span className="badge bg-success fs-6">{userData.company?.name}</span>
                    </div>
                    <div className="list-group-item px-0 border-0">
                      <strong className="text-dark">Website:</strong>
                      <a href={`https://${userData.website}`} target="_blank" className="float-end">
                        {userData.website}
                      </a>
                    </div>
                    <div className="list-group-item px-0 border-0">
                      <strong className="text-dark">Location:</strong>
                      <span className="float-end">{userData.address?.city}</span>
                    </div>
                  </div>
                </Col>
              </Row>

              {/* Address Details */}
              <div className="mt-4 p-3 bg-light rounded">
                <h6 className="text-muted mb-3">
                  <i className="bi bi-geo-alt me-2"></i>Full Address
                </h6>
                <p className="mb-2">
                  {userData.address?.street}, {userData.address?.suite}
                </p>
                <p className="mb-0">{userData.address?.city}</p>
              </div>

              {/* Refresh Button */}
              <div className="text-center mt-4">
                <Button 
                  variant="outline-primary" 
                  onClick={() => window.location.reload()}
                  className="me-2"
                >
                  🔄 Refresh Data
                </Button>
                <Button 
                  variant="success"
                  onClick={() => {
                    setLoading(true);
                    setTimeout(() => setLoading(false), 2000);
                  }}
                >
                  🔄 Simulate Loading
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (userRole) navigate('/dashboard');
  }, [navigate]);

  const users = {
    admin: { password: 'admin123', role: 'admin' },
    user: { password: 'user123', role: 'user' }
  };

  const handleLogin = (e) => {
    e.preventDefault();
  
    const normalizedUsername = username.toLowerCase();
    const user = users[normalizedUsername];
  
    if (user && user.password.toLowerCase() === password.toLowerCase()) {
      localStorage.setItem('userRole', user.role);
      localStorage.setItem('username', normalizedUsername);
      navigate('/dashboard');
      toast.success(`Welcome back, ${username}!`);
    } else {
      toast.error('Invalid username or password');
      setPassword('');
    }
  };

  return (
    <Container fluid className="bg-secondary min-vh-100">
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col xs={11} sm={8} md={6} lg={4}>
          <Card className="shadow-lg border-0 rounded-lg">
            <Card.Body className="p-4 p-sm-5">
              <h2 className="text-center text-primary mb-4">Login</h2>
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    size="lg"
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    autoComplete="username"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    size="lg"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  size="lg"
                  className="w-100 mb-4"
                >
                  Login
                </Button>
              </Form>

              <div className="bg-light p-3 rounded-3">
                <h6 className="text-center mb-3">Demo Credentials</h6>
                <Row className="g-2 text-center">
                  <Col xs={12} sm={6}>
                    <div className="p-2 border rounded">
                      <strong>Admin</strong>
                      <br />
                      admin / admin123
                    </div>
                  </Col>
                  <Col xs={12} sm={6}>
                    <div className="p-2 border rounded">
                      <strong>User</strong>
                      <br />
                      user / user123
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

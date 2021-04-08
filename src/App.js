import { useState } from 'react';
import styled from 'styled-components';
import Scan from './components/Scan';
import ScanForm from './components/ScanForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  gap: 20px;
`;

const mockScan = {
  system: 'test.onapsis.com',
  module: 'TEST_O01',
  status: 'VULNERABLE',
  started: new Date().toISOString(),
  finished: new Date().toISOString(),
  solution:
    'You cannot resolve this vulnerability.\n\nThis is a test purpuse module.\nYou cannot resolve this vulnerability.\n\nThis is a test purpuse module.\nYou cannot resolve this vulnerability.\n\nThis is a test purpuse module.\nYou cannot resolve this vulnerability.\n\nThis is a test purpuse module.\nYou cannot resolve this vulnerability.\n\nThis is a test purpuse module.\nYou cannot resolve this vulnerability.\n\nThis is a test purpuse module.\nYou cannot resolve this vulnerability.\n\nThis is a test purpuse module.\nYou cannot resolve this vulnerability.\n\nThis is a test purpuse module.\nYou cannot resolve this vulnerability.\n\nThis is a test purpuse module.\nYou cannot resolve this vulnerability.\n\nThis is a test purpuse module.\nYou cannot resolve this vulnerability.\n\nThis is a test purpuse module.\nYou cannot resolve this vulnerability.\n\nThis is a test purpuse module.\n',
};

function App() {
  const [scan, setScan] = useState();
  const onSubmit = (values) => {
    console.log(values);
    setScan(mockScan);
    // axios.post(`${REACT_APP_API_URL}/scans`)
    //  .then(res => setScan(response));
  };
  return (
    <Container>
      <h1>Scan Engine UI - Onapsis Code Challenge</h1>
      <ScanForm onSubmit={onSubmit} />
      {scan && <Scan scan={scan} />}
    </Container>
  );
}

export default App;

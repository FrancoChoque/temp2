import moment from 'moment';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 500px;
  box-sizing: border-box;
  padding: 10px;
  height: 300px;
  border: 2px solid #aaa;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
  white-space: pre-wrap;
`;

const StyledStatus = styled.div`
  color: ${({ color }) => color};
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: bold;
`;

const StyledSolution = styled.div`
  color: ${({ color }) => color};
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #aaa;
  overflow: scroll;
  white-space: pre-wrap;
`;

const Scan = ({ scan }) => {
  const statusColor = scan.status === 'VULNERABLE' ? 'red' : 'gray';
  return (
    <Container>
      <StyledHeader>
        <div>{scan.system}</div>
        <div>Module {scan.module}</div>
      </StyledHeader>
      <StyledStatus color={statusColor}>{scan.status}</StyledStatus>
      <div>Started: {moment(scan.started).format('LLL')}</div>
      <div>Finished: {moment(scan.finished).format('LLL')}</div>
      <StyledSolution>{scan.solution}</StyledSolution>
    </Container>
  );
};

// const Scan = ({ scan }) => (
//   <Container>{JSON.stringify(scan, null, '\t')}</Container>
// );

Scan.propTypes = {
  scan: PropTypes.objectOf(PropTypes.any),
};

Scan.defaultProps = {
  scan: {},
};

export default Scan;

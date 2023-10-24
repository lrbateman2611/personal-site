import Container from 'react-bootstrap/esm/Container';

const Age = () => {
  const today = new Date().toDateString();
  const timeDiff = Math.abs(Date.now() - new Date('11/26/1996').getTime());
  const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  return (
    <Container>
      <br />
      <br />
      <span>As of {today}</span>
      <br />
      <span>Lucas is {age}</span>
    </Container>
  );
};
export default Age;

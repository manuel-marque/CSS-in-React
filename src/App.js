import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
  color: #444;
  border: 1px solid #cdcdcd;
  width: 220px;
  height: 220px;
  border-radius: 10px;
  margin: 1em;

`;

const Image = styled.img`
  margin-right: 1em;
  width: 48px;
  height: 48px;
  background-size: 48px 48px;
  background-image: url("https://avatars.githubusercontent.com/u/75366576");
`;
const SubContainer = styled.div`
  width: 8px;
  height: 8px;
  margin-right: 6px;
`;

const Title = styled.h5`
  margin: 0 0 0.25rem;
  color: #252850;
  padding: 10px;
  width: 163px;

`;
const P = styled.p`
  margin: 7px 21px 0.25rem;
  color: #252850;
  font-size: 12px;
  padding: 10px;
  width: 155px;

`;

function App() {
  return (
    <div className="App">
      <Container>
        <Image />
        <SubContainer>
          <Title>Valores predeterminado en formulario</Title>
          <P>Formulario de campos con valores predeterminado</P>
        </SubContainer>
      </Container>
    </div>
  );
}

export default App;

import styled from "styled-components";

const Home = () => (
  <>
    <Title>
      Some Title
    </Title>
    <Main>
      <Par>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Consequatur obcaecati molestiae magni quia suscipit, aliquam
        odio, omnis inventore, sapiente voluptas fugit possimus laboriosam
        nostrum nulla doloribus repellat. Quos, magni nisi!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Consequatur obcaecati molestiae magni quia suscipit, aliquam
        odio, omnis inventore, sapiente voluptas fugit possimus laboriosam
        nostrum nulla doloribus repellat. Quos, magni nisi!
      </Par>
      <Par>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Consequatur obcaecati molestiae magni quia suscipit, aliquam
        odio, omnis inventore, sapiente voluptas fugit possimus laboriosam
        nostrum nulla doloribus repellat. Quos, magni nisi!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Consequatur obcaecati molestiae magni quia suscipit, aliquam
        odio, omnis inventore, sapiente voluptas fugit possimus laboriosam
        nostrum nulla doloribus repellat. Quos, magni nisi!
      </Par>
    </Main>
  </>
);
export default Home;

const Title = styled.h2`
font-size: 30px;
display: flex;
justify-content: center;
`;
const Main = styled.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 0 10%;
`;
const Par = styled.p`
display: flex;
justify-content: center;
`;
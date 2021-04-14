import styled from "styled-components";
import CatCard from "../../components/CatCard";

const Cats = () => {
  const getCats = () => {
    const catArr = [];
    for (let i = 0; i < 24; i++) {
      catArr.push(<CatCard key={i} />)
    }
    return catArr
  }
  return (
    <>
      <PhotoGrid>
        {getCats()}
      </PhotoGrid>
    </>
  )
};
export default Cats;

const PhotoGrid = styled.main`
  display: grid;
  padding: 10px;
  grid-template-columns: 25% 25% 25% 25%;
  @media (max-width: 926px) {
    grid-template-columns: 33% 33% 33%;
  }
  @media (max-width: 734px) {
    grid-template-columns: 50% 50%;
  }
  @media (max-width: 475px) {
    grid-template-columns: 100%;
  }
`;

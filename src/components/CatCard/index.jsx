import { useEffect, useState } from "react";
import styled from "styled-components";
import API from "../../Utils/API";


const CatCard = () => {
  const [imageURL, setImageURL] = useState("")
  useEffect(() => {
    API.get()
      .then((results) => setImageURL(results))
  }, [])
  return (
    <>
      <CatElement>
        <CatImage src={imageURL} />
      </CatElement>
    </>
  )
};
export default CatCard;

const CatImage = styled.img`
  max-height: 200px;
  max-width: 200px;
`;
const CatElement = styled.div`
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  background-color: #00A6FB;
  min-height: 200px;
`;
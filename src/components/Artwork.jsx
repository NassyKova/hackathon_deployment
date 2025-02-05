// import styled from "styled-components"
import { Title, Para } from "./styled/Text";
import Spinner from "./Spinner";
import ArtThumbnailList from "./ArtThumbnailList"

function Artwork(props) {
  const { isLoading, data } = props;

  return (
    <>
      {isLoading ? (
        <div>
          <Para>Loading data...please wait</Para>
          <Spinner />
        </div>
      ) : (
        <div>
          <Title>An assortment of European Paintings</Title>
          <ArtThumbnailList artworkList={data} />

        </div>
      )}
    </>
  );
}

export default Artwork;

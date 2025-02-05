import ArtThumbnail from "./ArtThumbnail"
import { ArtworkList } from "./styled/Artwork.styles"

function ArtThumbnailList(props) {
  
    const {artworkList} = props

    return (
        <>
            <ArtworkList id="artworkList">
                {artworkList.map(artwork => {
                    return (
                        <ArtThumbnail
                            key={artwork.objectID}
                            id={artwork.objectID}
                            title={artwork.title}
                            artist={artwork.artistDisplayName}
                            src={artwork.primaryImageSmall}
                        />
                    )
                })}
            </ArtworkList>
        </>
    )
}

export default ArtThumbnailList
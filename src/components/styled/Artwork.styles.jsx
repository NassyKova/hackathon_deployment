import styled from "styled-components"


export const ArtworkList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: 0 2rem;
`

export const Wrapper = styled.div`
    position: relative;
    margin: 1rem 2rem;
    padding: 0.75rem;
    border-radius: 0.25rem;
    
    h3 {
        margin-top: 0.5rem;
        margin-bottom: 0;
    }

    :hover {
        transform: scale(1.05);
        cursor: pointer; // Mock hyperlink when hovering over artwork
        background-color: #f0f0f0;

        .btn-fav {
            opacity: 1;
        }

    }

    transition: all 0.2s ease-out;
    display: flex;
    flex-direction: column;
    align-items: center;

    .artwork-snippet {
        width: 200px;
    }

    .btn-fav {
        position: absolute;
        top: 0.75rem;
        right: 0.75rem;
        font-size: 1.5rem;
        transition: all 0.2s ease-in-out;
        font-family: 'Inter', sans-serif;
        color: #fff;
        background-color: transparent;
        text-decoration: none;
        border: none;
        opacity: 0;

        :hover {
            color: #7699F0;
            cursor: pointer;
        }
    }
`

export const ThumbnailImage = styled.img`
    background-color: #eee;
    width: 200px;
    max-height: 250px;
`






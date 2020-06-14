import React from 'react';
import Lightbox from 'react-image-lightbox';
import Img from "gatsby-image";
import Tile from './tile';
import styled from 'styled-components';
import { animated } from 'react-spring'
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app


const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-gap: 0.25rem;
  grid-auto-rows: 16rem;

  @media (max-width: ${(props) => props.theme.breakpoints[2]}) {
    grid-template-columns: 1fr;
    grid-auto-rows: 60vw;
  }
`
type Props = {
    images: {
        id: string
        name: string
        publicURL: string
    }[]
  }


const Gallery: React.FunctionComponent<Props> = ({ images }) => {
  const [showImageIndex, setShowImageIndex] = React.useState<number>(0);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

    return (
      <div>
        <Area >
          {images.map((image, index) => (
            <Tile
              key={image.id}
              onClick={() => {
                setShowImageIndex(index);
                setIsOpen(true);
              }}
            >
              <Img alt={image.name} fluid={image.fluid} />
            </Tile>
          ))}
        </Area>

        {isOpen && ( 
          <Lightbox
            imageTitle="NIXLASH"
            animationDuration={500}
            mainSrc={images[showImageIndex].publicURL}
            nextSrc={images[(showImageIndex + 1) % images.length].publicURL}
            prevSrc={images[(showImageIndex + images.length - 1) % images.length].publicURL}
            onCloseRequest={() => {setIsOpen(false)}}
            onMovePrevRequest={() => {setShowImageIndex((showImageIndex + images.length - 1) % images.length)}}
            onMoveNextRequest={() => {setShowImageIndex((showImageIndex + 1) % images.length)}}
          />
        )}
      </div>
    );
}
export default Gallery

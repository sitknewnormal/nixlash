import styled from 'styled-components'

const Tile = styled.div`
  cursor: pointer;
  overflow: hidden;
  position: relative;
  > div {
    position: absolute !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  > div img {
    transition: all 0.3s ease 0s !important;
  }
  &:hover {
    > div img {
      transform: scale(1.1);
    }
  }

`;

export default Tile;
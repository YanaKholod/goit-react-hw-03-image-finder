import React from 'react';
import GalleryItem from 'components/GalleryItem.jsx/GalleryItem';
import PropTypes from 'prop-types';
import { Styled } from './StyleGallery';

const Gallery = ({ images, toggleModal }) => {
  return (
    <>
      <Styled.Wrapper>
        <GalleryItem toggleModal={toggleModal} images={images} />
      </Styled.Wrapper>
    </>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  togleModal: PropTypes.func.isRequired,
};

export default Gallery;

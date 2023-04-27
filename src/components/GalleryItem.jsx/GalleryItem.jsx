import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from './StyleGalleryItem';

const GalleryItem = ({ images, toggleModal }) => {
  return (
    <>
      {images.map(item => (
        <Styled.Item
          key={item.id}
          onClick={() => {
            toggleModal(item.largeImageURL, item.tags);
          }}
        >
          <Styled.ImgItem
            loading="lazy"
            src={item.webformatURL}
            alt={item.tags}
          />
        </Styled.Item>
      ))}
    </>
  );
};

GalleryItem.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GalleryItem;

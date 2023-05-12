import PropTypes from 'prop-types';

export const ingredientType =  PropTypes.shape({
  _id: PropTypes.string,
  calories: PropTypes.number,
  carbohydrates: PropTypes.number,
  fat: PropTypes.number,
  image: PropTypes.string,
  image_large: PropTypes.string,
  image_mobile: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  proteins: PropTypes.number,
  type: PropTypes.string,
});

export const linksType = PropTypes.shape({
  title: PropTypes.string,
  linkName: PropTypes.string,
  path: PropTypes.string,
})
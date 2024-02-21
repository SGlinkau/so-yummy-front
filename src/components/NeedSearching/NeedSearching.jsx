import React from 'react';

import css from './NeedSearching.module.css';

import anySearchImg from '../../images/anySearch/anySearch-1xdesc.png';

const NeedSearching = () => {
  return (
    <div className={css.error}>
      <img
        className={css.error__img}
        src={anySearchImg}
        alt="basket fruits and vegetables"
      />
      <p className={css.error__text}>Try looking for something else...</p>
    </div>
  );
};
export default NeedSearching;

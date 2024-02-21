import React from 'react';
import { FiMail } from 'react-icons/fi';

import css from './SubscribeForm.module.css';

const SubscribeForm = () => {
  return (
    <>
      <form className={css.form}>
        <div className={css.box}>
          <h2 className={css.box__title}>Subscribe to our Newsletter</h2>
          <p className={css.box__text}>
            Subscribe up to our newsletter. Be in touch with latest news and
            special offers, etc.
          </p>
        </div>
        <label className={css.form__label}>
          <FiMail className={css.svg} />
          <input
            className={css.form__input}
            type="email"
            placeholder="Enter your email address"
          />
        </label>
        <button type="submit" className={css.form__button}>
          Subscribe
        </button>
      </form>
    </>
  );
};

export default SubscribeForm;

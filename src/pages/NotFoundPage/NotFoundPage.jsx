import { Container } from 'components/common/Container.styled';
import NotFound from '../../images/SVG/bro404/not-found.svg';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <section className={css.error}>
      <Container>
        <img className={css.img} src={NotFound} alt="Not found" />
        <div className={css.box}>
          <h2 className={css.title}>We are sorry,</h2>
          <p className={css.text}>
            but the page you were looking for can't be found..
          </p>
        </div>
      </Container>
    </section>
  );
};

export default NotFoundPage;

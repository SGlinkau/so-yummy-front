import MainSection from 'components/common/Main/Main';
import { SharedLayoutContainer } from './SharedLayout.styled';
import { Header } from 'components/Header/Header.jsx';
import Footer from 'components/Footer/Footer';

export default function SharedLayout() {
  return (
    <SharedLayoutContainer>
      <Header />
      <MainSection />
      <Footer />
    </SharedLayoutContainer>
  );
}

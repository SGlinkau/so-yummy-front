import { NavLink } from 'react-router-dom';
import { NavButton, NavLinkStyled, NavSection, NavUl, Navi } from './Navigation.styled';
import { ReactComponent as Logo } from '../../../images/SVG/Logo/logo.svg';
import { ReactComponent as Search } from '../../../images/SVG/Search/search.svg';
import { ReactComponent as BurgerButton } from '../../../images/burgerButton.svg';

export const Navigation = () => {
  return (
    <NavSection>
      <Navi>
        <NavLink to="/home">
          <span>
            <Logo />
          </span>
        </NavLink>
        <NavUl>
          <li>
            <NavLinkStyled to="/categories">Categories</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/add">Add recipes</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/my">My recipes</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/favorite">Favorites</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/shopping-list">Shopping list</NavLinkStyled>
          </li>
          <li>
            <NavLink to="/search">
              <span>
                <Search />
              </span>
            </NavLink>
          </li>
        </NavUl>
        <NavButton type="button">
          <BurgerButton />
        </NavButton>
      </Navi>
    </NavSection>
  );
};

import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/logo.png';  // Verify the path is correct
import { FaBars, FaShoppingCart, FaTimes, FaUserCircle } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/UserContext';  // Verify the path is correct
import { fetchBrands, fetchCategories } from '../../hooks/api';

const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const LoginContainer = styled.div`
    display: flex;
    align-items: center;
`;

const LoginTitle = styled.span`
    font-size: 16px;
    color: #333;
    margin-left: 5px; // Ensures spacing between icon and text
`;


const CartLink = styled(Link)`
    display: flex;
    align-items: center;
    color: #333; // Icon color
    position: relative;
`;

const CartCount = styled.span`
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: #dc3545; // Badge background color
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
    font-weight: bold;
`;
const HeaderContainer = styled.header`
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    z-index: 1000;
`;

const SlideMenu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    background: #f7f7f7; // Light grey background for a soft look
    box-shadow: 4px 0 15px rgba(0, 0, 0, 0.2);
    transform: translateX(${props => props.$show ? '0' : '-100%'});
    transition: transform 0.3s ease-in-out;
    z-index: 1500;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-sizing: border-box;
`;

const MenuOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: ${props => props.$show ? 'block' : 'none'};
    z-index: 1400;
    transition: opacity 0.3s ease-in-out;
`;

const MenuItem = styled(Link)`
    padding: 12px 16px;
    font-size: 16px;
    color: #333;
    text-decoration: none;
    border-bottom: 1px solid #eaeaea; // Add a subtle separator between items

    &:hover {
        background-color: #eaeaea; // Hover effect for better user experience
        color: #000;
    }
`;

const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
`;

const LogoImage = styled.img`
    height: 40px;
`;

const LogoText = styled.div`
    margin-left: 10px;
    font-size: 24px;
    font-weight: bold;
    color: #333;
`;

const MenuButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 25px;
    cursor: pointer;

    span {
        display: block;
        width: 25px;
        height: 3px;
        background-color: #333;
        transition: background-color 0.2s;
    }

    &:hover {
        span {
            background-color: #555; // Darken the hamburger lines on hover
        }
    }
`;

const MenuTitle = styled.span`
    margin-left: 10px;
    font-size: 16px;
    color: #333;
`;

const NavIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;


function Header() {
  const { cartItems } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenu, setSubmenu] = useState(''); // 'categories', 'brands', or ''
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    if (submenu === 'categories') {
      fetchCategories().then(r => setCategories(r));
    } else if (submenu === 'brands') {
      fetchBrands().then(r => setBrands(r));
    }
  }, [submenu]);



  const toggleMenu = (event) => {
    event.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setSubmenu('');
  };

  const handleSubmenu = (type) => {
    setSubmenu(type);
  };

  const renderMenuItems = () => {
    if (submenu === 'categories') {
      return [
        <MenuItem key="back" onClick={() => setSubmenu('')}>Back</MenuItem>,
        ...categories.map(cat => <MenuItem key={cat.id} onClick={closeMenu}>{cat.name}</MenuItem>)
      ];
    } else if (submenu === 'brands') {
      return [
        <MenuItem key="back" onClick={() => setSubmenu('')}>Back</MenuItem>,
        ...brands.map(brand => <MenuItem key={brand.id} onClick={closeMenu}>{brand.name}</MenuItem>)
      ];
    } else {
      return [
        { role: 'any', label: 'Display Categories', action: () => handleSubmenu('categories') },
        { role: 'any', label: 'Display Brands', action: () => handleSubmenu('brands') },
        { role: 'any', label: 'About Us', path: '/about' },
        { role: 'guest', label: 'Login', path: '/login' },
        { role: 'guest', label: 'Sign Up', path: '/signup' },
        { role: 'user', label: 'Your Info', path: '/info' },
        { role: 'user', label: 'Your Orders', path: '/orders' },
        { role: 'user', label: 'Delete Account', path: '/delete-account' },
        { role: 'admin', label: 'Add Product', path: '/add-product' }
      ].filter(item =>
        item.role === 'any' ||
        (item.role === 'guest' && !user.isLoggedIn) ||
        (item.role === user.role)
      ).map(item => (
        item.action ?
          <MenuItem key={item.label} onClick={item.action}>{item.label}</MenuItem> :
          <MenuItem key={item.label} as={Link} to={item.path} onClick={closeMenu}>{item.label}</MenuItem>
      ));
    }
  };
  return (
    <HeaderContainer>
      <MenuContainer onClick={toggleMenu}>
        <MenuButton title="Menu">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </MenuButton>
        <MenuTitle>Menu</MenuTitle>
      </MenuContainer>
      <LogoLink to="/">
        <LogoImage src={logoImage} alt="Logo" />
        <LogoText>ElectroMart</LogoText>
      </LogoLink>
      <NavIcons>
        <CartLink to="/cart">
          <FaShoppingCart size={24} />
          {cartItems.length > 0 && (
            <CartCount>{cartItems.reduce((total, item) => total + item.quantity, 0)}</CartCount>
          )}
        </CartLink>
        <LoginContainer as={Link} to="/login">
          <FaUserCircle size={24} />
          <LoginTitle>Login</LoginTitle>
        </LoginContainer>
      </NavIcons>
      {menuOpen && <MenuOverlay $show={menuOpen} onClick={closeMenu} />}
      <SlideMenu $show={menuOpen}>
        {renderMenuItems()}
      </SlideMenu>
    </HeaderContainer>
  );
}

export default Header;
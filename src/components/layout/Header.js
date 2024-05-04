import { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaShoppingCart, FaTimes, FaUserCircle } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/UserContext';
import { fetchBrands, fetchCategories } from '../../hooks/api';
import logoImage from '../../assets/logo.png'; // Verify the path is correct

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const SlideMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background: #f7f7f7;
  box-shadow: 4px 0 15px rgba(0, 0, 0, 0.2);
  transform: translateX(${(props) => (props.$show ? '0' : '-100%')});
  transition: transform 0.3s ease-in-out;
  z-index: 1500;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
`;

const DropdownMenu = styled.div`
  position: absolute;
  background-color: #b5b5b5;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1500;
  right: 0;
  display: none;

  &:hover {
    display: block; // Ensure it remains open while hovering
  }
`;

const DropdownItem = styled.div`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const UserIcon = styled.div`
  position: relative;
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

const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.$show ? 'block' : 'none')};
  z-index: 1400;
  transition: opacity 0.3s ease-in-out;
`;

const MenuItem = styled(Link)`
  padding: 12px 16px;
  font-size: 16px;
  color: #333;
  text-decoration: none;
  border-bottom: 1px solid #eaeaea;

  &:hover {
    background-color: #eaeaea;
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
  width: auto;
  height: auto;
  max-height: 40px;
  max-width: 40px;
`;

const LogoText = styled.div`
  margin-left: 5px;
  font-size: medium;
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenu, setSubmenu] = useState('');
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const { user, logoutUser } = useContext(UserContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (submenu === 'categories') {
      fetchCategories().then((r) => setCategories(r));
    } else if (submenu === 'brands') {
      fetchBrands().then((r) => setBrands(r));
    }
  }, [submenu]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
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
        <MenuItem key='back' onClick={() => setSubmenu('')}>
          Back
        </MenuItem>,
        ...categories.map((cat) => (
          <MenuItem
            key={cat.ID}
            to={`/search/category/${cat.ID}`}
            onClick={closeMenu}
          >
            {cat.name}
          </MenuItem>
        )),
      ];
    } else if (submenu === 'brands') {
      return [
        <MenuItem key='back' onClick={() => setSubmenu('')}>
          Back
        </MenuItem>,
        ...brands.map((brand) => (
          <MenuItem
            key={brand.ID}
            to={`/search/brand/${brand.ID}`}
            onClick={closeMenu}
          >
            {brand.name}
          </MenuItem>
        )),
      ];
    } else {
      return [
        {
          role: 'any',
          label: 'Display Categories',
          action: () => handleSubmenu('categories'),
        },
        {
          role: 'any',
          label: 'Display Brands',
          action: () => handleSubmenu('brands'),
        },
        { role: 'any', label: 'About Us', path: '/about' },
        {
          role: 'guest',
          label: 'Login',
          path: '/login',
        },
        { role: 'guest', label: 'Sign Up', path: '/signup' },
        { role: 'user', label: 'Your Orders', path: '/orders' },
        {
          role: 'admin',
          label: 'edit Product',
          path: '/product/edit',
        },
        {
          role: 'admin',
          label: 'edit category',
          path: '/category/edit',
        },
        {
          role: 'admin',
          label: 'edit brand',
          path: '/brand/edit',
        },
      ]
        .filter(
          (item) =>
            item.role === 'any' ||
            (item.role === 'guest' && !user.isLoggedIn) ||
            item.role === user.role,
        )
        .map((item) =>
          item.action ? (
            <MenuItem key={item.label} onClick={item.action}>
              {item.label}
            </MenuItem>
          ) : (
            <MenuItem
              key={item.label}
              as={Link}
              to={item.path}
              onClick={closeMenu}
            >
              {item.label}
            </MenuItem>
          ),
        );
    }
  };

  const handleNavigatingToProfile = () => {
    console.log('profile clicked');
    navigate('/profile');
  };

  const UserControls = () => {
    if (user.isLoggedIn) {
      return (
        <UserIcon onClick={toggleDropdown}>
          <LoginContainer>
            <FaUserCircle size={24} />
            <LoginTitle>{user.username}</LoginTitle>
          </LoginContainer>
          <DropdownMenu
            ref={dropdownRef}
            style={{ display: dropdownOpen ? 'block' : 'none' }}
          >
            <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
            <DropdownItem onClick={handleNavigatingToProfile}>
              Profile
            </DropdownItem>
          </DropdownMenu>
        </UserIcon>
      );
    } else {
      return (
        <Link to='/login'>
          <LoginContainer>
            <FaUserCircle size={24} />
            <LoginTitle>Login</LoginTitle>
          </LoginContainer>
        </Link>
      );
    }
  };

  return (
    <HeaderContainer>
      <MenuContainer onClick={toggleMenu}>
        <MenuButton title='Menu'>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </MenuButton>
        <MenuTitle>Menu</MenuTitle>
      </MenuContainer>
      <LogoLink to='/'>
        <LogoImage src={logoImage} alt='Logo' />
        <LogoText>ElectroMart</LogoText>
      </LogoLink>
      <NavIcons>
        <CartLink to='/cart'>
          <FaShoppingCart size={24} />
          {cartItems.length > 0 && (
            <CartCount>
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </CartCount>
          )}
        </CartLink>
        <UserControls />
      </NavIcons>
      {menuOpen && <MenuOverlay $show={menuOpen} onClick={closeMenu} />}
      <SlideMenu $show={menuOpen}>{renderMenuItems()}</SlideMenu>
    </HeaderContainer>
  );
}

export default Header;

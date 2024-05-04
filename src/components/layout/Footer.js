import styled from 'styled-components';

// Styled components for the footer
const FooterContainer = styled.footer`
  background-color: #8c979e; // Dark background for footer
  color: #fff; // White text color for contrast
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  line-height: 1.5;
  padding: 20px 0; // Adjust padding for better spacing
  font-size: 14px;
`;

const FooterText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
`;

const SocialLinks = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

const Link = styled.a`
  color: #fff;
  font-size: 20px;
  transition: color 0.3s;
  margin: 0 15px;

  &:hover {
    color: #f8d210; // Gold color on hover
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>© 2024 ElectroMart, Inc. All rights reserved.</FooterText>
      <SocialLinks>
        <Link href='#' aria-label='Facebook'>
          <i className='fa fa-facebook'></i>
        </Link>
        <Link href='#' aria-label='Twitter'>
          <i className='fa fa-twitter'></i>
        </Link>
        <Link href='#' aria-label='Instagram'>
          <i className='fa fa-instagram'></i>
        </Link>
      </SocialLinks>
    </FooterContainer>
  );
}

export default Footer;

import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(
    135deg,
    #010101,
    #324a21
  ); // Gradient from Black to Green
  color: #ffffff; // White text for contrast
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3); // Enhanced shadow for depth
  line-height: 1.5;
  padding: 20px 0; // Consistent padding for better spacing
  font-size: 14px;
  font-family: 'Clear Sans', sans-serif; // Clear Sans for body text
`;

const FooterText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family: 'Jaturat', sans-serif; // Jaturat for titles
`;

const SocialLinks = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  animation: fadeInAnimation 1s ease-out 1; // Smooth fade-in effect
`;

const Link = styled.a`
  color: #ffffff; // High readability with white
  font-size: 20px;
  transition: color 0.3s ease-in-out; // Smooth transition for hover effects
  margin: 0 15px;
  &:hover {
    color: #258b76; // Aqua from your palette for hover effects
    background: linear-gradient(
      45deg,
      #6bfff7,
      #fafb63
    ); // Turquoise to Yellow gradient on hover
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: scale(1.1); // Slight scale up on hover for emphasis
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

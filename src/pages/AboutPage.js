import styled from 'styled-components';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// Styled components to enhance the appearance of the About page
const AboutContainer = styled.div`
  padding: 20px;
  text-align: center; // Centers the text
  min-height: 70vh; // Ensures the content takes up at least 70% of the viewport height
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #000000 55%, #324a21 100%);
  // Gradient background using your color palette
`;

const Title = styled.h1`
  color: #ffffff; // White text for better contrast against the dark background
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  color: #fafb63; // Yellow from your palette for a bright, attention-grabbing subtitle
  font-weight: normal;
`;

function AboutPage() {
  return (
    <>
      <Header />
      <AboutContainer>
        <Title>About Us</Title>
        <Subtitle>This Page is coming soon...</Subtitle>
      </AboutContainer>
      <Footer />
    </>
  );
}

export default AboutPage;

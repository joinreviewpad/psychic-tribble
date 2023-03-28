import styled from 'styled-components';
import Page from 'components/Page';
import { media } from 'utils/media';
import FormSection from 'views/ContactPage/FormSection';
import InformationSection from 'views/ContactPage/InformationSection';

export default function GetQuote() {
  return (
    <Page title="Get quote" description="In facilisis sem in finibus sodales. Nulla eu leo sit amet ligula porttitor ultrices.">
      <p>In sagittis, lectus sed fringilla tempor, mauris eros posuere magna, id posuere felis tortor id mauris. Praesent faucibus libero ac placerat ornare. Pellentesque id aliquam ipsum. Morbi eleifend ullamcorper eros, et auctor eros pellentesque sed. Nullam tempor tincidunt erat ut feugiat. Nullam feugiat, turpis in mollis pulvinar, urna tortor semper ex, nec cursus est leo et nisi. Aenean pellentesque pulvinar justo, quis egestas elit mollis ac.</p>
      <ContactContainer>
        <InformationSection />
        <FormSection />
      </ContactContainer>
    </Page>
  );
}

const ContactContainer = styled.div`
  display: flex;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;

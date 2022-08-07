import styled from '@emotion/styled';

const Header = styled.h1`
  --start-color: #7928ca;
  --end-color: #ff0080;
  font-size: clamp(1rem, -0.875rem + 8.333vw, 3.5rem);
  letter-spacing: -0.05em;
  margin: 0;
  font-weight: 700;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
    160deg,
    var(--start-color),
    var(--end-color)
  );
`;

export default Header;

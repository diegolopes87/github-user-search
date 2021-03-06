import styled from "styled-components";

const StyledHeader = styled.section`
  display: flex;
  height: 32px;
  justify-content: space-between;
  align-items: center;
  p {
    color: ${(props) => props.theme.color};
    font-size: 26px;
    font-weight: bold;
    font-family: "Space Mono", monospace;
  }
`;

export { StyledHeader };

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Grid } from 'semantic-ui-react';

const StyledLink = styled(Link)`
  width: 100%;
`

const StyledGrid = styled(Grid.Row)`
  padding-top: 2em;
`
export {
  StyledLink,
  StyledGrid
};
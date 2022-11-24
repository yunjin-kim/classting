import { Theme } from 'types/utils';

declare module 'styled-components' {
  // eslint-disable-next-line no-unused-vars
  interface DefaultTheme extends Theme {}
}

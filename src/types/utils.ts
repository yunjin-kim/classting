import { ColorList } from 'styles/colorList';

export type Theme = {
  color: ColorList;
};

export type StyledDefaultProps = Record<'theme', Theme>;

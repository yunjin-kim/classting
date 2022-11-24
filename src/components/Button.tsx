import styled, { css } from 'styled-components';

import { Colors } from 'styles/colorList';
import { QuizType } from 'types/quiz';
import { StyledDefaultProps } from 'types/utils';

interface Props {
  backColor?: Colors;
  hoverBackColor?: Colors;
  fontColor?: Colors;
  value?: QuizType;
  onClick?: () => void;
  children: string;
}

interface ButtonProps extends StyledDefaultProps {
  backColor: Colors;
  hoverBackColor: Colors;
}

interface TextProps extends StyledDefaultProps {
  fontColor: Colors;
}

const Button = ({
  backColor = 'GREEN',
  hoverBackColor = 'LIGHT_GREEN',
  fontColor = 'WHITE',
  onClick,
  children,
}: Props) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <S.Container onClick={handleClick} backColor={backColor} hoverBackColor={hoverBackColor}>
      <S.Text fontColor={fontColor}>{children}</S.Text>
    </S.Container>
  );
};

const S = {
  Container: styled.button`
    width: fit-content;
    height: fit-content;
    border: none;
    border-radius: 0.875rem;
    padding: 1rem 0.875rem;
    cursor: pointer;
    ${({ theme, backColor, hoverBackColor }: ButtonProps) => css`
      box-shadow: 0.0625rem 0.0625rem 0.3125rem ${theme.color.GRAY};
      background-color: ${theme.color[backColor]};
      :hover {
        background-color: ${theme.color[hoverBackColor]};
      }
    `};
  `,

  Text: styled.p`
    font-size: 1rem;
    font-weight: 700;
    ${({ theme, fontColor }: TextProps) => css`
      color: ${theme.color[fontColor]};
    `};
  `,
};

export default Button;

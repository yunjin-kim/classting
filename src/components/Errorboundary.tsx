import { Component, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';

import Button from 'components/Button';

interface ErrorBoundaryState {
  showError: boolean;
}
class ErrorBoundary extends Component<PropsWithChildren, ErrorBoundaryState> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = {
      showError: false,
    };
    this.handleErrorReset = this.handleErrorReset.bind(this);
  }

  handleErrorReset() {
    this.setState({ showError: false });
  }

  static getDerivedStateFromError() {
    return {
      showError: true,
    };
  }

  render() {
    const { children } = this.props;

    if (this.state.showError) {
      return (
        <S.Container>
          <p>예상치 못한 에러가 발생하였습니다.</p>
          <Link to="/">
            <Button onClick={this.handleErrorReset}>홈으로 가기</Button>
          </Link>
        </S.Container>
      );
    }

    return children;
  }
}
const S = {
  Container: styled.div`
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 26.25rem;
    height: 100vh;
    margin: auto;
    padding: 1.875rem 1.25rem;
    ${({ theme }) => css`
      border: 0.0625rem solid ${theme.color.LIGHT_GRAY};
      box-shadow: 0.0625rem 0.0625rem 0.3125rem ${theme.color.GRAY};
    `};
  `,
};

export default ErrorBoundary;

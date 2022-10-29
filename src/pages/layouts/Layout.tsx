import { Outlet } from 'react-router-dom';
import { css } from '@emotion/react';

const Layout = () => {
  return (
    <>
      <div style={{ color: 'red' }} css={layout}>
        レイアウト
        <span className="test">span</span>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;

const layout = css`
  font-weight: 700;

  .test {
    font-weight: 400;
  }
`;

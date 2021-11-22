import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';
import styles from '@components/Menu/Main.module.scss'

const ActiveLink = ({ router, href, children }) => {
  const isCurrentPath = router.pathname === href || router.asPath === href;

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  (function prefetchPages() {
    if (typeof window !== 'undefined') router.prefetch(router.pathname);
  })();

  return (
    <a
      className={styles.active}
      href={href}
      onClick={handleClick}
      style={{

        fontWeight: isCurrentPath ? 'bold' : 'normal', // I left mine all bold
        color: isCurrentPath ? '#414141' : '#B4B4B4',
      }}>
      {children}
    </a>
  );
};

ActiveLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default withRouter(ActiveLink);
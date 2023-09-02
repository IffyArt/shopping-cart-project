import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Navbar from '../Navbar';
import styles from './styles.module.css';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

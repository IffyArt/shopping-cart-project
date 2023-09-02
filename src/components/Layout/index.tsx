import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Navbar from '../Navbar';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

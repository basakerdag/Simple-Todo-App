import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../Bağlantı/HesapBaglantisi';

const NavigateIcin = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to='/' />;
  }

  return children;
};

export default NavigateIcin;
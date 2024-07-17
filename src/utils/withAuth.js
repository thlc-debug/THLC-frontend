"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [token, setToken] = useState(null);
    const [guestUser, setGuestUser] = useState(null);

    useEffect(() => {
      const accessToken = localStorage.getItem('token');
      const guestUser = localStorage.getItem('guestUser')
      setToken(accessToken);
      setGuestUser(guestUser)

      if (!accessToken && !guestUser) {
        router.replace('/guest-page');
      }
    }, [router]);

    if (!token && !guestUser) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;

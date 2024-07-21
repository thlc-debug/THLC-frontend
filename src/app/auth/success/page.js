'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthSuccess = () => {
  const router = useRouter();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get('token');

    if (token) {
      localStorage.setItem('token', token);
      router.push('/');
    } else {
      router.push('/auth/failure');
    }
  }, [router]);

  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

export default AuthSuccess;

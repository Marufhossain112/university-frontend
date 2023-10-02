import { authKey } from '@/constants/auth';
import { getUserInfo } from '@/services/auth.service';
import React from 'react';

export default function StudentPage() {
  const getUser = getUserInfo(authKey);
  console.log(getUser);
  return (
    <div>StudentPage</div>
  );
}

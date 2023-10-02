import LoginPage from '@/components/login/login';
import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
    title: "UMS | Login"
};
export default function Login() {
    return (
        <LoginPage></LoginPage>
    );
}

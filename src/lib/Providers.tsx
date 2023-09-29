"use client";
import { store } from '@/app/redux/store';
import React from 'react';
import { Provider } from 'react-redux';

export default function Providers({ children }: { children: React.ReactNode; }) {
    return <Provider store={store}>{children}</Provider>;
}

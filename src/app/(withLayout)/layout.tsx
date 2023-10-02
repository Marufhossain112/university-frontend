"use client";
import Contents from '@/components/ui/Contents';
import Sidebar from '@/components/ui/Sidebar';
import { isLoggedIn } from '@/services/auth.service';
import { Layout } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
    const userLoggedIn = isLoggedIn();
    const router = useRouter();
    const [isLoading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        if (!userLoggedIn) {
            router.push("/login");
        }
        setLoading(true);
    }
        , [router, isLoading, userLoggedIn]);
    if (!isLoading) {
        return <p>Loading..................</p>;
    }
    return (
        <Layout hasSider>
            <Sidebar />
            <Contents>{children}</Contents>
        </Layout>
    );
}

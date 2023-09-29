import Contents from '@/components/ui/Contents';
import Sidebar from '@/components/ui/Sidebar';
import { Layout } from 'antd';
import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
    return (
        <Layout hasSider>
            <Sidebar />
            <Contents>{children}</Contents>
        </Layout>
    );
}

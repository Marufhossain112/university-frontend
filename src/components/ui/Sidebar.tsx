"use client";
import { Layout, Menu, MenuProps } from 'antd';
import React, { useState } from 'react';

import { sidebarItems } from '@/constants/sidebarItems';
import { getUserInfo } from '@/services/auth.service';
const { Sider } = Layout;
export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    // const role = USER_ROLE.ADMIN;
    const { role } = getUserInfo() as any;
    console.log(role);
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
            width={280}
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'sticky',
                left: 0,
                top: 0,
                bottom: 0
            }}
        >
            {/* <div className="demo-logo-vertical" /> */}
            <div style={{
                color: 'white',
                fontSize: '2rem',
                textAlign: 'center',
                fontWeight: 'bold',
                marginBottom: '1rem'
            }}>UMS</div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={sidebarItems(role)} />
        </Sider>
    );
}

"use client";
import React from 'react';
import { Layout } from 'antd';
import Header from './Header';
const { Content } = Layout;
export default function Contents({ children }: { children: React.ReactNode; }) {

    const base = "admin";
    return (
        <Content style={{
            minHeight: "100vh",
            color: "black"
        }}>
            <Header></Header>

            {children}
        </Content>
    );
};;

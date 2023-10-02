"use client";
import React from 'react';
import { Layout } from 'antd';
import UmBreadCrumb from './UmBreadCrumb';
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
            <UmBreadCrumb items={[
                {
                    label: `${base}`,
                    link: `/${base}`
                },
                {
                    label: "student",
                    link: `/${base}/student`
                },
            ]} />
            {children}
        </Content>
    );
};;

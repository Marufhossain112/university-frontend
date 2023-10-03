"use client";
import UmBreadCrumb from '@/components/ui/UmBreadCrumb';
import { getUserInfo } from '@/services/auth.service';
import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

export default function ManageStudent() {
    const { role } = getUserInfo() as any;
    return (
        <>
            <UmBreadCrumb items={[
                {
                    label: `${role}`,
                    link: `/${role}`
                },
            ]} />
            <h1>Manage Admin Page</h1>
            <Link href={"/super_admin/admin/create"}>
                <Button>Create</Button>
            </Link>
        </>
    );
}


"use client";
import UMTable from '@/components/ui/UMTable';
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
            <h1>Manage Department Page</h1>
            <Link href={"/super_admin/department/create"}>
                <Button>Create</Button>
            </Link>
            <UMTable></UMTable>
        </>
    );
}


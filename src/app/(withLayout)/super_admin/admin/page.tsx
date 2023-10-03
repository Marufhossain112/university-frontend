"use client";
import ActionBar from '@/components/ui/ActionBar';
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
            <ActionBar title='Manage Admin Page'>
                <Link href={"/super_admin/admin/create"}>
                    <Button>Create</Button>
                </Link>
            </ActionBar>
        </>
    );
}


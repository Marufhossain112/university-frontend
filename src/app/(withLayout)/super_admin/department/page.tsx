"use client";
import { useDepartmentsQuery } from '@/app/redux/api/departmentApi';
import UMTable from '@/components/ui/UMTable';
import UmBreadCrumb from '@/components/ui/UmBreadCrumb';
import { getUserInfo } from '@/services/auth.service';
import { Button } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';

export default function ManageDepartment() {
    const query: Record<string, any> = {};
    const [size, setSize] = useState<number>(10);
    const [page, setPage] = useState<number>(1);
    query["limit"] = size;
    query["page"] = page;
    const { data, isLoading } = useDepartmentsQuery({ ...query });
    // const { departments, meta } = data;

    const { role } = getUserInfo() as any;
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            sorter: (a: any, b: any) => a.age - b.age,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Action',
            render: function (data: any) {
                return <Button onClick={() => console.log(data)} type='primary' danger>X</Button>;
            }
        },
    ];
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];
    const onPaginationChange = (page: number, pageSize: number) => {
        console.log("page", page, "pageSize", pageSize);
    };
    const onTableChange = (pagination: any, filter: any, sorter: any) => {
        const { order, field } = sorter;
        console.log(order, field);
    };
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
            <UMTable loading={false} columns={columns} dataSource={dataSource} pageSize={15}
                totalPage={100}
                showSizeChanger={true}
                onChange={onPaginationChange} onTableChange={onTableChange}></UMTable >
        </>
    );
}


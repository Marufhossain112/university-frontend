"use client";
import dayjs from 'dayjs';
import { useDeleteDepartmentMutation, useDepartmentsQuery } from '@/app/redux/api/departmentApi';
import UMTable from '@/components/ui/UMTable';
import UmBreadCrumb from '@/components/ui/UmBreadCrumb';
import { getUserInfo } from '@/services/auth.service';
import { Button, Input, message } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
import { DeleteOutlined, EyeOutlined, EditOutlined, ReloadOutlined } from '@ant-design/icons';
import ActionBar from '@/components/ui/ActionBar';
import { useDebounced } from '@/app/redux/hooks';
export default function ManageDepartment() {
    const query: Record<string, any> = {};
    const [size, setSize] = useState<number>(10);
    const [page, setPage] = useState<number>(1);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    query["limit"] = size;
    query["page"] = page;
    query["sortBy"] = sortBy;
    query["sortOrder"] = sortOrder;
    // query["searchTerm"] = searchTerm;
    const [deleteDepartment] = useDeleteDepartmentMutation();
    const deleteHandler = async (id: string) => {
        message.loading("Deleting...");
        try {
            await deleteDepartment(id);
            message.success("Department deleted successfully.");
        } catch (err: any) {
            console.error(err.message);
            message.error(err.message);
        }
    };
    const debouncedTerm = useDebounced({
        searchQuery: searchTerm,
        delay: 600
    });

    if (!!debouncedTerm) {
        query["searchTerm"] = debouncedTerm;
    }
    const { data, isLoading } = useDepartmentsQuery({ ...query });
    const departments = data?.departments;
    const meta = data?.meta;
    const { role } = getUserInfo() as any;
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'CreatedAt',
            dataIndex: 'createdAt',
            render: function (data: any) {
                return data && dayjs(data).format("MMM D, YYYY hh:mm A");
            },
            sorter: true
        },
        {
            title: 'Action',
            render: function (data: any) {
                return <>
                    <Link href={`/super_admin/department/edit/${data?.id}`}>
                        <Button style={{ margin: "0 5px" }} onClick={() => console.log(data)} type='primary' ><EditOutlined /></Button>
                    </Link>
                    <Button onClick={() => deleteHandler(data?.id)} type='primary' danger><DeleteOutlined /></Button>
                </>;
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
    const resetFilters = () => {
        setSortBy("");
        setSortOrder("");
        setSearchTerm("");
    };
    const onPaginationChange = (page: number, pageSize: number) => {
        setPage(page);
        setPage(pageSize);
    };
    const onTableChange = (pagination: any, filter: any, sorter: any) => {
        const { order, field } = sorter;
        setSortBy(field);
        setSortOrder(order === "ascend" ? "asc" : "desc");
    };
    return (
        <>
            <UmBreadCrumb items={[
                {
                    label: `${role}`,
                    link: `/${role}`
                },
            ]} />
            <h1></h1>
            <ActionBar title='Manage Department List'>
                <Input onChange={(e) => setSearchTerm(e.target.value)} type='text' size='large' placeholder='Search...' style={{ width: "20%" }} />
                <div>
                    <Link href={"/super_admin/department/create"}>
                        <Button type='primary'>Create</Button>
                    </Link>
                    {
                        (!!sortBy || !!sortOrder || !!searchTerm) && (
                            <Button onClick={resetFilters} type='primary' style={{ margin: "0px 5px" }}>
                                <ReloadOutlined />
                            </Button>
                        )
                    }
                </div>
            </ActionBar>
            <UMTable loading={false} columns={columns} dataSource={departments} pageSize={size}
                totalPage={meta?.total}
                showSizeChanger={true}
                onChange={onPaginationChange} onTableChange={onTableChange}></UMTable >
        </>
    );
}

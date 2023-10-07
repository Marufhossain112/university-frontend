"use client";
import { Button, Table } from 'antd';
import React from 'react';
export default function UMTable() {
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
    const paginationConfig = {
        pageSize: 5,
        total: 10,
        pageSizeOptions: [5, 10, 15, 20],
        showSizeChanger: true,
        onChange: onPaginationChange
    };
    const onTableChange = (pagination: any, filter: any, sorter: any) => {
        const { order, field } = sorter;
        console.log(order, field);
    };
    return (
        <Table loading={false} dataSource={dataSource} columns={columns} pagination={paginationConfig} onChange={onTableChange} />
    );
}

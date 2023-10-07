"use client";
import { Table } from 'antd';
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
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
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
    const onChangeSize = (page: number, pageSize: number) => {
        console.log("page", page, "pageSize", pageSize);
    };
    return (
        <Table loading={false} dataSource={dataSource} columns={columns} pagination={{
            pageSize: 5,
            total: 10,
            pageSizeOptions: [5, 10, 15, 20],
            showSizeChanger: true,
            onChange: onChangeSize
        }} />
    );
}

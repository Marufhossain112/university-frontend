"use client";
import { Table } from 'antd';
import React from 'react';
type IUMTableProps = {
    loading?: boolean;
    columns: any,
    dataSource: any, pageSize?: number;
    totalPage?: number;
    showSizeChanger?: boolean;
    onChange?: (page: number, pageSize: number) => void;
    onTableChange?: (pagination: any, filter: any, sorter: any) => void;
    onPaginationChange?: (page: number, pageSize: number) => void;
    showPagination?: boolean;
};

export default function UMTable({ columns, loading = false, dataSource, pageSize, totalPage, showSizeChanger = true, onTableChange, onPaginationChange, showPagination = true }: IUMTableProps) {
    const paginationConfig = showPagination ? {
        pageSize: pageSize,
        total: totalPage,
        pageSizeOptions: [5, 10, 15, 20],
        showSizeChanger: showSizeChanger,
        onChange: onPaginationChange
    } : false;
    return (
        <Table loading={false} dataSource={dataSource} columns={columns} pagination={paginationConfig} onChange={onTableChange} />
    );
}

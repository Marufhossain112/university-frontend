import { Row, Space, Spin } from 'antd';
import React from 'react';
export default function Loading() {
    return (
        <Row
            justify="center"
            align="middle"
            style={{
                height: "100vh",
            }}
        >
            <Space>
                <Spin tip="Loading" size="large"></Spin>
            </Space>
        </Row>
    );
}

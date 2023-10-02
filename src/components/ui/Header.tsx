import React from 'react';
import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { removeUserInfo } from '@/services/auth.service';
import { authKey } from '@/constants/auth';
import { useRouter } from 'next/navigation';
const { Header: AntHeader } = Layout;
export default function Header() {
    const router = useRouter();
    const logout = () => {
        removeUserInfo(authKey);
        router.push("/login");
    };
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                    <Button type='text' onClick={logout} danger>Logout</Button>
            ),
        },
    ];

    return (
        <AntHeader>
            <Row justify={'end'}>
                <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                    {/* <Button> */}
                    <Space wrap size={16}>
                        <Avatar size="large" icon={<UserOutlined />} />
                    </Space>
                    {/* </Button> */}
                </Dropdown>
            </Row>
        </AntHeader>
    );
}

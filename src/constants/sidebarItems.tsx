import { MenuProps } from 'antd';
import {
    UserOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
export default function sidebarItems(role: string) {
    const defaultSidebarItems: MenuProps["items"] = [
        {
            label: "Profile",
            key: "profile",
            icon: <UserOutlined></UserOutlined>,
            children: [{
                label: "Account Profile",
                key: "profile",
            },
            {
                label: "Change Password",
                key: "Change-Password",
            }
            ],
        }
    ];
    const adminSidebarItems: MenuProps["items"] = [
        {
            label: <Link href={`/${role}/manage-student`}>Manage Students</Link>,
            key: "manage-students",
        }
    ];
    if (role === 'student') return defaultSidebarItems;
    else if (role === 'admin') return adminSidebarItems;
}

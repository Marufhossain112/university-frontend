import { Breadcrumb } from 'antd';
import Link from 'next/link';
import {
    HomeOutlined
} from "@ant-design/icons";
export default function UmBreadCrumb({ items }: {
    items: {
        label: string,
        link: string;
    }[];
}) {
    const breadCrumbItems = [
        {
            title: (
                <Link href="/">
                    <HomeOutlined />
                </Link>
            )
        }, ...items.map((item: any) => {
            return {
                title: item.link ? (
                    <Link href={item.link}>{item.label}</Link>
                ) : (
                    <span>{item.label}</span>
                )
            };
        })
    ];
    return (
        <Breadcrumb items={breadCrumbItems}></Breadcrumb>
    );
}


"use client";
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
            <h1>Manage Student Page</h1>
            <Link href={"/super_admin/manage-student/create"}>
                <Button>Create</Button>
            </Link>
        </>
    );
}





// "use client";

// import UmBreadCrumb from "@/components/ui/UmBreadCrumb";
// import { getUserInfo } from "@/services/auth.service";

// import { Button } from "antd";
// import Link from "next/link";

// const ManageStudentsPage = () => {
//     const { role } = getUserInfo() as any;
//     return (
//         <div>
//             <UmBreadCrumb
//                 items={[
//                     {
//                         label: `${role}`,
//                         link: `/${role}`,
//                     },
//                 ]}
//             />
//             <h1>Student List</h1>
//             <Link href="/super_admin/manage-student/create">
//                 <Button type="primary">Create</Button>
//             </Link>
//         </div>
//     );
// };

// export default ManageStudentsPage;

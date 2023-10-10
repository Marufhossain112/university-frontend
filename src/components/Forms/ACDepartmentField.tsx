// import React from 'react';
// import FormSelectField from './FormSelectField';
// import { useAcademicDepartmentsQuery } from '@/app/redux/api/academic/departmentApi';
// type ACDepartmentFieldProps = {
//     name: string;
//     label: string;
//     onChange: (e: any) => void;
// };
// export default function ACDepartmentField({ name, label, onChange }: ACDepartmentFieldProps) {
//     const { data } = useAcademicDepartmentsQuery({ limit: 100, page: 1 });
//     const academicDepartments = data?.academicDepartments;
//     const academicOptions = academicDepartments?.map((acDepartment) => {
//         return {
//             label: acDepartment.title,
//             value: acDepartment.id
//         };
//     });
//     return (
//         <FormSelectField
//             name={name}
//             label={label}
//             //@ts-ignore
//             options={academicOptions as SelectOptions[]}
//             // handleChange={(e) => onChange(e)}
//             handleChange={(e) => onChange(e)}
//         />
//     );
// }


import { useAcademicDepartmentsQuery } from "@/app/redux/api/academic/departmentApi";
import FormSelectField, { SelectOptions } from "./FormSelectField";
type ACDepartmentFieldProps = {
    name: string;
    label?: string;
    onChange: (e: any) => void;
};
const ACDepartmentField = ({
    name,
    label,
    onChange,
}: ACDepartmentFieldProps) => {
    const { data, isLoading } = useAcademicDepartmentsQuery({
        limit: 100,
        page: 1,
    });
    const academicDepartments = data?.academicDepartments;
    const acDepartmentOptions = academicDepartments?.map((acDepartment) => {
        return {
            label: acDepartment?.title,
            value: acDepartment?.id,
        };
    });

    return (
        <FormSelectField
            name={name}
            label={label}
            options={acDepartmentOptions as SelectOptions[]}
            handleChange={(e) => onChange(e)}
        />
    );
};
export default ACDepartmentField;

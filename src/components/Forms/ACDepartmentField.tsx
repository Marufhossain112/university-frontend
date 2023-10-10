import React from 'react';
import FormSelectField from './FormSelect';
import { useAcademicDepartmentsQuery } from '@/app/redux/api/academic/departmentApi';
type ACDepartmentFieldProps = {
    name: string;
    label: string;
};
export default function ACDepartmentField({ name, label }: ACDepartmentFieldProps) {
    const { data } = useAcademicDepartmentsQuery({ limit: 100, page: 1 });
    const academicDepartments = data?.academicDepartments;
    const academicOptions = academicDepartments?.map((acDepartment) => {
        return {
            label: acDepartment.title,
            value: acDepartment.id
        };
    });
    return (
        <FormSelectField
            name={name}
            label={label}
            //@ts-ignore
            options={academicOptions as SelectOptions[]}
        />
    );
}

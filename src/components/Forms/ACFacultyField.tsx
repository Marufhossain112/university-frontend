import React from 'react';
import FormSelectField from './FormSelectField';
import { useAcademicFacultiesQuery } from '@/app/redux/api/academic/facultyApi';
type ACFacultyFieldProps = {
    name: string;
    label: string;
};
export default function ACFacultyField({ name, label }: ACFacultyFieldProps) {
    const { data, isLoading } = useAcademicFacultiesQuery({ limit: 100, page: 1 });
    const academicFaculties = data?.academicFaculties;
    const academicOptions = academicFaculties?.map((acFaculty) => {
        return {
            label: acFaculty.title,
            value: acFaculty.id
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

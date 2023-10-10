import React from 'react';
import FormMultiSelectField from './FormMultiSelectField';
import { useCoursesQuery } from '@/app/redux/api/courseApi';
import { SelectOptions } from './FormSelectField';
type OfferedCourseProps = {
    name: string;
    label: string;
};
export default function OfferedCourseField({ name, label }: OfferedCourseProps) {
    const { data, isLoading } = useCoursesQuery({ limit: 10, page: 1 });
    const courses = data?.courses;
    const coursesOptions = courses?.map(course => {
        return {
            label: course?.title,
            value: course?.id
        };
    });
    return (
        <FormMultiSelectField name={name} label={label} options={coursesOptions as SelectOptions[]}></FormMultiSelectField>
    );
}

import StudentInfo from '@/components/StudentInfo/StudentInfo';
import StepperForm from '@/components/ui/StepperForm';
import React from 'react';

export default function CreateStudentPage() {
    const steps = [
        {
            title: 'Student information',
            content: <StudentInfo />,
        },
        {
            title: 'Basic information',
            content: <StudentInfo />,
        },
        {
            title: 'Guardian information',
            content: <StudentInfo />,
        },
        {
            title: 'Local Guardian information',
            content: <StudentInfo />,
        },

    ];

    return (
        <>
            <h1>Create Student</h1>
            <StepperForm steps={steps} />
        </>
    );
}

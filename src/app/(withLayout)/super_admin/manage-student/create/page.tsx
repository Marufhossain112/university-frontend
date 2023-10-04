"use client";
import GuardianInfo from '@/components/StudentInfo/GuardianInfo';
import LocalGuardianInfo from '@/components/StudentInfo/LocalGuardianInfo';
import StudentBasicInfo from '@/components/StudentInfo/StudentBasicInfo';
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
            content: <StudentBasicInfo />,
        },
        {
            title: 'Guardian information',
            content: <GuardianInfo />,
        },
        {
            title: 'Local Guardian information',
            content: <LocalGuardianInfo />,
        },
    ];
    return (
        <>
            <h1>Create Student</h1>
            <StepperForm steps={steps} />
        </>
    );
}

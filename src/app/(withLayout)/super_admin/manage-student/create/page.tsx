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
    const handleSubmitHandler = async (data: any) => {
        try {
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <h1>Create Student</h1>
            <StepperForm submitHandler={(value) => handleSubmitHandler(value)} steps={steps} />
        </>
    );
}

"use client";

import { useAddStudentWithFormDataMutation } from "@/app/redux/api/studentApi";
import GuardianInfo from "@/components/StudentInfo/GuardianInfo";
import LocalGuardianInfo from "@/components/StudentInfo/LocalGuardianInfo";
import StudentBasicInfo from "@/components/StudentInfo/StudentBasicInfo";
import StudentInfo from "@/components/StudentInfo/StudentInfo";
import StepperForm from "@/components/ui/StepperForm";
import UmBreadCrumb from "@/components/ui/UmBreadCrumb";
import { message } from "antd";

const CreateStudentPage = () => {
    const [addStudentWithFormData] = useAddStudentWithFormDataMutation();
    const steps = [
        {
            title: "Student Information",
            content: <StudentInfo />,
        },
        {
            title: "Basic Information",
            content: <StudentBasicInfo />,
        },
        {
            title: "Guardian Information",
            content: <GuardianInfo />,
        },
        {
            title: "Local Guardian Information",
            content: <LocalGuardianInfo />,
        },
    ];

    const handleStudentSubmit = async (values: any) => {
        console.log("student values", values);
        const obj = { ...values };
        const file = obj["file"];
        delete obj["file"];
        const data = JSON.stringify(obj);
        const formData = new FormData();
        formData.append("file", file as Blob);
        formData.append("data", data);
        message.loading("Creating...");
        try {
            const res = await addStudentWithFormData(formData);
            if (!!res) {
                message.success("Student created successfully!");
            }
        } catch (err: any) {
            console.error(err.message);
        }
    };

    const base = "admin";
    return (
        <div>
            <UmBreadCrumb
                items={[
                    { label: `${base}`, link: `/${base}` },
                    { label: "manage-student", link: `/${base}/manage-student` },
                ]}
            />
            <h1 style={{ margin: "10px 0px" }}>Create Student</h1>
            <StepperForm
                persistKey="student-create-form"
                submitHandler={(value) => {
                    handleStudentSubmit(value);
                }}
                steps={steps}
            />
        </div>
    );
};

export default CreateStudentPage;

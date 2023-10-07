"use client";
import { useAddDepartmentMutation } from '@/app/redux/api/departmentApi';
import FormInput from '@/components/Forms/FormInput';
import Form from '@/components/Forms/Forms';
import UmBreadCrumb from '@/components/ui/UmBreadCrumb';
import { Button, Col, Row, message } from 'antd';
import React from 'react';
export default function CreateDepartmentPage() {
    const [addDepartment] = useAddDepartmentMutation();
    const onSubmit = async (data: any) => {
        message.loading("Loading...");
        try {
            console.log(data);
            await addDepartment(data);
            message.success("Department created successfully.");
        } catch (err: any) {
            console.error(err.message);
            message.error(err.message);
        }
    };
    const base = "super_admin";
    return (
        <div>
            <UmBreadCrumb
                items={[
                    { label: `${base}`, link: `/${base}` },
                    { label: "department", link: `/${base}/department` },
                ]}
            />
            <h1>Create Department</h1>
            <Form submitHandler={onSubmit}>
                <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                    <Col span={8} style={{ margin: "10px 0" }}>
                        <FormInput name="title" label="Title" />
                    </Col>
                </Row>
                <Button type="primary" htmlType="submit">
                    add
                </Button>
            </Form>
        </div>
    );
}

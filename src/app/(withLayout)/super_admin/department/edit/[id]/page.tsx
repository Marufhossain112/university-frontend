"use client";
import { useDepartmentQuery } from '@/app/redux/api/departmentApi';
import FormInput from '@/components/Forms/FormInput';
import Form from '@/components/Forms/Forms';
import ActionBar from '@/components/ui/ActionBar';
import UmBreadCrumb from '@/components/ui/UmBreadCrumb';
import { Button, Col, Row, message } from 'antd';
import React from 'react';
type IDProps = {
    params: any;
};
export default function EditDepartmentPage({ params }: IDProps) {
    const onSubmit = async (data: any) => {
        message.loading("Updating...");
        try {
            console.log(data);
            message.success("Department updated successfully.");
        } catch (err: any) {
            console.error(err.message);
            message.error(err.message);
        }
    };
    // console.log(params);
    const { id } = params;
    const { data, isLoading } = useDepartmentQuery(id);
    // console.log(data);
    const defaultValues = { title: data?.title || "" };
    
    return (
        <div>
            <UmBreadCrumb items={[
                {
                    label: `super_admin`,
                    link: `/super_admin`
                },
                {
                    label: `department`,
                    link: `/super_admin/department`
                },
            ]} />
            <ActionBar title='Update Department' />
            <Form submitHandler={onSubmit} defaultValues={defaultValues}>
                <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                    <Col span={8} style={{ margin: "10px 0" }}>
                        <FormInput name="title" label="Title" />
                    </Col>
                </Row>
                <Button type="primary" htmlType="submit">
                    Update
                </Button>
            </Form>
        </div>
    );
}

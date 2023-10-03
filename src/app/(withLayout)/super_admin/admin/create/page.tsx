"use client";
import FormInput from '@/components/Forms/FormInput';
import Form from '@/components/Forms/Forms';
import { Col, Row } from 'antd';
import React from 'react';
export default function CreateStudentPage() {
    const onsubmit = (data: any) => {
        console.log(data);
    };
    return (
        <>
            <h1>Create Admin </h1>
            <Form submitHandler={onsubmit}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={8}>
                        <FormInput type='text' size='large' name='firstName' label='First Name' />
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <FormInput type='text' size='large' name='middleName' label='Middle Name' />
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <FormInput type='text' size='large' name='lastName' label='Last Name' />
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <FormInput type='password' size='large' name='password' label='Password' />
                    </Col>
                </Row>
            </Form>
        </>

    );
}

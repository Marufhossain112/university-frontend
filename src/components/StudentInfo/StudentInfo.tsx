"use client";
import React from 'react';
import { Col, Row } from 'antd';
import FormInput from '../Forms/FormInput';
import FormSelectField from '../Forms/FormSelect';
import { acDepartmentOptions, acSemesterOptions, facultyOptions } from '@/constants/global';
export default function StudentInfo() {
    return (
        <>
            <div>
                <div
                    style={{
                        border: "1px solid #d9d9d9",
                        borderRadius: "5px",
                        padding: "15px",
                        marginBottom: "10px",
                    }}
                >
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" style={{
                            marginBottom: "10px",
                        }} span={6} >
                            <FormInput type='text' size='large' name='admin.name.firstName' label='First Name' />
                        </Col>
                        <Col className="gutter-row" style={{
                            marginBottom: "10px",
                        }} span={6}>
                            <FormInput type='text' size='large' name='admin.name.middleName' label='Middle Name' />
                        </Col>
                        <Col className="gutter-row" style={{
                            marginBottom: "10px",
                        }} span={6}>
                            <FormInput type='text' size='large' name='admin.name.lastName' label='Last Name' />
                        </Col>
                        <Col className="gutter-row" style={{
                            marginBottom: "10px",
                        }} span={6}>
                            <FormInput type='password' size='large' name='password' label='Password' />
                        </Col>
                        <Col className="gutter-row" style={{
                            marginBottom: "10px",
                        }} span={8}>
                            <FormSelectField name='admin.academicDepartment' size='large' options={acDepartmentOptions} placeholder='Select' label='Academic Department' />
                        </Col>
                        <Col className="gutter-row" style={{
                            marginBottom: "10px",
                        }} span={8}>
                            <FormSelectField name='admin.academicFaculty' size='large' options={facultyOptions} placeholder='Select' label='Academic Faculty' />
                        </Col>
                        <Col className="gutter-row" style={{
                            marginBottom: "10px",
                        }} span={8}>
                            <FormSelectField name='admin.academicSemester' size='large' options={acSemesterOptions} placeholder='Select' label='Academic Semester' />
                        </Col>
                    </Row>
                </div>
                {/* </Form> */}
            </div>
        </>
    );
}

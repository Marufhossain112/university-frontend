"use client";
import { useDepartmentsQuery } from '@/app/redux/api/departmentApi';
import FormDatePicker from '@/components/Forms/FormDatePicker';
import FormInput from '@/components/Forms/FormInput';
import FormSelectField from '@/components/Forms/FormSelect';
import FormTextArea from '@/components/Forms/FormTextArea';
import Form from '@/components/Forms/Forms';
import UmBreadCrumb from '@/components/ui/UmBreadCrumb';
import UploadImage from '@/components/ui/Upload';
import { bloodGroupOptions, genderOptions } from '@/constants/global';
import { adminSchema } from '@/schemas/adminSchema';
import { getUserInfo } from '@/services/auth.service';
import { IDepartments } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Col, Row } from 'antd';
import React from 'react';
export default function CreateAdminPage() {
    const { role } = getUserInfo() as any;
    const onsubmit = (data: any) => {
        console.log(data);
    };
    const { data, isLoading } = useDepartmentsQuery({ limit: 100, page: 1 });
    //@ts-ignore
    const departments: IDepartments[] = data?.departments;
    // console.log("departments", departments);
    const departmentOptions =
        departments &&
        departments?.map((department) => {
            return {
                label: department?.title,
                value: department?.id,
            };
        });

    return (
        <>
            <UmBreadCrumb
                items={[
                    {
                        label: "super_admin",
                        link: "/super_admin",
                    },
                    {
                        label: "admin",
                        link: "/super_admin/admin",
                    },
                ]}
            />
            <h1>Create Admin </h1>
            <div>
                <Form submitHandler={onsubmit} resolver={yupResolver(adminSchema)}>
                    {/* admin Information */}
                    <div
                        style={{
                            border: "1px solid #d9d9d9",
                            borderRadius: "5px",
                            padding: "15px",
                            marginBottom: "10px",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "18px",
                                marginBottom: "10px",
                            }}
                        >
                            Admin Information
                        </p>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col className="gutter-row" style={{
                                marginBottom: "10px",
                            }} span={8} >
                                <FormInput type='text' size='large' name='admin.name.firstName' label='First Name' />
                            </Col>
                            <Col className="gutter-row" style={{
                                marginBottom: "10px",
                            }} span={8}>
                                <FormInput type='text' size='large' name='admin.name.middleName' label='Middle Name' />
                            </Col>
                            <Col className="gutter-row" style={{
                                marginBottom: "10px",
                            }} span={8}>
                                <FormInput type='text' size='large' name='admin.name.lastName' label='Last Name' />
                            </Col>
                            <Col className="gutter-row" style={{
                                marginBottom: "10px",
                            }} span={8}>
                                <FormInput type='password' size='large' name='password' label='Password' />
                            </Col>
                            <Col className="gutter-row" style={{
                                marginBottom: "10px",
                            }} span={8}>
                                <FormSelectField name='admin.gender' size='large' options={genderOptions} placeholder='Select' label='Gender' />
                            </Col>
                            <Col className="gutter-row" style={{
                                marginBottom: "10px",
                            }} span={8}>
                                <FormSelectField name='admin.managementDepartment' size='large' options={departmentOptions} placeholder='Select' label='Department' />
                            </Col>
                            <Col className="gutter-row" style={{
                                marginBottom: "10px",
                            }} span={8}>
                                <UploadImage name="file"></UploadImage>
                            </Col>
                        </Row>
                    </div>
                    {/* basic Information */}
                    <div
                        style={{
                            border: "1px solid #d9d9d9",
                            borderRadius: "5px",
                            padding: "15px",
                            marginBottom: "10px",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "18px",
                                marginBottom: "10px",
                            }}
                        >
                            Basic Information
                        </p>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col
                                className="gutter-row"
                                span={8}
                                style={{
                                    marginBottom: "10px",
                                }}
                            >
                                <FormInput
                                    type="email"
                                    name="admin.email"
                                    size="large"
                                    label="Email address"
                                />
                            </Col>
                            <Col
                                className="gutter-row"
                                span={8}
                                style={{
                                    marginBottom: "10px",
                                }}
                            >
                                <FormInput
                                    type="text"
                                    name="admin.contactNo"
                                    size="large"
                                    label="Contact No."
                                />
                            </Col>
                            <Col
                                className="gutter-row"
                                span={8}
                                style={{
                                    marginBottom: "10px",
                                }}
                            >
                                <FormInput
                                    type="text"
                                    name="admin.emergencyContactNo"
                                    size="large"
                                    label="Emergency Contact No."
                                />
                            </Col>
                            <Col
                                className="gutter-row"
                                span={8}
                                style={{
                                    marginBottom: "10px",
                                }}
                            >
                                <FormSelectField
                                    size="large"
                                    name="admin.bloodGroup"
                                    options={bloodGroupOptions}
                                    label="Blood group"
                                    placeholder="Select"
                                />
                            </Col>
                            <Col
                                className="gutter-row"
                                span={8}
                                style={{
                                    marginBottom: "10px",
                                    width: "100%"
                                }}
                            >
                                <FormDatePicker name="admin.dateOfBirth" size='large' label='Date of Birth' />
                            </Col>
                            <Col
                                className="gutter-row"
                                span={8}
                                style={{
                                    marginBottom: "10px",
                                }}
                            >
                                <FormInput
                                    type="text"
                                    name="admin.designation"
                                    size="large"
                                    label="Designation"
                                />
                            </Col>
                            <Col span={12} style={{ margin: "10px 0" }}>
                                <FormTextArea
                                    name="admin.presentAddress"
                                    label="Present address"
                                    rows={4}
                                />
                            </Col>
                            <Col span={12} style={{ margin: "10px 0" }}>
                                <FormTextArea
                                    name="admin.permanentAddress"
                                    label="Permanent address"
                                    rows={4}
                                />
                            </Col>
                        </Row>
                    </div>

                    <Button htmlType='submit' type="primary">Create</Button>
                </Form>
            </div>
        </>

    );
}

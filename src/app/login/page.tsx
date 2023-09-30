"use client";
import React from 'react';
import { Button, Col, Row } from 'antd';
import loginImage from "../../assets/Login-bro.svg";
import Image from 'next/image';
import FormInput from '@/components/Forms/FormInput';
import Form from '@/components/Forms/Forms';
import { SubmitHandler } from 'react-hook-form';
type FormValues = {
    id: string,
    password: string;
};
export default function LoginPage() {
    const onSubmit: SubmitHandler<FormValues> = (data: any) => {
        try {
            console.log(data);
        } catch (error) {

        }

    };
    return (
        <Row>
            <Col sm={12} md={16} lg={18}>
                <Image src={loginImage} width={500} alt='Login image'></Image>
            </Col>
            <Col sm={12} md={8} lg={8}>
                <h1>First login your account</h1>
                <div>
                    <Form submitHandler={onSubmit}>
                        <div>
                            <FormInput name='id' type='text' size='large' label='user id' />
                        </div>
                        <div>
                            <FormInput name='password' type='password' size='large' label='password' />
                        </div>
                        <Button type='primary' htmlType='submit'>Login</Button>
                    </Form>
                </div>
            </Col>
        </Row >
    );
}


// "use client";
// import { Button, Col, Input, Row } from "antd";
// import loginImage from "../../assets/Login-bro.svg";
// import Image from "next/image";
// import FormInput from "@/components/Forms/FormInput";
// import { SubmitHandler } from "react-hook-form";
// import Form from "@/components/Forms/Forms";

// type FormValues = {
//     id: string;
//     password: string;
// };

// const LoginPage = () => {
//     const onSubmit: SubmitHandler<FormValues> = (data) => {
//         try {
//             console.log(data);
//         } catch (err) { }
//     };
//     return (
//         <Row
//             justify="center"
//             align="middle"
//             style={{
//                 minHeight: "100vh",
//             }}
//         >
//             <Col sm={12} md={16} lg={10}>
//                 <Image src={loginImage} width={500} alt="login image" />
//             </Col>
//             <Col sm={12} md={8} lg={8}>
//                 <h1
//                     style={{
//                         margin: "15px 0px",
//                     }}
//                 >
//                     First login your account
//                 </h1>
//                 <div>
//                     <Form submitHandler={onSubmit}>
//                         <div>
//                             <FormInput name="id" type="text" size="large" label="User Id" />
//                         </div>
//                         <div
//                             style={{
//                                 margin: "15px 0px",
//                             }}
//                         >
//                             <FormInput
//                                 name="password"
//                                 type="password"
//                                 size="large"
//                                 label="User Password"
//                             />
//                         </div>
//                         <Button type="primary" htmlType="submit">
//                             Login
//                         </Button>
//                     </Form>
//                 </div>
//             </Col>
//         </Row>
//     );
// };

// export default LoginPage;

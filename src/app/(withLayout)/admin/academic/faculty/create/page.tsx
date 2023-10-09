"use client";
import { useAddAcademicFacultyMutation } from "@/app/redux/api/academic/facultyApi";
import FormInput from "@/components/Forms/FormInput";
import Form from "@/components/Forms/Forms";
import UmBreadCrumb from "@/components/ui/UmBreadCrumb";
import { Button, Col, Row, message } from "antd";
const CreateACFacultyPage = () => {
    const [addAcademicFaculty] = useAddAcademicFacultyMutation();
    const onSubmit = async (data: any) => {
        message.loading("Creating.....");
        try {
            console.log(data);
            const res = await addAcademicFaculty(data);
            if (!!res) {
                message.success("Academic Faculty Created Successfully");
            }
        } catch (err: any) {
            console.error(err.message);
            message.error(err.message);
        }
    };
    const base = "admin";
    return (
        <div>
            <UmBreadCrumb
                items={[
                    { label: `${base}`, link: `/${base}` },
                    { label: "academic-faculty", link: `/${base}/academic/faculty` },
                ]}
            />
            <h1>Create Academic Faculty</h1>
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
};
export default CreateACFacultyPage;

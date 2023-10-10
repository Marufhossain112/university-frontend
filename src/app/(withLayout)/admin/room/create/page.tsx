"use client";
import { useBuildingsQuery } from "@/app/redux/api/buildingApi";
import { useAddRoomMutation } from "@/app/redux/api/roomApi";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelect";
import Form from "@/components/Forms/Forms";
import UmBreadCrumb from "@/components/ui/UmBreadCrumb";
import { Button, Col, Row, message } from "antd";
const CreateRoomPage = () => {
    const [addRoom] = useAddRoomMutation();
    const { data, isLoading } = useBuildingsQuery({
        limit: 100,
        page: 1,
    });
    const buildings = data?.buildings;
    const buildingOptions = buildings?.map((building) => {
        return {
            label: building?.title,
            value: building?.id,
        };
    });

    const onSubmit = async (data: any) => {
        message.loading("Creating.....");
        try {
            // console.log(data);
            const res = await addRoom(data).unwrap();
            if (res?.id) {
                message.success("Room created successfully");
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
                    { label: "room", link: `/${base}/room` },
                ]}
            />
            <h1>Create Room</h1>
            <Form submitHandler={onSubmit}>
                <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                    <Col span={8} style={{ margin: "10px 0" }}>
                        <div style={{ margin: "10px 0px" }}>
                            <FormInput name="roomNumber" label="Room No." />
                        </div>
                        <div style={{ margin: "10px 0px" }}>
                            <FormInput name="floor" label="Floor" />
                        </div>
                        <div style={{ margin: "10px 0px" }}>
                            <FormSelectField
                                size="large"
                                name="buildingId"
                                //@ts-ignore
                                options={buildingOptions as SelectOptions[]}
                                label="Building"
                                placeholder="Select"
                            />
                        </div>
                    </Col>
                </Row>
                <Button type="primary" htmlType="submit">
                    add
                </Button>
            </Form>
        </div>
    );
};

export default CreateRoomPage;

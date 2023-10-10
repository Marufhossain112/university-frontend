"use client";
import React, { ReactElement, useEffect, useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import { FormProvider, useForm } from 'react-hook-form';
import { getFromLocalStorage, setToLocalStorage } from '@/utils/local-storage';
interface ISteps {
    title: string,
    content: ReactElement | React.ReactNode;
}
interface IStepsForm {
    steps: ISteps[];
    persistKey: string;
    submitHandler: (el: any) => void;
}
const StepperForm = ({ steps, submitHandler, persistKey }: IStepsForm) => {
    const [current, setCurrent] = useState<number>(
        !!getFromLocalStorage("step") ? Number(JSON.parse(getFromLocalStorage("step") as string).step) : 0
    );
    const [savedValues, setSavedValues] = useState(
        !!getFromLocalStorage(persistKey) ? (JSON.parse(getFromLocalStorage(persistKey) as string)) : ""
    );
    useEffect(() => {
        setToLocalStorage("step", JSON.stringify({ step: current }));
    }, [current]);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({ key: item.title, title: item.title }));
    const methods = useForm({ defaultValues: savedValues });
    const watch = methods.watch();
    useEffect(() => {
        setToLocalStorage(persistKey, JSON.stringify(watch));
    }, [watch, persistKey, methods]);
    const { handleSubmit, reset } = methods;
    const handleStudentSubmit = (data: any) => {
        submitHandler(data);
        reset();
        // setToLocalStorage("step", JSON.stringify({ step: 0 }));
        setToLocalStorage("step", JSON.stringify({ step: 0 }));
        setToLocalStorage(persistKey, JSON.stringify({}));
    };
    return (
        <>
            <Steps current={current} items={items} />
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(handleStudentSubmit)}>
                    <div >{steps[current].content}</div>
                    <div style={{ marginTop: 24 }}>
                        {current < steps.length - 1 && (
                            <Button type="primary" onClick={() => next()}>
                                Next
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button type="primary"
                                htmlType="submit"
                                onClick={() => message.success('Processing complete!')}>
                                Done
                            </Button>
                        )}
                        {current > 0 && (
                            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                                Previous
                            </Button>
                        )}
                    </div>
                </form>
            </FormProvider>
        </>
    );
};
export default StepperForm;














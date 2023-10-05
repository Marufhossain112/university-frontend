"use client";
import React, { ReactElement, ReactNode } from 'react';
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

type FormConfig = {
    defaultValues?: Record<string, any>;
    resolver?: any;
};
type FormProps = {
    children?: ReactElement | ReactNode;
    submitHandler: SubmitHandler<any>;
} & FormConfig;
export default function Form({ children, submitHandler, defaultValues, resolver }: FormProps) {
    const FormConfig: FormConfig = {};
    if (!!defaultValues) FormConfig["defaultValues"] = defaultValues;
    if (!!resolver) FormConfig["resolver"] = resolver;
    const methods = useForm<FormProps>(FormConfig);
    const { handleSubmit, reset } = methods;
    const onSubmit = (data: any) => { submitHandler(data), reset(); };
    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    );
}

"use client";
import { getErrorByPropertyName } from "@/utils/schema-validator";
import { Input } from "antd";
import { error } from "console";
import { useFormContext, Controller } from "react-hook-form";
interface IInput {
    name: string;
    type?: string;
    size?: "large" | "small";
    value?: string | string[] | undefined;
    id?: string;
    placeholder?: string;
    validation?: object;
    label?: string;
}

const FormInput = ({
    name,
    type,
    size,
    value,
    placeholder,
    label,
}: IInput) => {
    const { control, formState: { errors } } = useFormContext();
    const errorMessage = getErrorByPropertyName(errors, name);
    return (
        <>
            {label ? label : null}
            <Controller
                control={control}
                name={name}
                render={({ field }) =>
                    type === "password" ? (
                        <Input.Password
                            type={type}
                            size={size}
                            placeholder={placeholder}
                            {...field}
                            value={value ? value : field.value}
                        />
                    ) : (
                        <Input
                            type={type}
                            size={size}
                            placeholder={placeholder}
                            {...field}
                            value={value ? value : field.value}
                        />
                    )
                }
            />
            <small style={{ color: 'red' }}>
                {errorMessage}
            </small>
        </>
    );
};

export default FormInput;

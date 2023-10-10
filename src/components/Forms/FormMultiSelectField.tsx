"use client";
import { Select } from 'antd';
import { useFormContext, Controller } from "react-hook-form";
export type SelectOptions = {
    label: string;
    value: string;
};
type SelectFieldProps = {
    options: SelectOptions[];
    name: string;
    size?: "large" | "small";
    value?: string | string[] | undefined;
    placeholder?: string;
    label?: string;
    defaultValue?: SelectOptions;
    mode?: string;
};
const FormMultiSelectField = ({
    name,
    size,
    placeholder,
    label,
    options
}: SelectFieldProps) => {
    const { control } = useFormContext();
    return (
        <>
            {label ? label : null}
            <Controller
                control={control}
                name={name}
                render={({ field: { value, onChange } }) =>
                    <Select
                        onChange={onChange}
                        size={size}
                        options={options}
                        value={value}
                        style={{ width: "100%" }}
                        placeholder={placeholder}
                        mode='multiple'
                        allowClear
                    />
                }
            />
        </>
    );
};
export default FormMultiSelectField;

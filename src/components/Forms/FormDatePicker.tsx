import { DatePicker, DatePickerProps, Space } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from 'dayjs';
type UMDatePickerProps = {
    onChange?: (valOne: Dayjs | null, valTwo: string) => void,
    name: string;
    label?: string;
    value?: Dayjs;
    size?: "large" | "small";
};
const FormDatePicker = ({
    name,
    label,
    value,
    onChange,
    size
}: UMDatePickerProps) => {
    const { control, setValue } = useFormContext();
    const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
        onChange ? onChange(date, dateString) : null;
        setValue(name, dateString);
    };
    return (
        <div className={`flex flex-col  w-full`}>
            {label ? label : null}
            <br />
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Space direction="vertical">
                        <DatePicker name={name} defaultValue={dayjs(field.value) || ""} size={size} onChange={handleOnChange} />
                    </Space>
                )}
            />
        </div>
    );
};

export default FormDatePicker;

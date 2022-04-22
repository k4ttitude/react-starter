import { Controller, ControllerProps, useFormContext } from 'react-hook-form'
import { Form, FormItemProps, Input, InputProps } from 'antd'

type Props = {
  name: string
  label?: string
  formItemProps?: FormItemProps
  inputProps?: InputProps
} & Omit<ControllerProps, 'render'>

const FormInput: React.FC<Props> = ({
  name,
  label,
  formItemProps = {},
  inputProps = {},
  ...controllerProps
}) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      {...controllerProps}
      render={({ field: { value, onChange, onBlur } }) => (
        <Form.Item label={label} {...formItemProps}>
          <Input {...{ value, onChange, onBlur }} {...inputProps} />
        </Form.Item>
      )}
    />
  )
}

export default FormInput

import { InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function FormInput({ label, ...rest }: FormInputProps) {

  return (
    <div>
      { label && <label>{ label }</label> }
      <input {...rest} />
    </div>
  );
}
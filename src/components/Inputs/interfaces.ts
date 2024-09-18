interface InputProps {
  id: string;
  label: string;
  type: string;
  icon?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputError?: string | null;
}

interface PropsInput {
  id: string;
  label: string;
  type: string;
  icon?: string;
  name: string;
  inputError?: string | null;
}

interface InputsProps {
  inputs: PropsInput[];
  inputsInfo: { [key: string]: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type { InputProps, InputsProps }

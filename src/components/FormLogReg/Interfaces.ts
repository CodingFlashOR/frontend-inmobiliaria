interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  name: string;
  inputError?: string | null; // Asegúrate de que inputError sea opcional y de tipo string
}
interface FormLogRegProps {
  type: 'login' | 'register';
  inputs: InputProps[];
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputsInfo: { [key: string]: string };
  error: string;
  loading: boolean;
}

export type { InputProps, FormLogRegProps }

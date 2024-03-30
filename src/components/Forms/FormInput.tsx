import { FieldType } from './Form';

interface FormInputProps {
  field: FieldType;
}

const FormInput = ({ field }: FormInputProps) => {
  const { name, label, type, value, setValue, validate } = field;
  const id = `${name}-input`;

  const isValid = validate(value) ? 'success' : 'error';

  return (
    <div className={`input-group ${isValid}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={id}
        id={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
      {isValid === 'error' && (
        <span className="msg">{`Enter a valid ${name}`}</span>
      )}
    </div>
  );
};

export default FormInput;

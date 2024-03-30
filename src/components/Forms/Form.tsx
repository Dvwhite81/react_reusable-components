import FormInput from './FormInput';
import './Form.css';

export interface FieldType {
  name: string;
  label: string;
  type: string;
  value: string;
  setValue: (value: string) => void;
  validate: (value1: string, value2?: string) => boolean;
}

interface FormProps {
  fields: FieldType[];
}

const Form = ({ fields }: FormProps) => {
  return (
    <div className="form-container">
      <form className="form">
        {fields.map((field, index) => (
          <FormInput key={index} field={field} />
        ))}
        <button className="btn submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

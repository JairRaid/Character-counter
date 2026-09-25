import "./InputCheckbox.css";

interface InputCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputCheckbox = ({ id, name, label, ...props }: InputCheckboxProps) => {
  return (
    <div className="text-options__item">
      <input
        {...props}
        id={id}
        name={name}
        type="checkbox"
        className="text-options__checkbox sr-only"
      />

      <label htmlFor={id} className="text-options__label">
        <span className="text-options__checkmark" aria-hidden="true"></span>
        {label}
      </label>
    </div>
  );
};

export default InputCheckbox;

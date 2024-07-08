import PropTypes from 'prop-types';
  
  export const Input = ({
    label,
    type,
    placeholder,
    value,
    name,
    error,
    errorMessage,
    onChange,
    disabled,
    className,
    defaultValue
  }) => {
  
    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={name}>{label}</label>
        <input
          className={className}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        {error && errorMessage ? <p className="text-sm text-red-500">{errorMessage}</p> : <p className="text-sm pb-5"> </p>}
      </div>
    );
  };

Input.propTypes= {
label : PropTypes.string,
type : PropTypes.string,
placeholder: PropTypes.string,
value : PropTypes.string,
name : PropTypes.string,
error : PropTypes.bool,
errorMessage : PropTypes.string,
onChange : PropTypes.func,
disabled : PropTypes.bool,
className : PropTypes.string,
defaultValues : PropTypes.string


}
  
import cn from "classnames";
import styles from "./Input.module.scss";

type InputType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "tel"
  | "url"
  | "date"
  | "time"
  | "datetime-local"
  | "month"
  | "week"
  | "range"
  | "color"
  | "checkbox"
  | "radio"
  | "file"
  | "hidden"
  | "submit"
  | "reset"
  | "button";

interface InputProps {
  name: string;
  placeholder: string;
  className: string;
  label?: string;
  error: boolean;
  type: InputType;
  value?: string;
  disabled: boolean;
  setValue: (value: string) => void;
  renderInputBeforeIcon?: React.ComponentType;
  renderInputAfterIcon?: React.ComponentType;
  renderInfoIcon?: React.ComponentType;
  helperText: string;
  labelPosition: "top" | "right" | "bottom" | "left";
  sizes: "xs" | "md" | "lg" | "xl";
  quiet?: boolean;
  required?: boolean;
  shortKey?: string;
}
export const Input: React.FC<InputProps> = ({
  name,
  label,
  placeholder,
  className,
  type = "text",
  error,
  value,
  setValue,
  disabled = false,
  renderInputBeforeIcon,
  renderInputAfterIcon,
  renderInfoIcon,
  helperText,
  labelPosition = "top",
  sizes = "xs",
  quiet,
  shortKey,
  required,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (setValue) {
      setValue(event.target.value);
    }
  };

  const InputBeforeIcon = renderInputBeforeIcon;
  const InputAfterIcon = renderInputAfterIcon;
  const InputInfoIcon = renderInfoIcon;

  return (
    <div className={cn(styles.input_thumb, styles[labelPosition])}>
      <div>
        <p>
          {label} {required && <span>required</span>}
        </p>
        {InputInfoIcon && (
          <button>
            <InputInfoIcon />
          </button>
        )}
      </div>
      <label htmlFor="input" className="visually-hidden">
        {label}
      </label>
      <div>
        <div
          tabIndex={0}
          className={cn(
            styles.input_wrapper,
            styles[sizes],
            { [styles.input_wrapper_quiet]: quiet },
            { [styles.input_wrapper_disabled]: disabled },
            className
          )}
        >
          {InputBeforeIcon && (
            <div className={styles.before_icon} tabIndex={0}>
              <InputBeforeIcon />
            </div>
          )}

          <input
            id="input"
            className={cn(styles.input, { [styles.error]: error }, { [styles.input_disabled]: disabled })}
            placeholder={placeholder}
            type={type}
            onChange={handleChange}
            disabled={disabled}
            {...(value && { value })}
            size={1}
            {...props}
            required={required}
          />

          {InputAfterIcon && (
            <div className={styles.before_icon} tabIndex={0}>
              <InputAfterIcon />
            </div>
          )}

          {shortKey && (
            <div className={styles.shortKey}>
              <p>{`⌘ ${shortKey}`}</p>
            </div>
          )}
        </div>

        <div>{error && <p className={styles.error_message}>error</p>}</div>
        {helperText && !error && <div>helperText</div>}
      </div>
    </div>
  );
};

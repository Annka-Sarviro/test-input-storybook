import cn from "classnames";
import styles from "./Input.module.scss";

export interface InputProps {
  name: string;
  placeholder: string;
  className: string;
  label?: string;
  error: boolean;
  type:
    | "text"
    | "password"
    | "email"
    | "number"
    | "tel"
    | "url"
    | "date"
    | "time"
    | "datetime-local"
    | "hidden"
    | "submit"
    | "reset"
    | "button";
  value?: string;
  disabled: boolean;
  setValue: (value: string) => void;
  renderInputBeforeIcon?: React.ComponentType | null;
  renderInputAfterIcon?: React.ComponentType | null;
  renderInfoIcon?: React.ComponentType | null;
  helperText?: string;
  labelPosition?: "top" | "right" | "bottom" | "left";
  sizes: "xs" | "sm" | "lg" | "xl";
  quiet?: boolean;
  required?: boolean;
  shortKey?: string;
  alignment: "left" | "right";
  errorText?: string;
}
export const Input = ({
  name,
  label,
  placeholder,
  className,
  type = "text",
  error,
  errorText,
  value,
  setValue,
  disabled = false,
  renderInputBeforeIcon,
  renderInputAfterIcon,
  renderInfoIcon,
  helperText,
  labelPosition = "top",
  sizes = "xs",
  alignment = "left",
  quiet,
  shortKey,
  required,
  ...props
}: InputProps) => {
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
      {label && (
        <div className={styles.label_wrapper}>
          <p className={cn(styles.label, styles[sizes], { [styles.disabled]: disabled })}>
            {label} {required && <span>required</span>}
          </p>

          {InputInfoIcon && (
            <button>
              <InputInfoIcon />
            </button>
          )}
        </div>
      )}
      <label htmlFor="input" className="visually-hidden">
        {label}
      </label>
      <div>
        <div
          tabIndex={0}
          className={cn(
            styles.input_wrapper,
            styles[sizes],
            { [styles.error]: error },
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
            className={cn(
              styles.input,
              { [styles.error]: error },
              alignment === "left" ? styles.alignment_left : styles.alignment_right,
              { [styles.input_disabled]: disabled }
            )}
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

        {error && errorText && <p className={styles.error_message}>{errorText}</p>}
        {helperText && !error && <div>helperText</div>}
      </div>
    </div>
  );
};

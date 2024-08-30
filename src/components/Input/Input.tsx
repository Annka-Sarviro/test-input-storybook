import cn from "classnames";
import styles from "./Input.module.scss";
import { InputLabel } from "./InputLabel";
import { InputTextWrapper } from "./InputHelper";

export interface InputProps {
  name: string;
  placeholder: string;
  className: string;
  label?: string;
  error: boolean;
  errorText?: string;
  type: "text" | "password" | "email" | "number" | "tel" | "url" | "date" | "time" | "datetime-local";
  disabled: boolean;
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
  infoText?: string;
}
export const Input = ({
  name,
  label,
  placeholder,
  className,
  type = "text",
  error,
  errorText,

  disabled = false,
  renderInputBeforeIcon,
  renderInputAfterIcon,
  renderInfoIcon,
  helperText,
  labelPosition = "top",
  sizes = "xs",
  alignment = "left",
  infoText,
  quiet,
  shortKey,
  required,
  ...props
}: InputProps) => {
  const InputBeforeIcon = renderInputBeforeIcon;
  const InputAfterIcon = renderInputAfterIcon;
  return (
    <div className={cn(styles.input_thumb, styles[labelPosition])}>
      {label && (
        <InputLabel
          required={required}
          label={label}
          renderInfoIcon={renderInfoIcon}
          disabled={disabled}
          sizes={sizes}
          infoText={infoText}
        />
      )}

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
            <div className={cn(styles.before_icon, styles[sizes], { [styles.error]: error })} tabIndex={0}>
              <InputBeforeIcon />
            </div>
          )}

          <input
            id="input"
            className={cn(
              styles.input,
              { [styles.error]: error },
              { [styles.iconBefore]: renderInputBeforeIcon },
              { [styles.iconAfter]: renderInputAfterIcon },
              { [styles.shortKey]: shortKey },
              alignment === "left" ? styles.alignment_left : styles.alignment_right,
              { [styles.input_disabled]: disabled }
            )}
            placeholder={placeholder}
            type={type}
            disabled={disabled}
            size={1}
            {...props}
            required={required}
          />

          {InputAfterIcon && (
            <div
              className={cn(
                styles.after_icon,
                styles[sizes],
                { [styles.error]: error },
                { [styles.shortKey]: shortKey }
              )}
              tabIndex={0}
            >
              <InputAfterIcon />
            </div>
          )}

          {shortKey && <p className={cn(styles.shortKey_text, styles[sizes])}>{`⌘ ${shortKey}`}</p>}
        </div>

        {error && errorText ? (
          <InputTextWrapper className={styles.error_message}>{errorText}</InputTextWrapper>
        ) : (
          helperText && !error && <InputTextWrapper className={styles.helper_text}>{helperText}</InputTextWrapper>
        )}
      </div>
    </div>
  );
};

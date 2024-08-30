import cn from "classnames";
import styles from "./Input.module.scss";
import { InputTextWrapper } from "./InputHelper";

interface LabelProps {
  label?: string;
  disabled: boolean;
  renderInfoIcon?: React.ComponentType | null;
  sizes: "xs" | "sm" | "lg" | "xl";
  required?: boolean;
  infoText?: string;
}

export const InputLabel = ({ infoText, required, label, renderInfoIcon, sizes, disabled }: LabelProps) => {
  const InputInfoIcon = renderInfoIcon;

  return (
    <label htmlFor="input" className={styles.label_wrapper}>
      <InputTextWrapper className={cn(styles.label, styles[sizes], { [styles.disabled]: disabled })}>
        {label} {required && <span>(required)</span>}
      </InputTextWrapper>

      {renderInfoIcon && InputInfoIcon && infoText && (
        <div className={styles.info_icon} tabIndex={0}>
          <InputInfoIcon />
          <InputTextWrapper className={cn(styles.info_text, styles[sizes])}>{infoText}</InputTextWrapper>
        </div>
      )}
    </label>
  );
};

import styles from './styles.module.css';

type InputProps = {
  id: string;
  label?: string;
} & React.ComponentProps<'input'>;

export function Input({ id, type, label, ...props }: InputProps) {
  const hasLabel = <label htmlFor={id}>{label}</label>;

  return (
    <>
      {label && hasLabel}
      <input
        placeholder={label}
        className={styles.input}
        id={id}
        type={type}
        {...props}
      />
    </>
  );
}

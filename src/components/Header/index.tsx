import styles from './styles.module.css';

type TitleProps = {
  children: React.ReactNode;
};

export function Header({ children }: TitleProps) {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>{children}</h1>
      </header>
    </>
  );
}

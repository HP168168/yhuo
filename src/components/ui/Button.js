import styles from './Button.module.css';

export default function Button({ children, variant = 'primary', className = '', size = 'medium', ...props }) {
  return (
    <button className={`${styles.btn} ${styles[`btn-${variant}`]} ${styles[`btn-${size}`]} ${className}`} {...props}>
      {children}
    </button>
  );
}

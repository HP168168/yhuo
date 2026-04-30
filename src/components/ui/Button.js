import styles from './Button.module.css';

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) {
  const variantClass = styles[`btn-${variant}`] || styles['btn-primary'];
  
  return (
    <button 
      className={`${styles.btn} ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

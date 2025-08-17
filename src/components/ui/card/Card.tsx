import { ReactNode, HTMLAttributes } from 'react';
import styles from './Card.module.css';

interface CardRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'flat';
}

interface CardSubComponentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function CardRoot({ 
  children, 
  variant = 'default',
  className = '',
  ...props
}: CardRootProps) {
  return (
    <div 
      className={`${styles.card} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

function CardHeader({ children, className = '', ...props }: CardSubComponentProps) {
  return (
    <div className={`${styles.header} ${className}`} {...props}>
      {children}
    </div>
  );
}

function CardTitle({ children, className = '', ...props }: CardSubComponentProps) {
  return (
    <h2 className={`${styles.title} ${className}`} {...props}>
      {children}
    </h2>
  );
}

function CardContent({ children, className = '', ...props }: CardSubComponentProps) {
  return (
    <div className={`${styles.content} ${className}`} {...props}>
      {children}
    </div>
  );
}

function CardFooter({ children, className = '', ...props }: CardSubComponentProps) {
  return (
    <div className={`${styles.footer} ${className}`} {...props}>
      {children}
    </div>
  );
}

const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Content: CardContent,
  Footer: CardFooter,
});

export default Card;
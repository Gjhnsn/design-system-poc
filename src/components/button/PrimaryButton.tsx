import React from 'react';
import styles from './PrimaryButton.module.scss';

interface IPrimaryButtonProps {
  text: string;
}

const PrimaryButton: React.FC<IPrimaryButtonProps> = ({ text }) => {
  return (
    <button type="button" className={styles.button}>
      {text}
    </button>
  );
};

export default PrimaryButton;

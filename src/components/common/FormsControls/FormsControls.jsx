import React from "react";
import styles from './FormsControls.module.css';

const FormControl = ({input, meta, child, ...props}) => {
  const hasError = meta.error && meta.touched;
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <div>
        {props.children}
      </div>
      <div>
        {hasError && <span>{meta.error}</span>}
      </div>
    </div>
  )
};

export const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props;
  return <FormControl {...props}> <textarea {...input} {...restProps} /> </FormControl>
};
export const Input = (props) => {
  const {input, meta, child, ...restProps} = props;
  return <FormControl {...props}> <input {...input} {...restProps} /> </FormControl>
};


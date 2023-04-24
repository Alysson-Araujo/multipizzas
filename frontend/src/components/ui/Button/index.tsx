import stlyes from "./styles.module.scss";
import { ReactNode, ButtonHTMLAttributes } from "react";

import { FaSpinner } from "react-icons/fa";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
}
export default function Button({ loading, children, ...rest }: ButtonProps) {
  return (
    <button className={stlyes.button} disabled={loading} {...rest}>
      {loading ? (
        <FaSpinner color="#fff" size={16} />
      ) : (
        <a className={stlyes.buttonText}>{children}</a>
      )}
    </button>
  );
}
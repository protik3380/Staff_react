import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

export default function Alert({ children, onClose }: Props) {
  return (
    <>
      <div className="alert alert-primary alert-dismissible">
        {children}
        <button
          type="button"
          className="btn-close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </>
  );
}

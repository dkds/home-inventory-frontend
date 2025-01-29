export interface DialogContentProps {
  children: React.ReactNode;
}

const DialogContent: React.FC<DialogContentProps> = ({ children }) => {
  return <div className="dialog__content p-4 md:p-5">{children}</div>;
};

export default DialogContent;

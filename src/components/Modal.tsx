import "../App.scss";

interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

export const Modal = ({ children, title, onClose }: ModalProps) => {
  return (
    <>
      <div className="opacity" onClick={onClose} />
      <div className="modal">
        <h2>{title}</h2>
        {children}
      </div>
    </>
  );
};

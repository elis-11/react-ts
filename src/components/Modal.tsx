import "../App.scss";

interface ModalProps {
  children: React.ReactNode;
  title: string;
}

export const Modal = ({ children, title }: ModalProps) => {
  return (
    <>
      <div className="opacity" />
      <div className="modal">
        {/* <div className="text"> */}
          <h2>{title}</h2>
          {children}
        {/* </div> */}
      </div>
    </>
  );
};

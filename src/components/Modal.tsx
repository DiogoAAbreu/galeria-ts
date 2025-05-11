import ModalTypes from "@/types/Modal";



const Modal = (props: ModalTypes) => {
    return (
        <div
            onClick={props.closeModal}>
            <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-white/90 dark:bg-black/90">
                <img src={`assets/${props.url}`}
                    className="max-w-screen max-h-screen" />
            </div>
            <div
                onClick={props.closeModal}
                className="w-10 h-10 fixed top-5 right-5 text-5xl font-bold cursor-pointer">
                x
            </div>
        </div>
    )
}

export default Modal;
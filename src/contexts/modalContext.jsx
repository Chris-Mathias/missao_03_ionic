import { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const toggleModal = () => setIsModalOpen((prev) => !prev);

    return (
        <ModalContext.Provider
            value={{ isModalOpen, openModal, closeModal, toggleModal }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);

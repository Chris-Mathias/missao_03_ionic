import { createContext, useState, useContext, useEffect } from "react";
import { useModal } from "./modalContext";

const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [data, setData] = useState(null);
    const [count, setCount] = useState(0);
    const { toggleModal } = useModal();

    useEffect(() => {
        fetch("http://localhost:3000/turmas")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => console.error("Erro ao buscar os dados:", error));
    }, [count]);

    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        teacher: "",
        pfp: "",
        bg: "",
    });

    const setFormEmpty = () => {
        setFormData({
            title: "",
            subtitle: "",
            teacher: "",
            pfp: "",
            bg: "",
        });
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/turmas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Resposta do backend:", result);
            } else {
                console.error(
                    "Erro na resposta do servidor:",
                    response.statusText
                );
            }
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
        }

        setCount(count + 1);
        setFormEmpty();
        toggleModal();
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(
                `http://localhost:3000/turmas/${id}`,
                {
                    method: "DELETE",
                }
            );

            if (response.ok) {
                const result = await response.json();
                console.log("Recurso deletado:", result);
                setCount(count + 1);
            } else {
                console.error("Erro ao deletar:", response.statusText);
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    };

    return (
        <DataContext.Provider
            value={{ data, handleChange, handleSubmit, handleDelete, formData, setFormEmpty }}
        >
            {children}
        </DataContext.Provider>
    );
}

export const useData = () => useContext(DataContext);
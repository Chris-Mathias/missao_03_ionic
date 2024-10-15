import {
    createContext,
    useState,
    useContext,
    useEffect,
    ReactNode,
    ChangeEvent,
    FormEvent,
} from "react";
import { Preferences } from "@capacitor/preferences";

interface FormData {
    title: string;
    subtitle: string;
    teacher: string;
    pfp: string;
    bg: string;
}

interface DataContextType {
    data: any;
    formData: FormData;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
    handleDelete: (id: number) => Promise<void>;
    setFormEmpty: () => void;
    saveApiUrl: (url: string) => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataProviderProps {
    children: ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
    const [data, setData] = useState(null);
    const [apiUrl, setApiUrl] = useState(""); // Estado para a URL da API
    const [count, setCount] = useState(0);

    const saveApiUrl = async (url: string) => {
        await Preferences.set({
            key: "api_url",
            value: url,
        });
        setApiUrl(url);
    }

    useEffect(() => {
        const loadApiUrl = async () => {
            const { value } = await Preferences.get({ key: "api_url" });
            setApiUrl(value || "http://localhost:3000");
        };

        loadApiUrl();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("1");
                const response = await fetch(`${apiUrl}/turmas`, { headers: { 'ngrok-skip-browser-warning': 'true' } });
                console.log("2");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                console.log("3");
                const data = await response.json();
                console.log("4");
                setData(data);
                console.log("5");
            } catch (error) {
                console.error("Erro ao buscar os dados:", error);
            }
        };

        if (apiUrl) {
            fetchData();
        }
    }, [apiUrl, count]);

    const [formData, setFormData] = useState<FormData>({
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
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch(`${apiUrl}/turmas`, {
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
    };

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`${apiUrl}/turmas${id}`, {
                method: "DELETE",
            });

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
            value={{
                data,
                handleChange,
                handleSubmit,
                handleDelete,
                formData,
                setFormEmpty,
                saveApiUrl,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export const useData = (): DataContextType => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
};

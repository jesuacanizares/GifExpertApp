import {useState} from "react";

export function AddCategory({onNewCategory}) {
    const [inputValue, setInputValue] = useState("")
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const newEntry = inputValue.trim()
        if (newEntry.length <= 1) return;
        onNewCategory(newEntry)
        // setCategories(categories => [...categories, inputValue])
        setInputValue("")
    }
    return (
        <form action="" onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar GIF"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
}

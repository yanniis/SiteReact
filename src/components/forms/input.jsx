export function Input ({ id, placeholder, value, onChange }) {

    return <div>
        <input 
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)} 
        />
    </div>
}
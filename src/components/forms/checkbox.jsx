export function Checkbox ({idCheckbox, checked, onChange, label}) {

    return <div>
        <input 
        type="checkbox"
        id={idCheckbox}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)} 
        />

        <label htmlFor={idCheckbox}>{label}</label>
    </div>
}
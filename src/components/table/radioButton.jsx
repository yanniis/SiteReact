// Ne pas oublier le checked et le onChange
export function RadioButton ({ valueRadio, labelRadio, idRadio, checked, onChange }) {
    return (
      <div>
        <input
          id={idRadio} 
          type="radio"
          value={valueRadio}
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor={idRadio}>{labelRadio}</label>
      </div>
    )
  }
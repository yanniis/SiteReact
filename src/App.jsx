import { useId, useState } from 'react'
import { Input } from './components/forms/input'
import { Checkbox } from './components/forms/checkbox'
import './App.css'

function App() {

  const [placeholder, setPlaceholder] = useState('Entrer votre nom')
  const [value, setValue] = useState('')
  const [label, setLabel] = useState('Label du input')
  const [checked, setChecked] = useState(false)
  const id = useId()
  const idCheckbox = useId()

  return <>
  {/* Condition pour modifier bonjour au cas ou value n'est plus vide */}
  <h1>{value === '' ? 'Bonjour' : value}</h1>

  <form>
    
    <label htmlFor={id}>{label}</label>
    <Input
    id={id}
    placeholder={placeholder}
    value={value}
    onChange={setValue}
    /> 

    <Checkbox 
    id={idCheckbox}
    checked={checked}
    onChange={setChecked}
    label={label}
    />
</form>

<h2>{checked == true ? 'Checkbox coché' : ''}</h2>

  </>


}

export default App

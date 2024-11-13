import { useId, useState } from 'react'
import { Input } from './components/forms/input'
import { Checkbox } from './components/forms/checkbox'
import './App.css'
import { ProductCategoryRow } from './components/table/productCategoryRow'
import { ProductRow } from './components/table/productRow'
import { RadioButton } from './components/table/radioButton'


const autosData = [
  {id: 1, marque: 'Bmw', puissance: 560, pays: "Allemagne"},
  {id: 2,marque: 'Bmw', puissance: 90, pays: "Allemagne"},
  {id: 3,marque: 'Bmw', puissance: 450, pays: "Allemagne"},
  {id: 4,marque: 'Audi', puissance: 260, pays: "Allemagne"},
  {id: 5,marque: 'Audi', puissance: 960, pays: "Allemagne"},
  {id: 6,marque: 'Audi', puissance: 60, pays: "Allemagne"},
  {id: 7,marque: 'Renault', puissance: 160, pays: "France"},
  {id: 8,marque: 'Seat', puissance: 999, pays: "Espagne"},
]


function App() {

  const [placeholder, setPlaceholder] = useState('Entrer votre nom')
  const [value, setValue] = useState('')
  const [label, setLabel] = useState('Label du input')
  const [checked, setChecked] = useState(false)
  const id = useId()
  const idCheckbox = useId()

// Variables des boutons radios
const idRadio1 = useId()
const idRadio2 = useId()
const idRadio3 = useId()
const [valueRadio, setValueRadio] = useState('test')

// Fonction pour gérer les changements de sélection
const handleChange = (event) => {
  setValueRadio(event.target.value)
  console.log(valueRadio)
}

  return <>    

<button onClick={handleChange}>Filtrer</button>

    <RadioButton 
    idRadio={idRadio1}
    valueRadio="499"
    labelRadio="- de 500"
    checked={valueRadio === "499"}
    onChange={handleChange}
  />

  <RadioButton 
    idRadio={idRadio2}
    valueRadio="500"
    labelRadio="+ de 500"
    checked={valueRadio === "500"}
    onChange={handleChange}
  />

<RadioButton 
    idRadio={idRadio3}
    valueRadio=""
    labelRadio="All"
    checked={valueRadio == ""}
    onChange={handleChange}
  />

  <AutoTable autos={autosData}/>


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

function AutoTable ({autos}) {
  const rows = []
  let lastCountry = null

  for (let auto of autos) {
    if (lastCountry !== auto.pays) {
      rows.push(<ProductCategoryRow key={auto.pays} name={auto.pays}/>)
    }

    lastCountry = auto.pays 
    rows.push(<ProductRow key={auto.id} auto={auto}/>)
    
  }

  return (
  <table>
    <thead>
      <tr>
        <th>Marque</th>
        <th>Puissance</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
  )
}



export default App

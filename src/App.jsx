import { useId, useState } from 'react'
import { Input } from './components/forms/input'
import { Checkbox } from './components/forms/checkbox'
import './App.css'
import { ProductCategoryRow } from './components/table/productCategoryRow'
import { ProductRow } from './components/table/productRow'


const autosData = [
  {id: 1, marque: 'Bmw', puissance: "560ch", pays: "Allemagne"},
  {id: 2,marque: 'Bmw', puissance: "90ch", pays: "Allemagne"},
  {id: 3,marque: 'Bmw', puissance: "450ch", pays: "Allemagne"},
  {id: 4,marque: 'Audi', puissance: "260ch", pays: "Allemagne"},
  {id: 5,marque: 'Audi', puissance: "960ch", pays: "Allemagne"},
  {id: 6,marque: 'Audi', puissance: "60ch", pays: "Allemagne"},
  {id: 7,marque: 'Renault', puissance: "160ch", pays: "France"},
  {id: 8,marque: 'Seat', puissance: "999ch", pays: "Espagne"},
]


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

<AutoTable autos={autosData}/>

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
        <th>puissance</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
  )
}



export default App

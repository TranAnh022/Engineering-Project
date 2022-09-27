import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap'
import { getMaterial } from '../reducers/materialReducer';
import { useDispatch } from 'react-redux';
const Search = () => {
  const [material, setMaterial] = useState<string>("")

  const dispatch=useDispatch()
  const handleSubmit = (event:any):void => {
    event.preventDefault()
    dispatch(getMaterial(material))
    setMaterial("")
  }
  return (
    <div className='container'>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          placeholder="Type the material"
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
        />
        <Button variant="outline-secondary" type="submit">Search</Button>
    </Form>
    </div>
  )
}

export default Search
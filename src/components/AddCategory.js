import { useState } from "react"
import React from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('')
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        if(inputValue.trim().length > 2){
            e.preventDefault()
            setCategories(cats => [inputValue, ...cats])
            setInputValue('')
        }
    }
    
return (
    <>
        <h1>{inputValue}</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            placeholder='Add a category'
            value={inputValue}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
            />
        </form>
    </>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
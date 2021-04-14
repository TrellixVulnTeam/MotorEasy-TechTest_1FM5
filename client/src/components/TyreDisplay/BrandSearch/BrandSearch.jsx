import React from 'react'


const BrandSearch = (props) => {

    const {brands, getSelectedBrand} = props
      
     
      

    

    return (
        <div>
            <label htmlFor="brands">Select Brand</label>
            <select onChange={getSelectedBrand} name="brands">
                <option value="Bridgestone">Bridgestone</option>
                <option value="Continental">Continental</option>
                <option value="Dunlop">Dunlop</option>
                <option value="Goodyear">Goodyear</option>
                <option value="Michelin">Michelin</option>
                <option value="Pirelli">Pirelli</option> 
            </select>
        </div>

    )
}

export default BrandSearch

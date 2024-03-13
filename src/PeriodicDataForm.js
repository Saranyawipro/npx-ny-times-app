import React from 'react'

const  PeriodicDataForm = ({sendDataToParent}) => {
    
    const onChange = (e) =>{
        e.preventDefault();
        const value = e.target.value;
        sendDataToParent(value)
    }
  return (
    <div>
      <form  >
      <div>
      <h2 className="mb-3 text-xl  ">Search for...</h2>
      {/* <select  onChange={(e) => setPeriodVal(e.target.value)} 
      className="form-select rounded-xl border-4 border-light-blue-500 border-opacity-25"> */}

        <select  onChange={onChange} 
        className="form-select rounded-xl border-4 border-light-blue-500 border-opacity-25">
        <option defaultValue disabled>
          Select Period
        </option>
        <option value="1">1 Day</option>
        <option value="7">7 Day</option>
        <option value="30">30 Day</option>
      </select>
      
    </div>
      </form>
    </div>
  )
}

export default PeriodicDataForm

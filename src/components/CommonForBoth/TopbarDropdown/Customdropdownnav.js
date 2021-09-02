import React, { useState, forwardRef } from "react"
//Import Date Picker
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const CustomDropDownNav = () => {
  const [startDate, setStartDate] = useState(new Date())

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className="custom-dropdown-nav" onClick={onClick} ref={ref}>
      {value}
      <i class="mdi mdi-chevron-down d-xl-inline-block"></i>
    </div>
  ))
  return (
    <div className="custom-datepick">
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      customInput={<ExampleCustomInput />}
      dateFormat="d MMM yyyy"
    />
    </div>
  )
}
export default CustomDropDownNav

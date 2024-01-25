import React from 'react'
import PresidentTable from './PresidentTable'
import { presidentsArray } from './presidents.constant'

function Presidents() {

    const livingPresidents = presidentsArray.filter(president => {
        return president.passed === undefined;
    })

    const deadPresidents = presidentsArray.filter(president => {
        return president.passed !== undefined;
    })

    console.log(livingPresidents);

  return (
    <React.Fragment>
        <h2>Hello from Presidents</h2>
    <PresidentTable title={"Living Presidents"} presidents={livingPresidents}/>
    <PresidentTable title={"Dead Presidents"} presidents={deadPresidents}/>
    </React.Fragment>
  )
}

export default Presidents
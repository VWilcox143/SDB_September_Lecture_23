import React from 'react'
import DisplayTotals from './DisplayTotals';

export default PresidentVotes

function PresidentVotes() {

    const votes = [
        { name: "Abe Lincoln", count: 139033},
        { name: "Stephen Douglas", count: 115509},
      ]

  return (
    <React.Fragment>
        <h1>Presidents</h1>
        {
            votes.map((totalVotes, index) => (
                <DisplayTotals
                key= {index}
                name= {totalVotes.name}
                count= {totalVotes.count}
                />
            ))
        }
    </React.Fragment>
  )
}

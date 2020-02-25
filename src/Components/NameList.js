import React from 'react'
import Person from './Person'

function NameList() {
    const persons =[
        {
            id: 1,
            name: "Jaya",
            age: 22,
        },{
            id: 2,
            name: "Rutul",
            age: 28,
        },{
            id: 3,
            name: "Ankita",
            age: 20,
        }
    ]

const personList = persons.map(person => <Person person ={person} />)
return <div>{personList}</div>
}

export default NameList

import React from 'react'
import { projectData, ProjectNav } from './Data'
import WorksItem from './WorksItem'
const Works = () => {
    return (
       <div>
         <div className="work__filters">
            {ProjectNav.map((item, index) => {
                return (
                    <span className="work__item" key={index}>{item.name} </span>
                )
            })}
        </div>
        <div className="work__container container grid">
            {
            projectData.map((item, index) => {
            return <WorksItem />
            })
            }
        </div>
       </div>
    )
}

export default Works
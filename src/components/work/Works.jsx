import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { projectData, ProjectNav } from './Data'
import WorksItem from './WorksItem'
const Works = () => {
    const [item, setItem] = useState({ name: "all" })
    const [projects, setProjects] = useState([])
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === "all") {
            setProjects(projectData)
        }
        else {
            const newProjects = projectData.filter(project => {
                return project.category.toLowerCase() === item.name;
            });
            setProjects(newProjects)
        }
    }, [item]);


    return (
        <div>
            <div className="work__filters">
                {ProjectNav.map((item, index) => {
                    return (
                        <span onClick={() => {
                            setItem({ name: item.name.toLocaleLowerCase() });
                            setActive(index);
                        }}
                            className={`${active === index ? 'active-work' : ""} work__item`} key={index}
                            > {item.name} </span>
                    )
                })}
            </div>
            <div className="work__container container grid">
                {
                    projects.map((item, index) => {
                        return <WorksItem item={item} key={item.id} />
                    })
                }
            </div>
        </div>
    )
}

export default Works
import React from 'react';

function List(props) {
    console.log(props)
    //will have to wrap the whole output in a single div, 
    /////as there must be a singel parent.
    //will create single divs to seperate between FE, BE, and FS projects.
    return (
        <div> 
            <h3 className='sectionTitle'>Front End Projects</h3>
            <div className='partition'>
                <ul className="list-group">
                    {props.feProjects.map(item => (
                        <li className="list-group-item" key={item.id}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
            <h3 className='sectionTitle'> Back End Projects</h3>
            <div className='partition'>
                <ul className="list-group">
                    {props.beProjects.map(item => (
                        <li className="list-group-item" key={item.id}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
            <h3 className='sectionTitle'> Full Stack Projects</h3>
            <div className='partition'>
                <ul className="list-group">
                    {props.fsProjects.map(item => (
                        <li className="list-group-item" key={item.id}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default List;
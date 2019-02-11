import React from 'react'

const PartialsOne = (element) => {
    const parts = element.split('/')
    return parts[0]
}
const PartialTwo = (element) => {
    const parts = element.split('/')
    return parts[1]
}

const SectionStarred = props => {
    return(
        <section className='ListItemStarred'>
            <h3 className='TitleStarred'>{PartialsOne(props.starred['full_name'])}/<strong>{PartialTwo(props.starred['full_name'])}</strong></h3>
            <p className='paragraphStarred'>{props.starred.description}</p>
            <div className='StartsStarred'>
                <label>
                    <img src='img/stars.svg' alt='stars'/>
                    {props.starred['stargazers_count']}
                </label>
                { 
                    props.starred.forks > 0 &&
                    <label>
                        <img src='img/branch.svg' alt='stars'/>
                        {props.starred.forks}
                    </label>
                }                
            </div>
        </section>
    )
}
export default SectionStarred
import React from 'react'

const SectionRepo = props => {
    return(
        <section class='ListItemRepo'>
            <h3 className='TitleRepo'>{props.repo.name}</h3>
            <p className='paragraphRepo'>{props.repo.description}</p>
            <div className='StartsRepo'>
            {
                props.repo.language && 
                <label>
                    <img src='img/code.svg' alt='stars'/>
                    <span>{props.repo.language}</span>
                </label>
            }
                
            {
                props.repo.forks > 0 &&
                <label>
                    <img src='img/branch.svg' alt='stars'/>
                    <span>{props.repo.forks}</span>
                </label> 
            }
                               
            </div>
        </section>
    )
}
export default SectionRepo
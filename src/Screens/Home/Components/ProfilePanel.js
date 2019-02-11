import React from 'react'

const ProfilePanel = props => {
    return(
        <section className='profile-panel'>                        
            <img className='oval-image' src={`${props.user['avatar_url']}`} alt='imagemProfile'/> 
            <article className='infoProfile'>
                <h2>{props.user.name}</h2>
                <span>{props.user.bio}</span>  
            </article>                                
        </section>
    )
}
export default ProfilePanel
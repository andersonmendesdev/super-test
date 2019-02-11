import React from 'react'

const TabSdelect = props => {
    return(
            <div id="TabSelect">
                <label onClick={props.handleChange}>                                
                    <span style={props.checked ? {fontWeight: 'bold'} : {fontWeight: 'normal'}}>Repos</span>
                    <span id='numberRepo'>{props.repo.length}</span>
                </label>
                <label onClick={props.handleChange}>                                
                    <span style={!props.checked ? {fontWeight: 'bold'} : {fontWeight: 'normal'}}>Starred</span>
                    <span id='numberStarred'>{props.starred.length}</span>
                </label>
                <div id="TabSlider" style={ props.checked ? {transform: 'translateX(0)'} : {transform: 'translateX(100%)'} }></div>                
            </div>
    )
}
export default TabSdelect
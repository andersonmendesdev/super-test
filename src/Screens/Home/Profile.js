import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../../Store/actions/ActionCreators'
import TabSdelect from './Components/TabSelect'
import ProfilePanel from './Components/ProfilePanel'
import SectionRepo from './Components/SectionRepo';
import SectionStarred from './Components/SectionStarred';
import SearchBar from './Components/SearchBard';


class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            checked: true
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(){
        this.setState({
            checked: !this.state.checked ? true : false
        })
    }
    componentDidMount(){
        this.props.getUser()
        this.props.getRepo()
        this.props.getStarred()
    }
    
    render(){
        const { user } = this.props.user
        const { repositories } = this.props.repo
        const { starred } = this.props.starred
        return(
            <div className='wrapper' >
                <nav className='navbar'>
                    <img src="img/shape.svg" className="Shape" alt="logo"/>
                    <h2 className='title-navbar'><strong>Github</strong> Profile</h2>
                </nav>
                <div className='container-profile'>
                    <ProfilePanel user={user}/>
                    <div className='repo-profile'>
                        <TabSdelect 
                            handleChange={this.handleChange} 
                            checked={this.state.checked}
                            repo={repositories}
                            starred={starred}

                        />
                        <SearchBar />
                        {
                            this.state.checked &&   repositories.map(item => <SectionRepo key={item.id}  repo={item}/>) 
                        }
                        {
                            !this.state.checked && starred.map(item => <SectionStarred key={item.id} starred={item}/> )
                        }
                        
                    </div>                    
                                                            
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.user,
        repo: state.repo,
        starred: state.starred
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getUser: () => dispatch(ActionCreators.getUserRequest()),
        getRepo: () => dispatch(ActionCreators.getUserRepoRequest()),
        getStarred: () => dispatch(ActionCreators.getUserStarredRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

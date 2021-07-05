import React from 'react';
import Profiles from './Profiles'
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from './../../redux/profilesData-reducer'
import { withRouter } from 'react-router';
import { compose } from 'redux';
class ProfilesContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
            if(!userId){
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId);
    }

    render() {

        return (

            <Profiles {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />

        )
    }
}

// compose(connect(mapStateToProps, { getUserProfile }),withRouter, withAuthRedirect)(ProfilesContainer)

// let AuthRedirectComponent = withAuthRedirect(ProfilesContainer)


let mapStateToProps = (state) => ({
    profile: state.profiles.profile,
    status: state.profiles.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})



// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
// connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);
export default compose(connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }), withRouter)(ProfilesContainer)

// withAuthRedirect
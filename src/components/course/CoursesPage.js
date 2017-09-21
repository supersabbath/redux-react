import React , { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
class CoursesPage extends React.Component {
    
    constructor(props,context){
        super(props,context);
       
    }
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps");
    }
    render() {
        const {courses} = this.props;
        return (<div>
            <h1>Courses</h1>
            <CourseList courses={courses}/>
        </div>);
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        courses : state.coursesReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(courseActions,dispatch)
    };
};


CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

export default  connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
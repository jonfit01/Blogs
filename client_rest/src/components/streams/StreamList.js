import React from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from '../../actions';
import { Link } from 'react-router-dom';


class StreamList extends React.Component {
    componentDidMount() {
      this.props.fetchBlogs();
    }

    renderAdmin(blog) {
        if (blog.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${blog.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <button className="ui button negative">Delete</button>
                </div>
            );
        }
    }

    renderList() {
        return this.props.blogs.map(blog => {
            return (
            <div className="item" key={blog.id}>
                {this.renderAdmin(blog)}
                <i className="large middle aligned icon camera" />
                <div className="content">
                    {blog.title}
                    <div className="description">
                        {blog.description}
                    </div>
                </div>
            </div>
            );
        });
    }
    
    renderCreate() {
        if (this.props.isSignedIn) {
        return (
            <div style={{ textAlign: 'right' }}>
            <Link to="/streams/new" className="ui button primary">
                Create Blog
            </Link>
            </div>
        );
        }
    }

    render() {
        return (
            <div>
                <h2>Blogs</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        );
    }
  }
  
const mapStateToProps = state => {
    return { 
        blogs: Object.values(state.blogs),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn 
    };
};

export default connect(
    mapStateToProps,
    { fetchBlogs }
)(StreamList);

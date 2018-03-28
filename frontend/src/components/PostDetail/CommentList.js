import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'
import TiThumbsUp from 'react-icons/lib/ti/thumbs-up'
import TiThumbsDown from 'react-icons/lib/ti/thumbs-down'

import {
  deleteComment,
  editComment,
  voteComment,
  getComments
} from '../../actions/CommentActions'


class CommentList extends Component {

  state = {
    edit: false,
    editId: ''
  }

  onDelete = (comment) => {
    const parentId = this.props.comments[0].parentId
    this.props.deleteComment(comment.id, parentId)
  }

  onEdit = (id, editId, comment) => {
    const parentId = this.props.comments[0].parentId
    if (comment) {
      this.props.editComment(editId, parentId,{
        timestamp: Date.now(),
        body: comment
      })
    }

    this.setState({
      edit: !this.state.edit,
      editId: id
    })
  }

  onClickUpVote = (id) => {
    this.props.upVoteComment(id)
  }

  onClickDownVote = (id) => {
    this.props.downVoteComment(id)
  }

  render() {
    let commentList = null
    const { comments, voteComment } = this.props

    if (comments) {
      commentList = comments.map(comment => (
        <li className="Comment-li"
          key={comment.id}>
          <div className="Comment-Container">
            <div className="Comment-Vote">
              <TiThumbsUp className='Up' onClick={() => {
                voteComment(comment.id, comment.parentId, "upVote")
              }}/>
              <div className="Score">{comment.voteScore}</div>
              <TiThumbsDown className='Down' onClick={() => {
                voteComment(comment.id, comment.parentId, "downVote")
              }} />
            </div>


            <Comment
              onDelete={this.onDelete}
              onEdit={this.onEdit}
              editId={this.state.editId}
              id={comment.id}
              body={comment.body}
              author={comment.author}/>
          </div>
        </li>
      ))
    }

    return(
      <div className="CommentList">
        <ul className="Comments">
          {commentList}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteComment: (commentId, parentId) => dispatch(deleteComment(commentId, parentId)),
    editComment: (commentId, parentId, comment) => dispatch(editComment(commentId, parentId, comment)),
    voteComment: (commentId, parentId, option) => dispatch(voteComment(commentId, parentId, option)),
    fetchComments: (parentId) => dispatch(getComments(parentId))

  }
}

export default connect(null, mapDispatchToProps)(CommentList)

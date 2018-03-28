import React , { Component } from 'react'
import CommentEdit from './CommentEdit'
import CommentDelete from './CommentDelete'

class Comment extends Component {
  state = {
    comment: ''
  }

  componentDidMount() {
    const { body } = this.props
    this.setState({
      comment: body
    })
  }

  onEdit = (id, editId) => {
    this.props.onEdit(id, editId, this.state.comment)
  }

  onDelete = (comment) => {
    this.props.onDelete(comment)  
  }

  onChangeComment = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

  render() {
    const { editId, id, author, edit, onEdit, onDelete } = this.props
    const { comment } = this.state
    if(editId === id) {
      return(
        <div className="Comment-Body">
          <div className="Author">
            author:{author}
          </div>
          <div className="Body">
            <textarea
              cols="50"
              rows="5"
              onChange={this.onChangeComment}
              value={comment}
              type="text" />
          </div>
          <div className="Edit-Delete">
            <CommentEdit
              id={id}
              edit={edit}
              editId={editId}
              onEdit={this.onEdit} />
            <CommentDelete
              id={id}
              onDelete={this.onDelete} />
          </div>
        </div>
      )
    } else {
      return(
        <div className="Comment-Body">
          <div className="Author">
            author:{author}
          </div>
          <div className="Body">
            {comment}
          </div>
          <div className="Edit-Delete">
            <CommentEdit
              id={id}
              editId={editId}
              onEdit={onEdit}/>
            <CommentDelete
              id={id}
              onDelete={onDelete}/>
          </div>
        </div>
      )
    }
  }

}

export default Comment

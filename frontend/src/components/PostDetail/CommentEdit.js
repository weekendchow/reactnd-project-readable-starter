import React, { Component } from 'react'

class CommentEdit extends Component {

  onEdit = () => {
    if(this.props.editId) {
      this.props.onEdit(null, this.props.editId)
      return;
    }
    this.props.onEdit(this.props.id, null)
  }

  render() {
    const { editId, id} = this.props
    
    const buttonValue = (() => {
      if (editId === id) {
        return editId ? 'Save' : 'Edit'
      } else {
        return 'Edit'
      }
    })();

    return(
      <div className="Comment-Edit">
        <input
          onClick={this.onEdit}
          type="button"
          value={buttonValue} />
      </div>
    )
  }
}

export default CommentEdit

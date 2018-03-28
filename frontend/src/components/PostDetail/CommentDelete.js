import React from 'react'

const CommentDelete = (props) => (

    <div className="Comment-Delete">
      <input
        onClick={() => props.onDelete(props)}
        type="button"
        value="Delete"/>
    </div>
)

export default CommentDelete

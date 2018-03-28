import React from 'react'

const CommentForm = (props) => (

      <div className="CommentForm">
        <form
          onSubmit={props.onCommentSubmit}>
          <ul className="form-style-1">
            <li>
              <label>Name <span className="required">:</span></label>
              <input
                type="text"
                name="author"
                onChange={props.onAuthorChange}
                value={props.author}
                className="field-long" />
            </li>
            <li>
              <label>Comment <span className="required">:</span></label>
              <textarea
                  placeholder="Enter your comments..."
                  onChange={props.onInputChange}
                  value={props.txtComment}
                  name="comments"
                  id=""
                  cols="71"
                  rows="5" />
            </li>
            <li>
              <input
                className="Comment-Button"
                value="Submit"
                type="submit"/>
            </li>
          </ul>
        </form>

      </div>
    )

export default CommentForm

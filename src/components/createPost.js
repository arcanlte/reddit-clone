import React from 'react';

const CreatePost = (props) => {
  return (
    <form
      onSubmit={props.postSubmit}
      className='post-form'
    >
    <input 
      type="text"
      name="title"
        value={props.title}
        placeholder="TITLE"
        onChange={props.onContentChange}
      />
    <input
      type="textarea"
      name="content"
      value={props.content}
      placeholder="POST IT"
        onChange={props.onContentChange}
        rows="6"
    />
    <input
      type="submit"
      value="POST"
    />
  </form>
  )
}

export default CreatePost;
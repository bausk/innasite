import React from "react"

const Article = ({
  content: {
    title,
    text,
    banner: {
      file: {
        url
      }
    },
    createdAt
  }
}) => (
  <div>
    <h2>{title}</h2>
    <img src={url} alt={title}/>
    <p>
      {text.text}
    </p>
    <h5>{createdAt}</h5>
  </div>
)

export default Article
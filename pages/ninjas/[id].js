import React from "react";
import styles from "../../styles/Comment.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  console.log(data);

  const paths = data.slice(0, 10).map((c) => {
    return {
      params: {
        id: c.id.toString(),
      },
    };
  });

  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${id}`
  );
  const data = await res.json();

  return {
    props: {
      comment: data,
    },
  };
};

const Comment = ({ comment }) => {
  return (
    <div className='container'>
      <div className={styles.comment_wrap}>
        <p>{comment.body}</p>
      </div>
    </div>
  );
};

export default Comment;

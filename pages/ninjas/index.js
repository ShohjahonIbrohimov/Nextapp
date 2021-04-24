import React from "react";
import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();

  return {
    props: {
      comments: data,
    },
  };
};

const Ninjas = ({ comments }) => {
  return (
    <div className='container'>
      <ul className={styles.list_wrapper}>
        {comments.slice(0, 10).map((t) => (
          <Link href={`/ninjas/${t.id}`}>
            <li className={styles.list_item}>{t.email}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Ninjas;

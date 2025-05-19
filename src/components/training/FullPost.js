"use client";
// import FeaturedPosts from "./FeaturedPosts";
import styles from "./FullPost.module.css";
import Navbar from "@/components/shared/Navbar";
import { renderDescription } from "@/utils/moduleDetails";

// const FullPost = ({ post, featuredPosts }) => {
const FullPost = ({ post }) => {
  if (!post) {
    return <p>La publicación no existe.</p>;
  }

  return (
    <>
      <Navbar />
      <div className={styles.postContainer}>
        {/* Columna de la Nota */}
        <div className={styles.postContent}>
          {post.image && (
            <img
              src={post.image}
              alt={post.name}
              className={styles.postImage}
            />
          )}
          <div className={styles.meta}>
            <p>
              {post.authorEmail
                ? post.authorEmail
                : "Coordinación General de Planeación y Proyectos"}{" "}
              · {post.date}
            </p>
          </div>
          <h1 className={styles.title}>{post.name}</h1>

          <div className={styles.description}>
            <ul style={{ listStyleType: "disc", padding: "0" }}>
              {renderDescription(post.description)}
            </ul>
          </div>
          {post.quote && <div className={styles.quote}>&quot;{post.quote}&quot;</div>}
        </div>

        {/* Columna de Publicaciones Destacadas */}
        <div className={styles.sidebar}>
          {/* <FeaturedPosts featuredPosts={featuredPosts} /> */}
        </div>
      </div>
    </>
  );
};

export default FullPost;

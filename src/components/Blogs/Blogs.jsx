import React from "react";
import blogs from "../../data/blogs.json";

import styles from "./Blogs.module.css"

import { BlogCard } from "./BlogCard";

export const Blogs = () => {
    return (
        <section className={styles.container} id="blogs">
            <h2 className={styles.title}>Blogs</h2>
            <div className={styles.blogs}>
                {blogs.map((blogs,id)=>{
                    return <BlogCard key={id} blogs={blogs} />
                })}
            </div>
        </section>
    );
};
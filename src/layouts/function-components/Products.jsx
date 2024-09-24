import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
const Products = ({ posts }) => {
  const [tab, setTab] = useState("");
  const filterPost = !tab
    ? posts
    : posts.filter((post) => post.data.categories.includes(tab));

  return (
    <section className="section">
      <div className="container">
        <div className="row mt-0">
          {filterPost.map((post, i) => (
            <div className="mb-8 md:col-6" key={`post-${i}`}>
              <div className="rounded-xl bg-white p-5 shadow-lg lg:p-10">
                <h3 className="h4">{post.data.title}</h3>
                <p className="mt-6">{post.data.excerpt}</p>
                <ul className="mt-6 flex flex-wrap text-dark">
                  <li className="my-1 mr-8">
                    <a
                      className="inline-flex items-center font-semibold text-primary"
                      href={`/${post.data.parent}/${post.slug}`}
                    >
                      Read More
                      <AiOutlineArrowRight className="ml-1.5 text-xl font-bold" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

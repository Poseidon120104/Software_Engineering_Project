import React from "react";

const blogs = [
  {
    id: 1,
    title: "Building WildGuard_360: AI-Powered Wildlife Safety System",
    date: "August 2024",
    description:
      "An inside look into how I built an AI-driven wildlife monitoring system using Raspberry Pi, Flask, and machine learning to identify animal species and send instant alerts for safety and conservation.",
    link: "https://medium.com/@yourprofile/wildguard360-ai-wildlife-project", // change link if available
  },
  {
    id: 2,
    title: "MediAssist: Bridging AI and Healthcare for Faster Diagnosis",
    date: "June 2024",
    description:
      "MediAssist uses AI models to help users input symptoms and get disease predictions, improving accessibility and awareness in healthcare. Here’s how I built it with Flask and React.",
    link: "https://medium.com/@yourprofile/mediassist-ai-healthcare-system", // update your link
  },
  {
    id: 3,
    title: "How I Won StatusCode1 Hackathon with Team BiT_CaTs",
    date: "August 2023",
    description:
      "A reflection on our winning project — how teamwork, clear planning, and strong coordination helped us succeed in one of the most exciting hackathons I've participated in.",
    link: "https://medium.com/@yourprofile/statuscode1-hackathon-journey", // update link
  },
];

const Blog = () => {
  return (
    <section
      id="blog"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">BLOGS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Insights, experiences, and thoughts I've shared from my journey in
          tech, research, and innovation.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3">{blog.date}</p>
              <p className="text-gray-500 mb-6 line-clamp-4">{blog.description}</p>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-lg text-sm font-semibold"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;

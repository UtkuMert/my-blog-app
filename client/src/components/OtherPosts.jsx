import React from 'react'

const OtherPosts = () => {
    const posts = [
          {
            id: 1,
            title: "What is Lorem Ipsum?",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img: "https://picsum.photos/200",
          },
          {
            id: 2,
            title: "Why do we use it?",
            description:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            img: "https://picsum.photos/200",
          },
        ]
  return (
    <div className='otherPost'>
        <h1>Other posts about this category</h1>
        {posts.map(post => (
            <div className='post' key={post.id}>
                <img src={post.img} alt='' />
                <h2>{post.title}</h2>
                <button>Read more</button>
            </div>
        ))}
    </div>
  )
}

export default OtherPosts
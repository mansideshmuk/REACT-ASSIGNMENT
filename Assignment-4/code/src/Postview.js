import React, { useState, useEffect } from 'react';
import './Postview.css';
import axios from 'axios'
const Postview = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3004/user')
      .then(res => {
        setPost(res.data);
      })
  }, []);
  return (
    <div className="site-container">
      <header className='for-header'>
        <img className='for-icon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyfm4LCFdFRfp-Sy2Tkbbw-0nsUAJco3a20u9iaT4H7UGIsw6PINzvg1zXama0vkhOeeQ&usqp=CAU" alt='profile' />

        <h1 className='for-name'>InstaClone</h1>
        <img className='for-camera' src="https://cdn5.vectorstock.com/i/1000x1000/94/34/creative-black-camera-logo-design-symbol-vector-25619434.jpg" alt='camera' />

      </header>
      {
        post.map(post => {
          return (
            <body className='main-container'>
              <div className='post-container'>
                <div className='post-info'>
                  <div className='name-info'>
                    <label className='name'><strong>{post.name}</strong></label><br></br>
                    <label className='profile-location'>{post.location}</label>
                  </div>
                  <div>
                    <img className='more-icon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiWB-8Su5wIXzWytwXTTJ5DYSKqrDHqLNNVblk-xFGdhWQhMtABFvcGMWfDhNpdRJRA5I&usqp=CAU" alt='more' />

                  </div>
                  <div className='image-display'>
                    <img className='profile-image' src={post.PostImage} alt='ima' />
                  </div>

                  <div>
                    <img className='image-like' src="https://e7.pngegg.com/pngimages/507/757/png-clipart-computer-icons-heart-like-button-like-share-comment-love-logo.png" alt='more' />

                    <img className='share' src="https://toppng.com/uploads/preview/icon-icon-icon-icon-instagram-share-icon-11563216824o9wwpyqeut.png" alt='more' />

                    <label className='date'>{post.date}</label>
                    <p className='like'>{post.likes} likes</p>
                    <p className='description'>{post.description}</p>
                  </div>
                </div>
              </div>
            </body>
          )
        })
      }
    </div>
  );
}
export default Postview;

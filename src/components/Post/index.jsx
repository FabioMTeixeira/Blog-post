/* eslint-disable react/prop-types */
import './style.css'

export default function Post({ post }) {
    return (
        <div>
            <h2 className='title'>{post.title}</h2>
            <p className='text'>{post.text}</p>
            <p>
                <a href="#">Ler Mais</a>
            </p>
        </div>
    )
}
/* eslint-disable react/prop-types */
import { useState } from 'react';
import './style.css'

export default function Modal({ handleToggleModal, modalOpen, setPosts, posts }) {
    const [input, setInput] = useState('')
    const [textArea, setTextArea] = useState('')

    function handleAddNewPost() {
        const newPost = {
            id: posts.length + 1,
            title: input,
            text: textArea
        }

        setPosts([ ...posts, newPost])
        setInput('')
        setTextArea('')

        handleToggleModal()
    }

    return (
        <>
            {modalOpen && 
                <div className='backdrop'>
                    <div className='modal'>
                        <h2>Criar Post</h2>
                        <input 
                        type="text" 
                        placeholder='Título'
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        />
                        <textarea
                        placeholder='Texto'
                        value={textArea}
                        onChange={(event) => setTextArea(event.target.value)}
                        />

                        <button 
                        className='btn-primary'
                        onClick={() => handleAddNewPost()}
                        >Cadastrar novo post</button>
                        <button 
                        className='btn-secundary'
                        onClick={handleToggleModal}
                        >Fechar cadastro</button>
                    </div>
                </div>
            }       
        </>
    )
}
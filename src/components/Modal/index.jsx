import { useState } from 'react';
import './style.css'

export default function Modal() {
    const [input, setInput] = useState('')
    const [textArea, setTextArea] = useState('')

    return (
        <>
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

                    <button className='btn-primary'>Cadastrar novo post</button>
                    <button className='btn-secundary'>Fechar cadastro</button>
                </div>
            </div>
        </>
    )
}
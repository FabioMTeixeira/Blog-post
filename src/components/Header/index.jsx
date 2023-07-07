/* eslint-disable react/prop-types */
import './style.css'

export default function Header({ handleToggleModal }) {
    return (
        <header className='header'>
            <h1>Meu Blog</h1>
            <button 
            className='btn-primary'
            onClick={handleToggleModal}
            >Criar Post</button>
        </header>
    )
}
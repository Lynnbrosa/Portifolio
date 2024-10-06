import { Link } from 'react-router-dom'


export default function Home(){
    return(
        <section className="h-[93vh] py-10 px-20 flex justify-between items-center center bg-mainColor">
            <div className='flex flex-col '>
                <div className='flex flex-col justify-start'>
                    <h1 className='text-5xl text-white mb-4'>Meu nome é Lynn</h1>
                    <h1 className='text-white text-5xl font-bold'>
                        Bem-Vindo!
                    </h1>
                    <p className='text-white text-lg mt-16 max-w-xl'>Fique à vontade para entrar em contato para discutir projetos, tirar dúvidas ou compartilhar feedback. Estou disponível e pronto para ajudar no que for necessário!</p>
                </div>
                <div className="flex mt-5 justify-start gap-2">
                    <Link className='butao-1' to='/portifolio'>Meu Portifolio</Link>
                    <Link className='butao-2' to='/contato'>Entre em Contato</Link>
                </div>
            </div>
            <img className='img-home' src="./WhatsApp Image 2024-10-04 at 14.51.38.jpeg" alt="imagem" />
        </section>
    )
}
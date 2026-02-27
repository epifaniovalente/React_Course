import savings from '../../image/savings.svg'
import LinkButton from './LinkButton';

function Home() {
    return (
        <section className='w-full flex flex-col items-center justify-center p-16'>
            <h1 className="text-black text-3xl mb-2 font-bold">
                Bem-vindo ao <span className='text-yellow-600 bg-gray-900 px-2'>Costs</span>
            </h1>
            <p className='mb-4 text-gray-600'>
                Comece a gerenciaros seus projectos agora mesmo!
            </p>
            <LinkButton to="/newproject" text="Criar Projecto"/>
            <img src={savings} alt="costs" className='w-3xs my-8'/>
        </section>
    )
}

export default Home;
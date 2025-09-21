import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight, faClock, faCoins, faCar } from '@fortawesome/free-solid-svg-icons'
import camry from '../assets/camry-one-love.webp'

export const TaxiItem = () => {
	return (
		<a href="#" className='flex flex-col sm:flex-row justify-end w-full my-4 p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100'>
			<img className='block h-auto max-w-2xs mr-4 rounded-md' src={camry} alt="logo" />
			<div
				className="block w-full"
			>
				<h5 className="mb-2 text-2xl font-bold tracking-tight">
					Октемцы <FontAwesomeIcon className='text-xl' icon={faCircleArrowRight}/> Якутск
				</h5>
				<p className="font-normal text-gray-700">
					Увезу в Якутск в <FontAwesomeIcon icon={faClock}/>7:30
				</p>
				<p className="font-normal text-gray-700">
					С адреса до адреса. Беру посылки
				</p>
				<p className="font-medium text-gray-700">
					<FontAwesomeIcon icon={faCoins}/> 400 рублей
				</p>
				<p className="font-medium text-gray-700">
					<FontAwesomeIcon icon={faCar}/> Номер машины: <b>О297КЕ</b>
				</p>
			</div>
		</a>
	)
}

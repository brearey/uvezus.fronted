import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCircleArrowRight,
	faClock,
	faCoins,
	faCar,
} from '@fortawesome/free-solid-svg-icons'
import camry from '../assets/camry-one-love.webp'

export const TaxiItem = () => {
	return (
		<a
			href="#"
			className="flex flex-col sm:flex-row w-full my-4 p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200"
		>
			{/* Image - центрируем на мобильных */}
			<div className="flex justify-center items-center sm:justify-start mb-4 sm:mb-0 sm:mr-4">
				<img
					className=" h-auto max-w-2xs sm:max-w-32 sm:h-32 object-cover rounded-md"
					src={camry}
					alt="Toyota Camry"
				/>
			</div>

			{/* Content */}
			<div className="flex-1 min-w-0">
				{/* Заголовок с переносами */}
				<h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight break-words">
					<span className="whitespace-nowrap">Октемцы</span>
					<FontAwesomeIcon
						className="mx-2 text-lg sm:text-xl"
						icon={faCircleArrowRight}
					/>
					<span className="whitespace-nowrap">Якутск</span>
				</h5>

				{/* Детали */}
				<div className="space-y-2 text-sm sm:text-base">
					<p className="font-normal text-gray-700">
						Увезу в Якутск в <FontAwesomeIcon icon={faClock} className="w-4" />7:30
					</p>

					<p className="font-normal text-gray-700">
						С адреса до адреса. Беру посылки
					</p>

					<p className="font-medium text-gray-700">
						<FontAwesomeIcon icon={faCoins} className="w-4 mr-2" />
						400 рублей
					</p>

					<p className="font-medium text-gray-700">
						<FontAwesomeIcon icon={faCar} className="w-4 mr-2" />
						Номер машины: <b className="text-sky-700">О297КЕ</b>
					</p>
				</div>
			</div>
		</a>
	)
}

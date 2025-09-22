import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCircleArrowRight,
	faClock,
	faCoins,
	faCar,
} from '@fortawesome/free-solid-svg-icons'
import { City, type Car } from '../types/types'
import camry from '../assets/camry-one-love.webp'

type Props = {
	from: City,
	to: City,
	driveAt: Date,
	description: string | null,
	cost: number,
	car: Car
}

export const TaxiItem = ({from, to, driveAt, description, cost, car}: Props) => {
	return (
		<a
			href="#"
			className="flex flex-row w-full my-2 p-2 gap-4 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200"
		>
			{/* Image - центрируем на мобильных */}
			<div className="flex">
				<img
					className=" h-auto max-w-32 object-cover rounded-md"
					src={camry}
					alt="Toyota Camry"
				/>
			</div>

			{/* Content */}
			<div className="flex-1 min-w-0">
				{/* Заголовок с переносами */}
				<h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight break-words">
					<span className="whitespace-nowrap">{from}</span>
					<FontAwesomeIcon
						className="mx-2 text-lg sm:text-xl"
						icon={faCircleArrowRight}
					/>
					<span className="whitespace-nowrap">{to}</span>
				</h5>

				{/* Детали */}
				<div className="space-y-2 text-sm sm:text-base">
					<p className="font-normal text-gray-700">
						Увезу в {to} в <FontAwesomeIcon icon={faClock} className="w-4" />{`${driveAt.getHours()}:${driveAt.getMinutes()}`}
					</p>

					<p className="font-normal text-gray-700">
						{description}
					</p>

					<p className="font-medium text-gray-700">
						<FontAwesomeIcon icon={faCoins} className="w-4 mr-2" />
						{cost} рублей
					</p>

					<p className="font-medium text-gray-700">
						<FontAwesomeIcon icon={faCar} className="w-4 mr-2" />
						{car.model} с номером: <b className="text-sky-700">{car.number}</b>
					</p>
				</div>
			</div>
		</a>
	)
}

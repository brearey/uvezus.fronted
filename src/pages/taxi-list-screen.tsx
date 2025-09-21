import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCube, faA, faB } from '@fortawesome/free-solid-svg-icons'
import { isValidPassengersCount, isValidAddress } from '../util/validators'
import { useLocalStorage } from '../hooks/use-storage'
import { TaxiItem } from '../components/taxi-item'
import uvezusLogo from '../assets/logo.svg'
import { toast } from 'react-toastify'

export function TaxiListScreen() {
	const [adultCount, setAdultCount] = useLocalStorage('adultCount', 1)
	const [childCount, setChildCount] = useLocalStorage('childCount', 0)
	const [fromAddress, setFromAddress] = useLocalStorage(
		'fromAddress',
		'с. Чапаево, ул. Николаева 27/2'
	)
	const [toAddress, setToAddress] = useLocalStorage(
		'toAddress',
		'г. Якутск, 203 мкрн. корпус 28'
	)
	const [packageChecked, setPackageChecked] = useLocalStorage(
		'packageChecked',
		false
	)

	const openFromAddressModal = () => {
		const temp = prompt('Введите ваш адрес', fromAddress)
		if (temp && isValidAddress(temp)) {
			setFromAddress(temp)
		} else {
			toast.warn('Введите корректный адрес')
		}
	}

	const openToAddressModal = () => {
		const temp = prompt('Введите ваш адрес', toAddress)
		if (temp && isValidAddress(temp)) {
			setToAddress(temp)
		} else {
			toast.warn('Введите корректный адрес')
		}
	}

	const openAdultModal = () => {
		if (packageChecked) return

		const temp: number | null = Number(
			prompt('Введите количество взрослых пассажиров', adultCount.toString())
		)
		if (isValidPassengersCount(temp) && temp + childCount > 0) {
			// Должен быть хотя бы один пассажир
			setAdultCount(temp)
		} else {
			toast.warn('Введите корректное количество')
		}
	}

	const openChildModal = () => {
		if (packageChecked) return

		const temp: number | null = Number(
			prompt('Введите количество пассажиров-детей', childCount.toString())
		)
		if (isValidPassengersCount(temp) && temp + adultCount > 0) {
			// Должен быть хотя бы один пассажир
			setChildCount(temp)
		} else {
			toast.warn('Введите корректное количество')
		}
	}

	const changePackageChecked = () => {
		setPackageChecked((prev: boolean) => !prev)
		setAdultCount(0)
		setChildCount(0)
	}

	const showAdultCount = (count: number): string => {
		return `${count} ${count === 1 ? 'взрослый' : 'взрослых'}`
	}

	const showChildCount = (count: number): string => {
		return `${count} ${count === 1 ? 'ребенок' : 'детей'}`
	}

	const lineThrough = packageChecked ? 'line-through' : ''

	return (
		<div className="container mx-auto p-2 select-none">
			{/* header */}
			<div className="mb-2 flex flex-col items-center">
				<div>
					<img src={uvezusLogo} alt="uvezus logo" className="" />
				</div>
				<h1 className="text-xl sm:text-2xl font-bold w-full text-center">
					Заполните данные и выберите такси
				</h1>
			</div>

			{/* passenger and address */}
			<div className="flex flex-col lg:flex-row gap-6 p-6 bg-white rounded-lg shadow-md">
				{/* left section - passengers */}
				<div className="flex flex-col gap-4 flex-1">
					{/* Adult */}
					<div
						className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200"
						onClick={openAdultModal}
					>
						<FontAwesomeIcon icon={faUser} className="text-sky-600 text-lg" />
						<span className={'text-gray-700 font-medium ' + lineThrough}>
							{showAdultCount(adultCount)}
						</span>
					</div>

					{/* Child */}
					<div
						className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200"
						onClick={openChildModal}
					>
						<FontAwesomeIcon icon={faUser} className="text-sky-600 text-lg" />
						<span className={'text-gray-700 font-medium ' + lineThrough}>
							{showChildCount(childCount)}
						</span>
					</div>

					{/* Package */}
					<input
						type="checkbox"
						id="react-option"
						checked={packageChecked}
						onChange={changePackageChecked}
						className="hidden peer"
					/>
					<label
						htmlFor="react-option"
						className="flex items-center gap-3 p-4 text-gray-700 bg-white border border-gray-300 rounded-lg cursor-pointer peer-checked:bg-sky-200 hover:text-gray-600 peer-checked:text-gray-600"
					>
						<FontAwesomeIcon icon={faCube} className="text-sky-600 text-lg" />
						<span className="text-gray-700 font-medium">Отправлю посылку</span>
					</label>
				</div>

				{/* right section - addresses */}
				<div className="flex flex-col gap-4 flex-1">
					<div
						className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200"
						onClick={openFromAddressModal}
					>
						<FontAwesomeIcon icon={faA} className="text-red-600 text-lg" />
						<span className="text-gray-700">
							<span className="font-medium">Откуда:</span> {fromAddress}
						</span>
					</div>

					<div
						className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200"
						onClick={openToAddressModal}
					>
						<FontAwesomeIcon icon={faB} className="text-red-600 text-lg" />
						<span className="text-gray-700">
							<span className="font-medium">Куда:</span> {toAddress}
						</span>
					</div>
				</div>
			</div>

			{/* List of taxis */}
			<TaxiItem />
			<TaxiItem />
			<TaxiItem />
		</div>
	)
}

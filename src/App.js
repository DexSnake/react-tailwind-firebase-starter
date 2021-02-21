import 'styles/index.css'
import react from 'images/react.png'
import firebase from 'images/firebase.png'
import tailwind from 'images/tailwind.png'

const App = () => {
	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center">
			<span className="font-bold text-4xl max-w-4xl">React Tailwind Firebase Starter</span>
			<div className="flex justify-between w-full max-w-md">
				<img src={react} alt="react logo" className="h-32" />
				<img src={tailwind} alt="tailwind logo" className="h-32" />
				<img src={firebase} alt="firebase logo" className="h-32" />
			</div>
		</div>
	)
}

export default App

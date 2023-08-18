import { useLocation } from 'react-router-dom';
function Nav() {
	const location = useLocation();

	return (
		<nav className="flex justify-between items-center bg-zinc-900 h-20 p-4">
			<div className="flex items-center gap-2">
				<img
					className="w-10 h-10 rounded-full"
					src="https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
				/>
				<div className="text-white text-xl font-bold leading-tight tracking-widest">
					DoggyGo.
				</div>
			</div>
			<div className="flex gap-10 text-zinc-200">
				<a href="/">Home</a>
				<a href="/services">Services</a>
				<a href="/help">Help</a>
			</div>
			<div className="flex gap-2">
				{location.pathname === '/dash' ? (
					<button className="border border-neutral-50 px-6 py-3 rounded text-neutral-50">
						LOGOUT
					</button>
				) : (
					<>
						<button className="border border-neutral-50 px-6 py-3 rounded text-neutral-50">
							LOGIN
						</button>
						<button className="bg-neutral-50 px-6 py-3 rounded text-zinc-900">
							SIGNUP
						</button>
					</>
				)}
			</div>
			<div className="w-8 h-8">{/* Your menu icon here */}</div>
		</nav>
	);
}

export default Nav;

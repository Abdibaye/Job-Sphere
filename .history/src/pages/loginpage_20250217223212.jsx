function LoginPage() {
    return (
        <div className="flex h-screen">
            {/* Background Image Section */}
            <div 
                className="w-1/2 bg-cover bg-center" 
                style={{ backgroundImage: "url('./assets/loginpg.png')" }}
            ></div>

            {/* Login Form Section */}
            <div className="flex items-center justify-center bg-blue-100 w-1/2">
                <div className="bg-red-100 p-4 rounded-lg shadow-md w-full max-w-md">
                    <div className="text-center text-xl font-bold">Logo</div>
                    <div className="text-center text-lg mb-4">Log in to your account</div>
                    <div>
                        <input 
                            type="text" 
                            className="block w-full mb-2 p-2 rounded border border-gray-300" 
                            placeholder="Username" 
                        />
                        <input 
                            type="password" 
                            className="block w-full mb-2 p-2 rounded border border-gray-300" 
                            placeholder="Password" 
                        />
                    </div>
                    <button className="w-full bg-blue-500 text-white p-2 mb-2 rounded hover:bg-blue-600">
                        Login
                    </button>
                    <div className="text-center text-gray-600">--- or ---</div>
                    <div className="flex justify-center space-x-2 mt-2">
                        <div className="bg-white p-2 rounded cursor-pointer hover:bg-gray-100">Google</div>
                        <div className="bg-white p-2 rounded cursor-pointer hover:bg-gray-100">Facebook</div>
                    </div>
                    <div className="text-center mt-2 text-sm text-gray-600">
                        Don't have an account? <span className="text-blue-500 cursor-pointer">Sign up</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
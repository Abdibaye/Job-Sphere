import HomePage from "./homepage";

function handleOnClick(){
    return (<HomePage />);
}

function LoginPage() {

    return (
        <div className="flex h-screen">
             <div className="bg-[url(./assets/loginpg.png)] w-[50%] bg-cover bg-center"></div>
            <div className="flex items-center justify-center w-1/2">
                <div className="bg-red-100 p-4">
                    <div>logo</div>
                    <div>Log in to your account</div>
                    <div>
                        <input type="text" className="block w-full mb-2 p-2" placeholder="Username" />
                        <input type="text" className="block w-full mb-2 p-2" placeholder="Password" />
                    </div>
                    <button className="w-full bg-blue-500 text-white p-2 mb-2" onClick={handleOnClick}>Login</button>
                    <div className="text-center">--- or ---</div>
                    <div className="flex justify-center space-x-2 mt-2">
                        <div className="bg-white p-2">Google</div>
                        <div className="bg-white p-2">Facebook</div>
                    </div>
                    <div className="text-center mt-2">Don't have an account? Sign up</div>
                </div>
            </div>
        </div>
    );
}   

export default LoginPage;
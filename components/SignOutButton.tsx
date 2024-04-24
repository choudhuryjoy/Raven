"use client"

import { signout } from "@/lib/SignOutHelper";

const SignOutButton = () => {
    return (
        <div>
            <button
                onClick={async() => {
                    await signout();
                }}
                className="m-2 block mx-auto text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
                Sign Out
            </button>
        </div>
    )
}

export default SignOutButton
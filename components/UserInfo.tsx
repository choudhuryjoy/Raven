"use client"

import { signoutHelper } from "@/lib/signOutHelper";
import { Session } from "next-auth";

export default function UserInfo({ session, expires }: { session: Session, expires: Date | null }) {
    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-4 text-center">User Info</div>
                <div className="flex justify-center">
                    {session?.user?.image ? (
                        <img
                            className="h-28 w-28 rounded-full border-2 border-gray-300"
                            src={session.user.image}
                            alt="profile img"
                        />
                    ) : (
                        <img
                            className="h-28 w-28 rounded-full border-2 border-gray-300"
                            src="profile.jpg"
                            alt="generic profile img"
                        />
                    )}
                </div>
                <div className="mb-4 p-4">
                    <p>
                        <span className="font-bold">Name:</span> {session?.user?.name}
                    </p>
                    <p>
                        <span className="font-bold">Email:</span> {session?.user?.email}
                    </p>
                </div>
                <div className="text-sm text-center">
                    <p>
                        <span className="font-bold">Expires:</span>{" "}
                        {expires ? expires.toLocaleString() : "Not available"}
                    </p>
                </div>
                <button
                    type="button"
                    onClick={async () => {
                        await signoutHelper();
                    }}
                    className="m-2 block mx-auto text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                    SignOut
                </button>
            </div>
        </div>
    );
}
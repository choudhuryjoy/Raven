import { auth, signOut } from "@/auth";
import SignOutButton from "@/components/SignOutButton";


// this is a server component
const page = async () => {
    const session = await auth();

    if (!session || !session.expires) {
        return null;
    }
    const expires = session?.expires ? new Date(session.expires) : null;

    const handleSignOut = async () => {
        await signOut();
    };

    return (
        <div className="flex justify-center items-center h-screen text-xl">
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
                        <p>
                            <span className="font-bold">Role:</span> {session?.user?.userType}
                        </p>
                    </div>
                    <div className="text-sm text-center">
                        <p>
                            <span className="font-bold">Expires:</span>{" "}
                            {expires ? expires.toLocaleString() : "Not available"}
                        </p>
                    </div>
                    <SignOutButton/>
                </div>
            </div>
        </div>
    );
};

export default page;
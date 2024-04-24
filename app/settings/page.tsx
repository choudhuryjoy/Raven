import { auth } from "@/auth";
import UserInfo from "@/components/UserInfo";

const page = async () => {
    const session = await auth();
    if (!session || !session.expires) {
        return null;
    }
    const expires = session?.expires ? new Date(session.expires) : null;

    return (
        <div className="flex justify-center items-center h-screen text-xl">
            <UserInfo session={session} expires={expires} />
        </div>
    );
};

export default page;
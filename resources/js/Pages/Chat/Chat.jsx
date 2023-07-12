import ChatInput from '@/Components/Chat/ChatInput';
import ChatMessages from '@/Components/Chat/ChatMessages';
import ChatSidebar from '@/Components/Chat/ChatSidebar';
import UserInfoHeader from '@/Components/Chat/UserInfoHeader';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { Head } from '@inertiajs/react';

export default function Chat(props) {
    // const roomId = 1;
    console.log(props);

    Echo.private(`messenger.1.2`)
        .listen('.MessageSent', (e) => {
            console.log(e);
        });

    // Echo.join(`group_chat.${roomId}`)
    //     .here((users) => {
    //         console.log(users);
    //     })
    //     .joining((user) => {
    //         console.log("joining: " + user.name);
    //     })
    //     .leaving((user) => {
    //         console.log("leaving: " + user.name);
    //     })
    //     .error((error) => {
    //         console.error(error);
    //     })
    //     .listen('.GroupChatMessage', (e) => {
    //         console.log(e.message);
    //     });


    return (
        <AuthenticatedLayout
            user={props.auth.user}
        >

            <div className="">
                <div className="messenger h-screen overflow-hidden p-4">
                    <div className="flex">
                        <div className="basis-2/6 border-r border-slate-100 bg-white pt-3">
                <ChatSidebar recentMessages={props.recentMessages}/>
                        </div>
                        <div className="basis-4/6">
                            <UserInfoHeader />

                            <div className="messenger mt-4">
                                <div className="px-4">
                                    <ChatMessages />
                                </div>

                                <ChatInput />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </AuthenticatedLayout>
    );
}

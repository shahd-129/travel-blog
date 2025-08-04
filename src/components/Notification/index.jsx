// import React, { useEffect } from "react";
// import { io } from "socket.io-client";
// import { Box, List, ListItem, Button } from "@mui/material";
// import { useSelector } from "react-redux";
// import { useGetAllNotificationsQuery
//     // , useMarkNotificationasSeenMutation 
// } from "../../redux/api/notifications";

// const socket = io("https://test-nest-blog.onrender.com", { transports: ["websocket"] });

// export default function Notifications() {

//     const userId = useSelector((state) => state?.token?.user)
//     console.log(userId);
//     const { data, refetch } = useGetAllNotificationsQuery({userId});
//     console.log(data);

//     // const [markAsSeen] = useMarkNotificationasSeenMutation();
//     // console.log(markAsSeen);


  
//     useEffect(() => {
//         socket.on("getNotification", () => {
//             refetch();
//         });

//         return () => {
//             socket.off("getNotification");
//         };
//     }, [refetch]);

//     // const handleSeen = async (id) => {
//     //     await markAsSeen({ id });
//     //     refetch();
//     // };

//     return (
//         <Box>

//         </Box>
//     );
// }

import { Box } from "@chakra-ui/layout";
import { useContext, useState } from "react";
import Chatboxx from "../components/Chatboxx";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import { ChatContext } from "../Context/ChatProvider";
const Chatpage = () => {
  const { user } = useContext(ChatContext)
  const [fetchAgain, setFetchAgain] = useState(false);
  // const { user } = ChatState();
  
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
       <Box display="flex" justifyContent={"space-between"} w="100%" h="91.5vh" p="10px">
        {user && <MyChats/>}
        {user && <Chatboxx/>}
       </Box>
    </div>
  );
};

export default Chatpage;
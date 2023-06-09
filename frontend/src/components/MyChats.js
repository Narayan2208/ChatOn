import React, {useState,useEffect} from 'react'
import { useToast } from "@chakra-ui/toast";
import { AddIcon } from '@chakra-ui/icons'
import {Box,Stack,Button,Text} from '@chakra-ui/react'
import {ChatState} from '../Context/ChatProvider'
import ChatLoading from './ChatLoading';
import { getSender } from '../config/ChatLogics';
import axios from "axios";
import GroupChatModal from './miscellaneous/GroupChatModal';
function MyChats({fetchAgain}) {
  const [loggedUser, setLoggedUser] = useState();
  const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();
  const toast = useToast();


  const fetchChats = async () => {
    // console.log(user._id);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get("/api/chat", config);
      console.log(data);
      setChats(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
    // eslint-disable-next-line
  }, [fetchAgain]);
  return (
    <Box
    display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
    flexDir="column"
    alignItems="center"
    p={3}
    bg="white"
    w={{ base: "100%", md: "31%" }}
    borderRadius="lg"
    borderWidth="1px"
  >
    <Box  pb={3}
        px={3}
        fontSize={{ base: "28px", md: "30px" }}
        fontFamily="Work sans"
        d="flex"
        w="100%"
        justifyContent="space-between"
        alignItems="center">My chats
        <GroupChatModal>

        
         <Button
            d="flex"
            fontSize={{ base: "17px", md: "10px", lg: "17px" }}
            rightIcon={<AddIcon />}
            ml={"10px"}
            bg={"#4832D5"}
            fontWeight={"bolder"}
            colorScheme='white'
          >
            New Group Chat
          </Button>
          </GroupChatModal>
        </Box>
        <Box display="flex"
        flexDir="column"
        p={3}
        bg="#F8F8F8"
        w="100%"
        h="100%"
        borderRadius="lg"
        overflowY="hidden">
      {
        chats ? (
            <Stack overflowY= "scroll">
            {chats.map((chat)=>(
              <Box onClick={() => setSelectedChat(chat)}
                cursor="pointer"
                bg={selectedChat === chat ? "#4832D5" : "#CCF281"}
                color={selectedChat === chat ? "white" : "black"}
                px={3}
                py={2}
                fontSize={"18px"}
                fontFamily='monospace'
                borderRadius="lg"
                key={chat._id}>
            <Text>
                  {!chat.isGroupChat
                    ? getSender(loggedUser, chat.users)
                    : chat.chatName}
                </Text>
              </Box>
            ))}
            </Stack>
        ) : (
          <ChatLoading/>
        )
      }
        </Box>
  </Box>
  )
}

export default MyChats
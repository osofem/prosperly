# 0.0.9
* Initial release

# 0.0.10
* Implemented November 5, 2021 Bot API 5.4 Updates as per below
* Added the the parameter creates_join_request to the methods createChatInviteLink and editChatInviteLink for managing chat invite links that create join requests.
* ~Added the fields creates_join_request and pending_join_request_count to the class ChatInviteLink.~
* Added ~the field name to the class ChatInviteLink and~ the parameters name to the methods createChatInviteLink and editChatInviteLink for managing invite link names.
* Added updates about new requests to join the chat, represented by the class ChatJoinRequest and the field chat_join_request in the Update class. The bot must be an administrator in the chat with the can_invite_users administrator right to receive these updates.
* Added the methods approveChatJoinRequest and declineChatJoinRequest for managing requests to join the chat.
* Added support for the choose_sticker action in the method sendChatAction.

# 1.0.0
* Added payment functions
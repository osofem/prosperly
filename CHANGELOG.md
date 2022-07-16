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

# 1.0.1
* Introduced a simple test
* Added some documentations
* Added some usage examples
* getUpdates to accept empty parameter instead of empty object {}.

# 1.1.0
* More documentations and usage examples
* Implemented December 7, 2021 Bot API 5.5 Updates as per below
* ~Bots are now allowed to contact users who sent a join request to a chat where the bot is an administrator with the can_invite_users administrator right – even if the user never interacted with the bot before.~ NOTHING TO DO HERE
* ~Added support for mentioning users by their ID in inline keyboards. This will only work in Telegram versions released after December 7, 2021. Older clients will display unsupported message.~ NOTHING TO DO HERE
* Added the methods banChatSenderChat and unbanChatSenderChat for banning and unbanning channel chats in supergroups and channels.
* ~Added the field has_private_forwards to the class Chat for private chats, which can be used to check the possibility of mentioning the user by their ID.~ NOTHING TO DO HERE
* ~Added the field has_protected_content to the classes Chat and Message.~ NOTHING TO DO HERE
* ~Added the field is_automatic_forward to the class Message.~ NOTHING TO DO HERE

# 1.2.0
* Added links and examples to the code comments
* Implemented December 30, 2021 Bot API 5.6 Updates as per below
* ~Improved support for Protected Content.~ NOTHING TO DO HERE
* Added the parameter protect_content to the methods sendMessage, sendPhoto, sendVideo, sendAnimation, sendAudio, sendDocument, ~sendSticker,~ sendVideoNote, sendVoice, sendLocation, sendVenue, sendContact, sendPoll, sendDice, sendInvoice, ~sendGame,~ sendMediaGroup, copyMessage, forwardMessage to allow sending messages with protected content to any chat.
* ~Added support for spoiler entities, which will work in Telegram versions released after December 30, 2021. Older clients will display unsupported message.~ NOTHING TO DO HERE
* Added new MessageEntity type “spoiler”.
* ~Added the ability to specify spoiler entities using HTML and MarkdownV2 formatting options.~ NOTHING TO DO HERE

# 2.0.0 [YTTR]
* Added more links and examples to the code comments
* Implemented January 31, 2022 Bot API 5.7 updates as per below
* ~Added support for Video Stickers.~ NOTHING TO DO HERE YET
* ~Added the field is_video to the classes Sticker and StickerSet.~ NOTHING TO DO HERE
* ~Added the parameter webm_sticker to the methods createNewStickerSet and addStickerToSet.~ NOTHING TO DO HERE YET 
* Implemented April 16, 2022 Bot API 6.0 updates as per below
* Added support for Web Apps, see the detailed manual here. (blog announcement) PENDING
* Added the class WebAppInfo and the fields web_app to the classes KeyboardButton and InlineKeyboardButton.
* Added the class SentWebAppMessage and the method answerWebAppQuery for sending an answer to a Web App query, which originated from an inline button of the 'web_app' type.
* Added the class WebAppData ~and the field web_app_data to the class Message.~
* Added the class MenuButton and the methods setChatMenuButton and getChatMenuButton for managing the behavior of the bot's menu button in private chats.
* Added the class ChatAdministratorRights and the methods setMyDefaultAdministratorRights and getMyDefaultAdministratorRights for managing the bot's default administrator rights.
* ~Added support for t.me links that can be used to add the bot to groups and channels as an administrator.~ NOTHING TO DO HERE
* Added the field last_synchronization_error_date to the class WebhookInfo.
* ~Renamed the field can_manage_voice_chats to can_manage_video_chats in the class ChatMemberAdministrator. The old field will remain temporarily available.~ NOTHING TO DO HERE
* Renamed the parameter can_manage_voice_chats to can_manage_video_chats in the method promoteChatMember. ~The old parameter will remain temporarily available.~
* ~Renamed the fields voice_chat_scheduled, voice_chat_started, voice_chat_ended, and voice_chat_participants_invited to video_chat_scheduled, video_chat_started, video_chat_ended, and video_chat_participants_invited in the class Message. The old fields will remain temporarily available.~ NOTHING TO DO HERE
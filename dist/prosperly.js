"use strict";
/*
 * Based on Telegram Bot API 5.4.
 * Prosperly
 * Authour: Oluwafemi Oso (osofem)
 *
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Prosperly_instances, _Prosperly_API_URL, _Prosperly_setWebhook2, _Prosperly_submitGETRequest, _Prosperly_submitPOSTRequest, _Prosperly_serverSetup;
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __importDefault(require("events"));
const http_1 = __importDefault(require("http"));
const url_1 = require("url");
const https_1 = __importDefault(require("https"));
class Prosperly extends events_1.default {
    /**
     * Constructor. Declares bot token and start building API URL. Setup webhook if webhookParams is specified and server for listening if serverless is false
     * @param botToken bot token gotten from \@BotFather
     * @param webhookParams webhook parameter that specify url and other information. Object of type {@link SetWebhookParams}
     * @param serverless specify if the app is to be serverless. Default is false (that is a server will be initialiated). Note if true then app can't receive event messages
     *
     * @example
     * const myBotToken = 'YOUR-BOT-TOKEN';
     * const webhookURL = 'https://example.com:8080/some-path';
     *
     * const Prosperly = require('prosperly');
     * const bot = new Prosperly({
     *  //Bot token
     *  botToken: myBotToken,
     *  //webhook parameters
     *  webhookParams: {
     *    url: webhookURL
     *  },
     *  //for serverless environment, set serverless to true
     *  serverless: true
     * });
     */
    constructor(contents) {
        super();
        _Prosperly_instances.add(this);
        _Prosperly_API_URL.set(this, void 0);
        this.version = 'v1.2.0'; //this version of prosperly
        __classPrivateFieldSet(this, _Prosperly_API_URL, "https://api.telegram.org/bot" + contents.botToken + "/", "f");
        //setup webhook and server for listening
        if (typeof (contents.webhookParams) != 'undefined') {
            //setup webhook
            __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_setWebhook2).call(this, contents.webhookParams).then(() => {
                if (!contents.serverless && contents.webhookParams) {
                    //webhook successful so setup server
                    __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_serverSetup).call(this, contents.webhookParams);
                }
            }).catch((error) => {
                //error occured
                this.emit('error', error);
            });
        }
    }
    /**
    * Use this method to receive incoming updates using long polling
    * @param contents Objects to specify the update parameters to receive. Object of type {@link GetUpdateParams}
    * @return Promise of an Array of Update objects.
    *
    * @example
    * const myBotToken = 'YOUR-BOT-TOKEN';
    * const Prosperly = require('prosperly');
    * const bot = new Prosperly({
    *   botToken: myBotToken
    * });
    *
    * bot.getUpdates({
    *   offset: 0,
    *   limit: 10, //max is 100
    *   timeout: 10,
    *   //optionally set allowed updates
    *   allowed_updates: ["message", "edited_channel_post", "callback_query"]
    * }).then((data)=>{
    *   //do something with the array of objects
    * }).catch((err)=>{
    *   //catch some errors
    * });
    *
    * */
    getUpdates(contents = { timeout: 0 }) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "getUpdates?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                queryString.push(key + "=" + encodeURI(content.toString()));
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
    * Use this method to specify a url and receive incoming updates via an outgoing webhook
    * @param contents Object to specify the webhook parameters. Object of type {@link SetWebhookParams}
    * @return Promise of True on success.
    *
    * @example
    * const myBotToken = 'YOUR-BOT-TOKEN';
    * const webhookURL = 'https://example.com:8080/some-path';
    *
    * const Prosperly = require('prosperly');
    * const bot = new Prosperly({botToken: myBotToken});
    *
    * bot.setWebhook({
    *   url: webhookURL,
    *   //everything from here is optional
    *   certificate: certificateFile,
    *   ip_address: ip,
    *   max_connections: maxConnectionToAllow,
    *   //Specify the updates you want to receive, if you dont want to receive all updates
    *   allowed_updates: ["message", "edited_channel_post", "callback_query"],
    *   drop_pending_updates: "false"
    * }, true).then((data)=>{
    *   //set webhook successful, do something
    * }).catch((err)=>{
    *   //catch some errors
    * });
    *
    * */
    setWebhook(contents, serverless = false) {
        return __awaiter(this, void 0, void 0, function* () {
            //setup webhook
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_setWebhook2).call(this, contents).then((data) => {
                //webhook successful 
                if (!serverless) {
                    //not serverless so setup server
                    __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_serverSetup).call(this, contents);
                }
                return data;
            }).catch((error) => {
                //error occured
                this.emit('error', error);
            });
        });
    }
    /**
     * Use this method to remove webhook integration if you decide to switch back to getUpdates
     * @param contents Object of {drop_pending_updates?: boolean}
     * @return Promise of True on success.
     * */
    deleteWebhook(contents = { drop_pending_updates: false }) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "deleteWebhook?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                queryString.push(key + "=" + encodeURIComponent(content.toString()));
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to get current webhook status
     * @return Promise of WebhookInfo object
     * */
    getWebhookInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "getWebhookInfo";
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * A simple method for testing your bot's authentication token. Requires no parameters.
     * @return Returns Promise of basic information about the bot in form of a User object.
     * */
    getMe() {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "getMe";
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to log out from the cloud Bot API server before launching the bot locally. You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes
     * @return Returns Promise of true on success. Requires no parameters.
     * */
    logOut() {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "logOut";
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Requires no parameters. close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart
     * @return Returns Promise of true on success. Requires no parameters.
     * */
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "close";
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to send text messages.
     * @param contents Object of type SendMessageParams
     * @return On success Promise of the sent Message is returned.
     * */
    sendMessage(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "sendMessage?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                if (key == 'entities' || key == 'reply_markup') {
                    queryString.push(key + "=" + encodeURIComponent(JSON.stringify(content)));
                }
                else {
                    queryString.push(key + "=" + encodeURIComponent(content.toString()));
                }
            }
            // join queries together
            url += queryString.join('&');
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to forward messages of any kind. Service messages can't be forwarded.
     * @param contents Object of type ForwardMessageParams
     * @return On success Promise of the sent Message is returned.
     * */
    forwardMessage(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "forwardMessage?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                queryString.push(key + "=" + encodeURIComponent(content.toString()));
            }
            // join queries together
            url += queryString.join('&');
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to copy messages of any kind. Service messages and invoice messages can't be copied
     * @param contents Object of type CopyMessageParams
     * @return Returns Promise of the MessageId of the sent message on success.
     */
    copyMessage(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "copyMessage?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                if (key == 'caption_entities' || key == 'reply_markup') {
                    queryString.push(key + "=" + encodeURIComponent(JSON.stringify(content)));
                }
                else {
                    queryString.push(key + "=" + encodeURIComponent(content.toString()));
                }
            }
            // join queries together
            url += queryString.join('&');
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to send photos.
     * @param contents Object of the type SendPhotoParams
     * @return On success, the Promise of the sent Message is returned.
     */
    sendPhoto(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "sendPhoto";
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitPOSTRequest).call(this, url, contents);
        });
    }
    /**
     * Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format
     * @param contents Object of the type SendAudioParams
     * @return On success, the Promise of the sent Message is returned.
     */
    sendAudio(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "sendAudio";
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitPOSTRequest).call(this, url, contents);
        });
    }
    /**
     * Use this method to send general files
     * @param contents Object of the type SendDocumentParams
     * @return On success, the Promise of the sent Message is returned.
     */
    sendDocument(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "sendDocument";
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitPOSTRequest).call(this, url, contents);
        });
    }
    /**
     * Use this method to send video files, Telegram clients support mp4 videos (other formats may be sent as Document)
     * @param contents Object of the type SendVideoParam
     * @return On success, the Promise of the sent Message is returned.
     */
    sendVideo(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "sendVideo";
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitPOSTRequest).call(this, url, contents);
        });
    }
    /**
     * Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound)
     * @param contents Object of the type SendAnimationParams
     * @return On success, the Promise of the sent Message is returned.
     */
    sendAnimation(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "sendAnimation";
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitPOSTRequest).call(this, url, contents);
        });
    }
    /**
     * Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS (other formats may be sent as Audio or Document)
     * @param contents Object of the type SendAnimationParams
     * @return On success, the Promise of the sent Message is returned.
     */
    sendVoice(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "sendVoice";
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitPOSTRequest).call(this, url, contents);
        });
    }
    /**
     * As of v.4.0, Telegram clients support rounded square mp4 videos of up to 1 minute long. Use this method to send video messages.
     * @param contents Object of the type SendVideoNoteParams
     * @return On success, the Promise of the sent Message is returned.
     */
    sendVideoNote(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "sendVideoNote";
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitPOSTRequest).call(this, url, contents);
        });
    }
    /**
     * Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type.
     * @param contents Object of the type SendMediaGroupParams
     * @return On success, the Promise of an array of sent Messages is returned.
     */
    sendMediaGroup(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            //****** TODO: sending local file ****/
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "sendMediaGroup";
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitPOSTRequest).call(this, url, contents);
        });
    }
    /**
     * Use this method to send point on the map.
     * @param contents Object of the type SendLocationParams
     * @return On success, the Promise of the sent Message is returned.
     */
    sendLocation(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "sendLocation?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                if (key === 'reply_markup') {
                    queryString.push(key + '=' + encodeURIComponent(JSON.stringify(content)));
                }
                else {
                    queryString.push(key + '=' + encodeURIComponent(content.toString()));
                }
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation.
     * @param contents Object of the type EditMessageLiveLocationParams
     * @return On success, if the edited message is not an inline message, the Promise the edited Message is returned, otherwise Promise of True is returned.
     */
    editMessageLiveLocation(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "editMessageLiveLocation?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                if (key === 'reply_markup') {
                    queryString.push(key + '=' + encodeURIComponent(JSON.stringify(content)));
                }
                else {
                    queryString.push(key + '=' + encodeURIComponent(content.toString()));
                }
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to stop updating a live location message before live_period expires.
     * @param contents Object of the type StopMessageLiveLocationParams
     * @return On success, if the edited message is not an inline message, the Promise the edited Message is returned, otherwise Promise of True is returned.
     */
    stopMessageLiveLocation(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "stopMessageLiveLocation?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                if (key === 'reply_markup') {
                    queryString.push(key + '=' + encodeURIComponent(JSON.stringify(content)));
                }
                else {
                    queryString.push(key + '=' + encodeURIComponent(content.toString()));
                }
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to send information about a venue.
     * @param contents Object of the type SendVenueParams
     * @return On success, the Promise of the sent Message is returned.
     */
    sendVenue(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "sendVenue?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                if (key === 'reply_markup') {
                    queryString.push(key + '=' + encodeURIComponent(JSON.stringify(content)));
                }
                else {
                    queryString.push(key + '=' + encodeURIComponent(content.toString()));
                }
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to send phone contacts.
     * @param contents Object of the type SendContactParams
     * @return On success, the Promise of the sent Message is returned.
     */
    sendContact(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "sendContact?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                if (key === 'reply_markup') {
                    queryString.push(key + '=' + encodeURIComponent(JSON.stringify(content)));
                }
                else {
                    queryString.push(key + '=' + encodeURIComponent(content.toString()));
                }
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to send a native poll.
     * @param contents Object of the type SendPollParams
     * @return On success, the Promise of the sent Message is returned.
     */
    sendPoll(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "sendPoll?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                if (key === 'reply_markup' || key === 'explanation_entities' || key === 'options') {
                    queryString.push(key + '=' + encodeURIComponent(JSON.stringify(content)));
                }
                else {
                    queryString.push(key + '=' + encodeURIComponent(content.toString()));
                }
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to send an animated emoji that will display a random value.
     * @param contents Object of the type SendDiceParams
     * @return On success, the Promise of the sent Message is returned.
     */
    sendDice(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "sendDice?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                if (key === 'reply_markup') {
                    queryString.push(key + '=' + encodeURIComponent(JSON.stringify(content)));
                }
                else {
                    queryString.push(key + '=' + encodeURIComponent(content.toString()));
                }
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status).
     * @param contents Object of the type SendChatActionParams
     * @return Returns Promise of True on success.
     */
    sendChatAction(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "sendChatAction?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                queryString.push(key + '=' + encodeURIComponent(content.toString()));
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to get a list of profile pictures for a user.
     * @param contents Object of the type GetUserProfilePhotosParams
     * @return Returns Promise of a UserProfilePhotos object.
     */
    getUserProfilePhotos(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "getUserProfilePhotos?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                queryString.push(key + '=' + encodeURIComponent(content.toString()));
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to get basic info about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size
     * @param contents Object {file_id: string}
     * @return On success, a Promise of File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot+token/file_path, where file_path is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.
     */
    getFile(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "getFile?";
            url += "file_id=" + contents['file_id'];
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
     * @param contents Object of the type BanChatMemberParams
     * @return Returns Promise of True on success.
     */
    banChatMember(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "banChatMember?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                queryString.push(key + '=' + encodeURIComponent(content.toString()));
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the parameter only_if_banned.
     * @param contents Object of the type UnbanChatMemberParams
     * @return Returns Promise of True on success.
     */
    unbanChatMember(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "unbanChatMember?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                queryString.push(key + '=' + encodeURIComponent(content.toString()));
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate admin rights. Pass True for all permissions to lift restrictions from a user.
     * @param contents Object of the type RestrictChatMemberParams
     * @return Returns Promise of True on success.
     */
    restrictChatMember(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "restrictChatMember?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                if (key === 'permissions') {
                    queryString.push(key + '=' + encodeURIComponent(JSON.stringify(content)));
                }
                else {
                    queryString.push(key + '=' + encodeURIComponent(content.toString()));
                }
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Pass False for all boolean parameters to demote a user.
     * @param contents Object of the type PromoteChatMemberParams
     * @return Returns Promise of True on success.
     */
    promoteChatMember(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "promoteChatMember?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                queryString.push(key + '=' + encodeURIComponent(content.toString()));
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to set a custom title for an administrator in a supergroup promoted by the bot.
     * @param contents Object of the type SetChatAdministratorCustomTitleParams
     * @return Returns Promise of True on success.
     */
    setChatAdministratorCustomTitle(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "setChatAdministratorCustomTitle?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                queryString.push(key + '=' + encodeURIComponent(content.toString()));
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won't be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights.
     * @param contents Object of {chat_id; sender_chat_id}
     * @returns Returns Promise of True on success.
     *
     * chat_id: string|number Unique identifier for the target chat or username of the target channel
     *
     * sender_chat_id: number Unique identifier of the target sender chat
     */
    banChatSenderChat(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "banChatSenderChat?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                queryString.push(key + '=' + encodeURIComponent(content.toString()));
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights.
     * @param contents Object of {chat_id; sender_chat_id}
     * @returns Returns Promise of True on success.
     *
     * chat_id: string|number Unique identifier for the target chat or username of the target channel
     *
     * sender_chat_id: number Unique identifier of the target sender chat
     */
    unbanChatSenderChat(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "unbanChatSenderChat?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                queryString.push(key + '=' + encodeURIComponent(content.toString()));
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members admin rights.
     * @param contents Object of the type SetChatPermissionsParams
     * @return Returns Promise of True on success.
     */
    setChatPermissions(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "setChatPermissions?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                if (key === 'permissions') {
                    queryString.push(key + '=' + encodeURIComponent(JSON.stringify(content)));
                }
                else {
                    queryString.push(key + '=' + encodeURIComponent(content.toString()));
                }
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
     * @param chatID Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @return Returns Promise of the new invite link as String on success.
     */
    exportChatInviteLink(chatID) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "exportChatInviteLink?chat_id=" + encodeURIComponent(chatID);
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. The link can be revoked using the method revokeChatInviteLink.
     * @param contents Object of the type CreateChatInviteLinkParams
     * @return Returns the new invite link as a Promise of ChatInviteLink object.
     */
    createChatInviteLink(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "createChatInviteLink?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                queryString.push(key + '=' + encodeURIComponent(content.toString()));
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
     * @param contents Object of the type EditChatInviteLinkParams
     * @return Returns the edited invite link as a Promise of ChatInviteLink object.
     */
    editChatInviteLink(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "editChatInviteLink?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                queryString.push(key + '=' + encodeURIComponent(content.toString()));
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
     * @param contents Object of the type RevokeChatInviteLinkParams
     * @returns Returns the revoked invite link as a Promise of ChatInviteLink object.
     */
    revokeChatInviteLink(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "revokeChatInviteLink?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                queryString.push(key + '=' + encodeURIComponent(content.toString()));
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to approve a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right.
     * @param contents Object of {chat_id: string|number; user_id: string|number}. chat_id: Unique identifier for the target chat or username of the target channel (in the format \@channelusername). user_id: Unique identifier of the target user
     * @return Returns Promise of True on success
     */
    approveChatJoinRequest(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "approveChatJoinRequest?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                queryString.push(key + '=' + encodeURIComponent(content.toString()));
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right.
     * @param contents Object of {chat_id: string|number; user_id: string|number}. chat_id: Unique identifier for the target chat or username of the target channel (in the format \@channelusername). user_id: Unique identifier of the target user
     * @returns Returns Promise of True on success
     */
    declineChatJoinRequest(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "declineChatJoinRequest?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                queryString.push(key + '=' + encodeURIComponent(content.toString()));
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
     * @param contents \{chat_id: string | number; photo: string}. chat_id - Unique identifier for the target chat or username of the target channel (in the format \@channelusername). photo - New chat photo, MUST be uploaded using multipart/form-data
     * @return  Returns Promise of True on success.
     */
    setChatPhoto(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "setChatPhoto";
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitPOSTRequest).call(this, url, contents);
        });
    }
    /**
     * Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
     * @param chatID Unique identifier for the target chat or username of the target channel (in the format \@channelusername)
     * @return Returns Promise of True on success.
     */
    deleteChatPhoto(chatID) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "deleteChatPhoto?chat_id=" + encodeURIComponent(chatID);
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
     * @param contents \{chat_id: number | string; title: string}. chat_id - Unique identifier for the target chat or username of the target channel (in the format \@channelusername). title - New chat title, 1-255 characters
     * @return Returns Promise of True on success.
     */
    setChatTitle(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "setChatTitle?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                queryString.push(key + '=' + encodeURIComponent(content.toString()));
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
     * @param contents \{chat_id: number | string; description: string}. chat_id - Unique identifier for the target chat or username of the target channel (in the format \@channelusername). description - New chat description, 0-255 characters
     * @return Returns Promise of True on success.
     */
    setChatDescription(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "setChatDescription?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                queryString.push(key + '=' + encodeURIComponent(content.toString()));
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in a supergroup or 'can_edit_messages' admin right in a channel.
     * @param contents Object of the type PinChatMessageParams
     * @return Returns Promise of True on success.
     */
    pinChatMessage(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "pinChatMessage?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                queryString.push(key + '=' + encodeURIComponent(content.toString()));
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in a supergroup or 'can_edit_messages' admin right in a channel.
     * @param contents \{chat_id: number | string; message_id: number} chat_id - Unique identifier for the target chat or username of the target channel (in the format \@channelusername). message_id - Identifier of a message to unpin. If not specified, the most recent pinned message (by sending date) will be unpinned.
     * @return Returns Promise of True on success.
     */
    unpinChatMessage(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "unpinChatMessage?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                queryString.push(key + '=' + encodeURIComponent(content.toString()));
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in a supergroup or 'can_edit_messages' admin right in a channel.
     * @param chatID chatID Unique identifier for the target chat or username of the target channel (in the format \@channelusername)
     * @return Returns Promise of True on success.
     */
    unpinAllChatMessages(chatID) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "unpinAllChatMessages?chat_id=" + encodeURIComponent(chatID);
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method for your bot to leave a group, supergroup or channel.
     * @param chatID chatID Unique identifier for the target chat or username of the target channel (in the format \@channelusername)
     * @return Returns Promise of True on success.
     */
    leaveChat(chatID) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "leaveChat?chat_id=" + encodeURIComponent(chatID);
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.).
     * @param chatID chatID Unique identifier for the target chat or username of the target channel (in the format \@channelusername)
     * @return Returns the Promise of a Chat object on success.
     */
    getChat(chatID) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "getChat?chat_id=" + encodeURIComponent(chatID);
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to get a list of administrators in a chat.
     * @param chatID chatID Unique identifier for the target chat or username of the target channel (in the format \@channelusername)
     * @return On success, returns Promise of an Array of ChatMember objects that contains information about all chat administrators except other bots. If the chat is a group or a supergroup and no administrators were appointed, only the creator will be returned.
     */
    getChatAdministrators(chatID) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "getChatAdministrators?chat_id=" + encodeURIComponent(chatID);
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to get the number of members in a chat.
     * @param chatID chatID Unique identifier for the target chat or username of the target channel (in the format \@channelusername)
     * @return Returns Promise of integer on success.
     */
    getChatMemberCount(chatID) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "getChatMemberCount?chat_id=" + encodeURIComponent(chatID);
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to get information about a member of a chat.
     * @param contents \{chat_id: number | string; user_id: number} chat_id - Unique identifier for the target chat or username of the target channel (in the format \@channelusername). user_id - Unique identifier of the target user
     * @return Returns a ChatMember object on success.
     */
    getChatMember(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "getChatMember?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                queryString.push(key + '=' + encodeURIComponent(content.toString()));
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method.
     * @param contents contents \{chat_id: number | string; sticker_set_name: string} chat_id - Unique identifier for the target chat or username of the target channel (in the format \@channelusername). sticker_set_name - Name of the sticker set to be set as the group sticker set
     * @returns Returns Promise of True on success.
     */
    setChatStickerSet(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "setChatStickerSet?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                queryString.push(key + '=' + encodeURIComponent(content.toString()));
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method.
     * @param chatID chatID Unique identifier for the target chat or username of the target channel (in the format \@channelusername)
     * @return Returns Promise of True on success.
     */
    deleteChatStickerSet(chatID) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "deleteChatStickerSet?chat_id=" + encodeURIComponent(chatID);
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert.
     * @param contents Object of the type AnswerCallbackQueryParams
     * @return Returns Promise of True on success.
     */
    answerCallbackQuery(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "answerCallbackQuery?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                queryString.push(key + '=' + encodeURIComponent(content.toString()));
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to change the list of the bot's commands. See https://core.telegram.org/bots#commands for more details about bot commands.
     * @param contents Object of the type SetMyCommandsParams
     * @return Returns Promise of True on success.
     */
    setMyCommands(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "setMyCommands?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                if (key === 'commands' || key === 'scope') {
                    queryString.push(key + '=' + encodeURIComponent(JSON.stringify(content)));
                }
                else {
                    queryString.push(key + '=' + encodeURIComponent(content.toString()));
                }
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to delete the list of the bot's commands for the given scope and user language. After deletion, higher level commands will be shown to affected users.
     * @param contents \{scope?: BotCommandScopeDefault | BotCommandScopeAllPrivateChats | BotCommandScopeAllGroupChats | BotCommandScopeAllChatAdministrators | BotCommandScopeChat | BotCommandScopeChatAdministrators | BotCommandScopeChatMember; language_code?: string}
     * @return Returns Promise of True on success.
     */
    deleteMyCommands(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "deleteMyCommands?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                if (key === 'scope') {
                    queryString.push(key + '=' + encodeURIComponent(JSON.stringify(content)));
                }
                else {
                    queryString.push(key + '=' + encodeURIComponent(content.toString()));
                }
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to get the current list of the bot's commands for the given scope and user language.
     * @param contents \{scope?: BotCommandScopeDefault | BotCommandScopeAllPrivateChats | BotCommandScopeAllGroupChats | BotCommandScopeAllChatAdministrators | BotCommandScopeChat | BotCommandScopeChatAdministrators | BotCommandScopeChatMember; language_code?: string}
     * @return ReturnsPromise of Array of BotCommand on success. If commands aren't set, an empty list is returned.
     */
    getMyCommands(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "getMyCommands?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                if (key === 'scope') {
                    queryString.push(key + '=' + encodeURIComponent(JSON.stringify(content)));
                }
                else {
                    queryString.push(key + '=' + encodeURIComponent(content.toString()));
                }
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /* ++++++++++++++++++++++++++++++ */
    /// Updating messages
    /* ++++++++++++++++++++++++++++++ */
    /**
     * Use this method to edit text and game messages.
     * @param contents Object of type EditMessageTextParams
     * @return On success, if the edited message is not an inline message, the Promise of the edited Message is returned, otherwise True is returned.
     */
    editMessageText(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "editMessageText?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                if (key === 'entities' || key === 'reply_markup') {
                    queryString.push(key + '=' + encodeURIComponent(JSON.stringify(content)));
                }
                else {
                    queryString.push(key + '=' + encodeURIComponent(content.toString()));
                }
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to edit captions of messages.
     * @param contents Object of type EditMessageCaptionParams
     * @return On success, if the edited message is not an inline message, the Promise of the edited Message is returned, otherwise True is returned.
     */
    editMessageCaption(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "editMessageCaption?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                if (key === 'caption_entities' || key === 'reply_markup') {
                    queryString.push(key + '=' + encodeURIComponent(JSON.stringify(content)));
                }
                else {
                    queryString.push(key + '=' + encodeURIComponent(content.toString()));
                }
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to edit animation, audio, document, photo, or video messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded; use a previously uploaded file via its file_id or specify a URL.
     * @param contents Object of type EditMessageMediaParams
     * @return On success, if the edited message is not an inline message, the Promise of the edited Message is returned, otherwise True is returned.
     */
    editMessageMedia(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "editMessageMedia";
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitPOSTRequest).call(this, url, contents);
        });
    }
    /**
     * Use this method to edit only the reply markup of messages.
     * @param contents Object of type EditMessageReplyMarkupParams
     * @return On success, if the edited message is not an inline message, the Promise of the edited Message is returned, otherwise True is returned.
     */
    editMessageReplyMarkup(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "editMessageReplyMarkup?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                if (key === 'reply_markup') {
                    queryString.push(key + '=' + encodeURIComponent(JSON.stringify(content)));
                }
                else {
                    queryString.push(key + '=' + encodeURIComponent(content.toString()));
                }
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to stop a poll which was sent by the bot.
     * @param contents Object of type StopPollParams
     * @return On success, the Promise of the stopped Poll is returned.
     */
    stopPoll(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "stopPoll?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                if (key === 'reply_markup') {
                    queryString.push(key + '=' + encodeURIComponent(JSON.stringify(content)));
                }
                else {
                    queryString.push(key + '=' + encodeURIComponent(content.toString()));
                }
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Use this method to delete a message, including service messages, with the following limitations:
        - A message can only be deleted if it was sent less than 48 hours ago.
        - A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.
        - Bots can delete outgoing messages in private chats, groups, and supergroups.
        - Bots can delete incoming messages in private chats.
        - Bots granted can_post_messages permissions can delete outgoing messages in channels.
        - If the bot is an administrator of a group, it can delete any message there.
        - If the bot has can_delete_messages permission in a supergroup or a channel, it can delete any message there.

     * @param contents \{chat_id: number | string; message_id: number}
     * @return Returns Promise of True on success.
     */
    deleteMessage(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "deleteMessage?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                queryString.push(key + '=' + encodeURIComponent(content.toString()));
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /* ++++++++++++++++++++++++++++++ */
    /// Inline mode
    /* ++++++++++++++++++++++++++++++ */
    /**
     * Use this method to send answers to an inline query. No more than 50 results per query are allowed.
     * @param contents Object of type AnswerInlineQueryParams
     * @return On success, Promise of True is returned.
     */
    answerInlineQuery(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "answerInlineQuery?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                if (key === 'results') {
                    queryString.push(key + '=' + encodeURIComponent(JSON.stringify(content)));
                }
                else {
                    queryString.push(key + '=' + encodeURIComponent(content.toString()));
                }
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /* ++++++++++++++++++++++++++++++ */
    /// Payments
    /* ++++++++++++++++++++++++++++++ */
    /**
     * Use this method to send invoices.
     * @param contents Object of type SendInvoiceParams
     * @returns On success, promise of the sent Message is returned
     */
    sendInvoice(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "sendInvoice?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                if (key === 'prices' || key === 'suggested_tip_amounts' || key === 'provider_data' || key === 'reply_markup') {
                    queryString.push(key + '=' + encodeURIComponent(JSON.stringify(content)));
                }
                else {
                    queryString.push(key + '=' + encodeURIComponent(content.toString()));
                }
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries.
     * @param contents Object of type AnswerShippingQueryParams
     * @returns On success, promise of True is returned.
     */
    answerShippingQuery(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "answerShippingQuery?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                if (key === 'shipping_options') {
                    queryString.push(key + '=' + encodeURIComponent(JSON.stringify(content)));
                }
                else {
                    queryString.push(key + '=' + encodeURIComponent(content.toString()));
                }
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
    /**
     * Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query. Use this method to respond to such pre-checkout queries.
     * Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
     * @param contents Object of type AnswerPreCheckoutQueryParams
     * @returns On success, promise of True is returned.
     */
    answerPreCheckoutQuery(contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "answerPreCheckoutQuery?";
            let queryString = [];
            for (let [key, content] of Object.entries(contents)) {
                queryString.push(key + '=' + encodeURIComponent(content.toString()));
            }
            // join queries together
            url += queryString.join("&");
            return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitGETRequest).call(this, url);
        });
    }
}
exports.default = Prosperly;
_Prosperly_API_URL = new WeakMap(), _Prosperly_instances = new WeakSet(), _Prosperly_setWebhook2 = function _Prosperly_setWebhook2(contents) {
    return __awaiter(this, void 0, void 0, function* () {
        let url = __classPrivateFieldGet(this, _Prosperly_API_URL, "f") + "setWebhook";
        return __classPrivateFieldGet(this, _Prosperly_instances, "m", _Prosperly_submitPOSTRequest).call(this, url, contents);
    });
}, _Prosperly_submitGETRequest = function _Prosperly_submitGETRequest(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const telegramURL = new url_1.URL(url);
        const urlHostname = telegramURL.hostname;
        const urlPathname = telegramURL.pathname;
        const urlSearch = telegramURL.search;
        //build up the https options
        const options = {
            hostname: urlHostname,
            path: urlPathname + urlSearch,
            method: 'GET'
        };
        //create a promise for the callback function 
        const promise = new Promise((resolve, reject) => {
            //request for the telegram data
            const req = https_1.default.request(options, (res) => {
                let chunks = [];
                //store received data in chunks
                res.on('data', chunk => {
                    chunks.push(chunk);
                });
                //data completely received, convert chunks to buffer
                res.on('end', () => {
                    let data = Buffer.concat(chunks).toString();
                    //resolve the promise
                    resolve(data);
                });
            });
            //error occurs, reject the promise
            req.on('error', error => {
                reject(error);
            });
            req.end(); // end request
        });
        return promise;
    });
}, _Prosperly_submitPOSTRequest = function _Prosperly_submitPOSTRequest(url, contents) {
    return __awaiter(this, void 0, void 0, function* () {
        const telegramURL = new url_1.URL(url);
        const urlHostname = telegramURL.hostname;
        const urlPathname = telegramURL.pathname;
        const urlSearch = telegramURL.search;
        //form data
        const FormData = require('form-data');
        let form = new FormData();
        //To read files
        const fs = require('fs');
        //append all data to form
        for (let [key, content] of Object.entries(contents)) {
            //check type
            if (key === 'photo' || key === 'audio' || key === 'document' || key === 'video' || key === 'animation' || key === 'voice' || key === 'video_note' || key === 'thumb' || key === 'certificate' /*for setWebhook*/) {
                //Check if I can read file from local computer
                if (fs.existsSync(content)) {
                    form.append(key, fs.createReadStream(content)); //send file content to telegram
                    continue;
                }
            }
            //check for media type
            if (key === 'media') {
                const path = require('path');
                let elements = [];
                let subContent = content;
                subContent.forEach(element => {
                    //Get the file path
                    let filePath = element.media;
                    let filename = path.basename(filePath);
                    //Check if I can read file from local computer, append the stream and "attach://" the file file
                    if (fs.existsSync(element.media)) {
                        form.append(filename, fs.createReadStream(element.media));
                        element.media = "attach://" + filename;
                        elements.push(element);
                    }
                    //file not present in local computer, just send uri to telegram
                    else {
                        elements.push(element);
                    }
                });
                form.append(key, JSON.stringify(elements));
            }
            else if (key === 'caption_entities' || key === 'reply_markup' || key === 'allowed_updates') {
                form.append(key, JSON.stringify(content));
            }
            else {
                form.append(key, content);
            }
        }
        //build up the https options
        const options = {
            hostname: urlHostname,
            path: urlPathname + urlSearch,
            method: 'POST',
            headers: form.getHeaders()
        };
        //create a promise for the callback function 
        const promise = new Promise((resolve, reject) => {
            //request for the telegram data
            const req = https_1.default.request(options, (res) => {
                let chunks = [];
                //store received data in chunks
                res.on('data', chunk => {
                    chunks.push(chunk);
                });
                //data completely received, convert chunks to buffer
                res.on('end', () => {
                    let data = Buffer.concat(chunks).toString();
                    resolve(data);
                });
            });
            //write form data to request
            form.pipe(req);
            req.on('error', error => {
                reject(error);
            });
            //req.end(); //end request //closing request not necessary??? end() resulting in "Write After End" error
        });
        return promise;
    });
}, _Prosperly_serverSetup = function _Prosperly_serverSetup(webhookParams) {
    return __awaiter(this, void 0, void 0, function* () {
        const myURL = new url_1.URL(webhookParams.url);
        const port = myURL.port ? myURL.port : 80;
        const pathname = myURL.pathname;
        //create and start server
        const server = http_1.default.createServer();
        server.listen(port);
        //server request
        server.on('request', (req, res) => {
            let chunks = [];
            //receiving data
            req.on('data', (chunk) => {
                chunks.push(chunk);
            });
            //end of data
            req.on('end', () => {
                let rawData = Buffer.concat(chunks);
                //confirm data is targetted at the set webhook address
                if (req.url == pathname && req.method == 'POST') {
                    //JSON the data
                    let data = JSON.parse(rawData.toString());
                    /*** message ***/
                    if (typeof (data['message']) !== 'undefined') {
                        this.emit('message', data);
                    }
                    /*** edited message ***/
                    else if (typeof (data['edited_message']) !== 'undefined') {
                        this.emit('editedMessage', data);
                    }
                    /*** channel post ***/
                    else if (typeof (data['channel_post']) !== 'undefined') {
                        this.emit('channelPost', data);
                    }
                    /*** edited channel post ***/
                    else if (typeof (data['edited_channel_post']) !== 'undefined') {
                        this.emit('editedChannelPost', data);
                    }
                    /*** Inline Query ***/
                    else if (typeof (data['inline_query']) !== 'undefined') {
                        this.emit('inlineQuery', data);
                    }
                    /*** chosen inline result ***/
                    else if (typeof (data['chosen_inline_result']) !== 'undefined') {
                        this.emit('chosenInlineResult', data);
                    }
                    /*** Callback Query ***/
                    else if (typeof (data['callback_query']) !== 'undefined') {
                        this.emit('callbackQuery', data);
                    }
                    /*** shipping query ***/
                    else if (typeof (data['shipping_query']) !== 'undefined') {
                        this.emit('shippingQuery', data);
                    }
                    /*** pre_checkout_query ***/
                    else if (typeof (data['pre_checkout_query']) !== 'undefined') {
                        this.emit('preCheckoutQuery', data);
                    }
                    /*** poll ***/
                    else if (typeof (data['poll']) !== 'undefined') {
                        this.emit('poll', data);
                    }
                    /*** poll answer ***/
                    else if (typeof (data['poll_answer']) !== 'undefined') {
                        this.emit('pollAnswer', data);
                    }
                    /*** my chat member ***/
                    else if (typeof (data['my_chat_member']) !== 'undefined') {
                        this.emit('myChatMember', data);
                    }
                    /*** chat member ***/
                    else if (typeof (data['chat_member']) !== 'undefined') {
                        this.emit('chatMember', data);
                    }
                    /*** chat join request ***/
                    else if (typeof (data['chat_join_request']) !== 'undefined') {
                        this.emit('chatJoinRequest', data);
                    }
                    /*** error ***/
                    else {
                        this.emit('error', data);
                    }
                }
                //close the request gracefully; response
                res.end();
            });
        });
        //handle server error
        server.on('error', (error) => {
            this.emit('error', error);
        });
    });
};
;
module.exports = Prosperly;

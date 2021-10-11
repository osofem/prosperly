export type GetUserProfilePhotosParams = {
    user_id: number //Unique identifier of the target user
    offset?: number //Sequential number of the first photo to be returned. By default, all photos are returned.
    limit?: number //Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100.
}
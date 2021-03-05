export interface UserInfo {
  imgURL: string;
  userName: string;
  userEmail: string;
}

export interface UserInfoState {
  userInfo?: UserInfo;
  error: boolean;
}
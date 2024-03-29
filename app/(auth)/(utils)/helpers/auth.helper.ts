import { UserResponse } from '@/app/(auth)/(utils)/types/user.type';

export const saveUserInfo = (userResponse: UserResponse) => {
  localStorage.setItem('user', JSON.stringify(userResponse));
};

export const isLoggedIn = () => {
  const user: string | null = localStorage.getItem('user');
  return !!user;
};

export const logout = (): void => {
  localStorage.removeItem('user');
};

export const getUsername = (): string => {
  const localUser: string = localStorage.getItem('user') || '';
  const userResponse: UserResponse = JSON.parse(localUser);
  return userResponse.user.name || '';
};

export const getAccessToken = (): string => {
  const localUser: string = localStorage.getItem('user') || '';
  const userResponse: UserResponse = localUser ? JSON.parse(localUser) : {};
  return userResponse.access_token || '';
};

export const requestHeaders: any = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${getAccessToken()}`
};

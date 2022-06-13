import { Ref, InjectionKey } from 'vue'
import { GenderEnum } from '@/enum/gender'
import { getSingleUserRes } from '@/types/reqRes/user'

export interface UserProfile {
  name: string,
  avatar: string,
  gender: GenderEnum
}

// 使用者資訊相關
export const injectKeyForUserProfile: InjectionKey<Ref<UserProfile>> = Symbol('userProfile')
export const injectKeyForReFetchUserProfileFunc: InjectionKey<() => Promise<void>> = Symbol('updateUserProfile')

// 使用者追蹤清單相關
export const injectKeyForUserFollowing: InjectionKey<Ref<getSingleUserRes[]>> = Symbol('userFollowing')
export const injectKeyForReFetchUserFollowingFunc: InjectionKey<() => Promise<void>> = Symbol('updateUserFollowing')

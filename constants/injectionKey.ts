import { Ref, InjectionKey } from 'vue'
import { GenderEnum } from '@/enum/gender'

export interface UserProfile {
  name: string,
  avatar: string,
  gender: GenderEnum
}

export const injectKeyForUserProfile: InjectionKey<Ref<UserProfile>> = Symbol('userProfile')
export const injectKeyForReFetchUserProfileFunc: InjectionKey<() => Promise<void>> = Symbol('updateUserProfile')

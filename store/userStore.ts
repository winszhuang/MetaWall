import { defineStore } from 'pinia'
import { GenderEnum } from '@/enum/gender'
import { updateUserProfileReq } from '@/types/reqRes/user'
import { getUserProfile } from '@/services/userService'
import { getFollowing } from '@/services/followService'
import { getOneFollowingUserRes } from '@/types/reqRes/follow'
import { defaultUserProfile } from '@/constants/default'
import { ResponseStatusEnum } from '@/enum/responseStatusEnum'

export const useUserStore = defineStore('user', () => {
  const state = shallowReactive({
    profile: defaultUserProfile,
    followingList: [] as getOneFollowingUserRes[]
  })

  const fetchUserProfile = async () => {
    const result = await getUserProfile()
    if (result.status === ResponseStatusEnum.Success) {
      const data = result.data
      state.profile = {
        avatar: data.avatar,
        gender: data.gender,
        name: data.name
      }
    }
  }

  const fetchUserFollowingList = async () => {
    const result = await getFollowing()
    if (result.status === ResponseStatusEnum.Success) {
      state.followingList = result.data
      return state.followingList
    }
  }

  return {
    ...toRefs(readonly(state)),
    fetchUserProfile,
    fetchUserFollowingList
  }
})

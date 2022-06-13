import { GenderEnum } from '@/enum/gender'
import { getFollowing } from '@/services/followService'
import { getUserProfile } from '@/services/userService'
import { getSingleUserRes } from '@/types/reqRes/user'
import {
  injectKeyForUserProfile,
  injectKeyForReFetchUserProfileFunc,
  injectKeyForUserFollowing,
  injectKeyForReFetchUserFollowingFunc
} from '@/constants/injectionKey'

const useProfile = () => {
  const userProfile = ref({
    name: '',
    avatar: '',
    gender: GenderEnum.Male
  })

  const setUserProfile = async () => {
    const userData = (await getUserProfile()).data
    const { name, avatar, gender } = userData

    userProfile.value = { name, avatar, gender }
  }

  provide(injectKeyForUserProfile, readonly(userProfile))
  provide(injectKeyForReFetchUserProfileFunc, () => setUserProfile())

  return {
    userProfile,
    setUserProfile
  }
}

export const useFollowing = () => {
  const userFollowing = ref<getSingleUserRes[]>([])

  const setUserFollowing = async () => {
    const followingList = (await getFollowing()).data

    userFollowing.value = followingList
  }

  provide(injectKeyForUserFollowing, readonly(userFollowing))
  provide(injectKeyForReFetchUserFollowingFunc, () => setUserFollowing())

  return {
    userFollowing,
    setUserFollowing
  }
}

export const useStore = () => {
  const {
    userProfile,
    setUserProfile
  } = useProfile()

  const {
    userFollowing,
    setUserFollowing
  } = useFollowing()

  return {
    userProfile,
    setUserProfile,
    userFollowing,
    setUserFollowing
  }
}

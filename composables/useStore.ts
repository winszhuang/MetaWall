import { injectKeyForUserProfile, injectKeyForReFetchUserProfileFunc } from '@/constants/injectionKey'
import { GenderEnum } from '@/enum/gender'
import { getUserProfile } from '@/services/userService'

export const useStore = () => {
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

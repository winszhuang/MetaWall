/**
 * 校正後端回傳過來的圖片id/url，讓img標籤的src屬性可以直接讀取
 */
export const correctImageUrl = computed(() => (imageId: string) => {
  if (!imageId) return ''

  const baseApiUrl = useRuntimeConfig().public.apiBase
  return `${baseApiUrl}/images/${imageId}`
})

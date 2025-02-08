import { supabase } from '@/config/superbase'

const uploadFile = async (filePath: string): Promise<string> => {
  if (!filePath) return ''

  try {
    const response = await fetch(filePath)
    const blob = await response.blob()

    const fileName = `${Date.now()}-${filePath.split('/').pop()}`

    const { error } = await supabase.storage
      .from('zgradovi')
      .upload(`uploads/${fileName}`, blob)

    if (error) {
      console.error('Upload error:', error.message)
      return ''
    }

    const { data: signedUrlData, error: signedUrlError } =
      await supabase.storage
        .from('zgradovi')
        .createSignedUrl(`uploads/${fileName}`, 315360000)

    if (signedUrlError) {
      console.error('Signed URL error:', signedUrlError.message)
      return ''
    }

    return signedUrlData.signedUrl
  } catch (err) {
    console.error('File upload error:', err)
    return ''
  }
}

export { uploadFile }

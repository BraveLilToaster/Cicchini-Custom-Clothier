export const cloudinary_base_url =  'https://res.cloudinary.com/cicchini/image/upload'
export const cloudinary_key = 'v1530140264'

export const cloudinary_url = `${cloudinary_base_url}/${cloudinary_key}/`

export const transformations = {
  max_width_1280: 'c_scale,w_1280',
  max_width_720: 'c_scale,w_720',
}

export const getCloudinaryUrl = (transformations) => {
  return `${cloudinary_base_url}/${transformations ? `${transformations}/`: ''}${cloudinary_key}/`
}

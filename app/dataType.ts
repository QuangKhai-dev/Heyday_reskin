export interface Frames {
  width?: number
  height?: number
  title?: string
  subtitle?: string
  image?: string
}

export interface MotifContainerProps extends Frames {
  newsId: string
  buttonClassname?: string
}

export interface Contents {
  title: string
  subtitle: string
  image?: string
}

export interface SVG {
  page: string
  // width?: number
  // height?: number
  // color?: string
}

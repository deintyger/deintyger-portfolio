// Declarations for image file imports
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg' {
  const content: string
  export default content
}

// Specific declaration for the generated assets index
declare module "../assets/assets" {
  export const logo: string
  export const backend: string
  export const creator: string
  export const mobile: string
  export const web: string
  export const github: string
  export const menu: string
  export const close: string

  export const css: string
  export const docker: string
  export const figma: string
  export const git: string
  export const html: string
  export const javascript: string
  export const mongodb: string
  export const nodejs: string
  export const reactjs: string
  export const redux: string
  export const tailwind: string
  export const typescript: string
  export const threejs: string

  export const meta: string
  export const shopify: string
  export const starbucks: string
  export const tesla: string

  export const carrent: string
  export const jobit: string
  export const tripguide: string
}

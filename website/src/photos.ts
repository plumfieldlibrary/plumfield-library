const modules = import.meta.glob("./assets/gallery/photo-*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
  query: "?format=avif",
})

export const photos = Object.values(modules) as string[]

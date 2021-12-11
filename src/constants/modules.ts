export const modules = Object.entries(
  import.meta.glob<{ install: UserModule }>('../modules/*.ts', {
    eager: true,
  }),
).map(([path, { install }]) => ({ path, install }))

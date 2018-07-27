export default async ({ store, error }) => {
  await store.dispatch('initAuth')
}

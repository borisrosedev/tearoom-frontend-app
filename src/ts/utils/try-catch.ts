export default async function (cb: () => any) {
  try {
    return await cb();
  } catch (err) {
    console.log(err);
  }
}

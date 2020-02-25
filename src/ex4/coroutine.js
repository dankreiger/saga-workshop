export const coroutine = gen => {
  const generator = gen();
  const handle = result => {
    if (result.done) return Promise.resolve(result.value);
    return Promise.resolve(result.value).then(res =>
      handle(generator.next(res))
    );
  };
  return handle(generator.next());
};

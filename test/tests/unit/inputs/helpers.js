export async function textErrors(wrapper, expect) {
  // Test error as string and array
  const error = 'Here I set an error!';
  wrapper.setProps({ 'errors': error });

  await wrapper.vm.$nextTick();
  expect(wrapper.html()).toContain(error);

  const errors = [ 'Error 1', 'Error 2', 'Error 3' ];
  wrapper.setProps({ 'errors': errors });

  await wrapper.vm.$nextTick();
  expect(wrapper.html()).toContain(errors[0]);
}
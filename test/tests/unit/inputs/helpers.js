export async function testBasicAttrs(wrapper, expect, attrs, inputTag = 'input') {
  await wrapper.vm.$nextTick();

  let html = wrapper.html();
  let input = wrapper.find(inputTag);

  // Test attrs
  expect(input.attributes('id')).toContain(attrs.id);
  expect(html).toContain(attrs.desc);
  expect(input.element.value).toBe(attrs.value);

  if (inputTag === 'select')
    expect([ attrs.placeholder, attrs.label ]).toContain(input.attributes('aria-label'));
  else
    expect(input.attributes('placeholder')).toContain(attrs.placeholder);
  
  if (attrs.type)
    expect(input.attributes('type')).toBe(attrs.type);

  let label = wrapper.find('label');
  expect(label.text()).toBe(attrs.label);
  
  // Test v-model
  let testUpdateValue = 'Second value';

  input.element.value = testUpdateValue;
  input.trigger('input');
  input.trigger('change');

  await wrapper.vm.$nextTick();
  expect(wrapper.emitted().input).toBeTruthy();
  // Make sure the first parameter is always the input value.
  expect(wrapper.emitted().input[0][0]).toEqual(testUpdateValue);
}

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
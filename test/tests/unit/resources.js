export const links = [
  {
    type: 'native',
    href: 'https://example.com',
    text: 'Profile',
    attrs: {
      id: 'id1',
    },
  },
  {
    type: 'native',
    href: 'https://example.com',
    text: 'Settings',
    click: () => { console.log('Just clicked'); },
    attrs: {
      id: 'id2',
    },
  },
  {
    href: '',
    text: 'Logout',
    attrs: {
      id: 'id3',
    },
  },
];

export const inputCommonProps = {
  id: 'input-id-ABCD',
  errors: '',

  name: 'inputName',
  label: 'Input label',
  desc: 'Input description',
  placeholder: 'Input placeholder',
  value: 'First value',
  isLoading: false,
  innerLabel: true,
};
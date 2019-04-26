// Predefined fields for post CreatePost and EditPost

const category = {
  fieldType: 'SelectList',
  name: 'category',
  multi: false,
  label: 'Category',
  options: [],
};

const subject = {
  fieldType: 'TextInput',
  placeholder: 'Subject',
  label: 'Subject',
  name: 'subject',
  rows: '1',
  cols: '100',
};

const description = {
  fieldType: 'TextInput',
  placeholder: 'Description',
  label: 'Description',
  name: 'description',
  rows: '10',
  cols: '100',
};

const price = {
  fieldType: 'NumberInput',
  placeholder: 'Price',
  name: 'price',
  label: 'Price',
  minValue: 0,
};

const schema = [
  category,
  subject,
  description,
  price,
];

export default schema;

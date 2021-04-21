## Code Samples

### Accordion Contents

Each accordion dropdown is labeled with the title and an optional results field. When expanded, the accordion will show items in the results which can be a string, array, or object to match whatever components you pass into the slot.

 ```contents: [
    {
      title: 'How are you?',
      msg: 'Test for fun!',
      results: '1 Result',
    },
    {
      title: 'Who let the dog out?',
      msg: 'I do not know, dude.',
      results: '1 Result',
    },
    {
      title: 'No Results Example',
      results: 'No Results',
    },
  ]
  ```


### Accordion Slots
The contents for each accordion dropdown are displayed from the ```msg``` prop of the contents array. Any html element can be used in this slot as long as ```slot-scope="{ item }"``` is assigned to it. 
```html
    <div 
        slot-scope="{ item }"
      >
      {{item.msg}}
    </div>
```


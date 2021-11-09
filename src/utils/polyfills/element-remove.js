//https://github.com/chenzhenxi/element-remove/blob/master/index.js
(function (arr) {
  arr.forEach(function (item) {
    // eslint-disable-next-line
    if (item.hasOwnProperty('remove')) {
      return;
    }
    Object.defineProperty(item, 'remove', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        this.parentNode && this.parentNode.removeChild(this);
      },
    });
  });
})([ Element.prototype, CharacterData.prototype, DocumentType.prototype ].filter(Boolean));
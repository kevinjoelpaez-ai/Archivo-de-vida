function instantiateBookReader(selector, extraOptions) {

  selector = selector || '#BookReader';
  extraOptions = extraOptions || {};

  var options = {

    ppi: 100,

    data: [
      [
        {
          width: 1165,
          height: 1653,
          uri: 'page001.jpg'
        }
      ],

      [
        {
          width: 1165,
          height: 1653,
          uri: 'page002.jpg'
        },
        {
          width: 1165,
          height: 1653,
          uri: 'page003.jpg'
        }
      ],

      [
        {
          width: 1165,
          height: 1653,
          uri: 'page004.jpg'
        },
        {
          width: 1165,
          height: 1653,
          uri: 'page005.jpg'
        }
      ],

      [
        {
          width: 1165,
          height: 1653,
          uri: 'page006.jpg'
        },
        {
          width: 1165,
          height: 1653,
          uri: 'page007.jpg'
        }
      ],

      [
        {
          width: 1165,
          height: 1653,
          uri: 'page008.jpg'
        },
        {
          width: 1165,
          height: 1653,
          uri: 'page009.jpg'
        }
      ],

      [
        {
          width: 1165,
          height: 1653,
          uri: 'page010.jpg'
        },
        {
          width: 1165,
          height: 1653,
          uri: 'page011.jpg'
        }
      ],

      [
        {
          width: 1165,
          height: 1653,
          uri: 'page012.jpg'
        }
      ]
    ],

    bookTitle: 'Archivo de vida',

    thumbnail: 'page001.jpg',

    metadata: [
      {
        label: 'Título',
        value: 'Archivo de vida'
      }
    ],

    ui: 'full',

    el: selector
  };

  $.extend(options, extraOptions);

  var br = new BookReader(options);
  br.init();
}

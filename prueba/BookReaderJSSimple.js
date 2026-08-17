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
          uri: 'pages/page001.jpg'
        }
      ],

      [
        {
          width: 1165,
          height: 1653,
          uri: 'pages/page002.jpg'
        },
        {
          width: 1165,
          height: 1653,
          uri: 'pages/page003.jpg'
        }
      ],

      [
        {
          width: 1165,
          height: 1653,
          uri: 'pages/page004.jpg'
        },
        {
          width: 1165,
          height: 1653,
          uri: 'pages/page005.jpg'
        }
      ],

      [
        {
          width: 1165,
          height: 1653,
          uri: 'pages/page006.jpg'
        },
        {
          width: 1165,
          height: 1653,
          uri: 'pages/page007.jpg'
        }
      ],

      [
        {
          width: 1165,
          height: 1653,
          uri: 'pages/page008.jpg'
        },
        {
          width: 1165,
          height: 1653,
          uri: 'pages/page009.jpg'
        }
      ],

      [
        {
          width: 1165,
          height: 1653,
          uri: 'pages/page010.jpg'
        },
        {
          width: 1165,
          height: 1653,
          uri: 'pages/page011.jpg'
        }
      ],

      [
        {
          width: 1165,
          height: 1653,
          uri: 'pages/page012.jpg'
        }
      ]
    ],

    bookTitle: 'Archivo de vida',

    thumbnail: 'pages/page001.jpg',

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

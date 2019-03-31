export const SERVICES = [
  {
    src: 'buffet.svg',
    title: 'Banquetes',
  },
  {
    src: 'mixer.svg',
    title: 'Sistema de audio para DJ',
  },
  {
    src: 'food-truck.svg',
    title: 'Banquetes a domicilio',
  },
  {
    src: 'mirror-ball.svg',
    title: 'Sistema de luces tipo disco',
  },
  {
    src: 'cocktail.svg',
    title: 'Barra de bebidas',
  },
  // TODO: Renta de rockokas.
  {
    src: 'balloons.svg',
    title: 'Área para niños e inflables.',
  },
  {
    src: 'dinner-table.svg',
    title: 'Mesas y sillas arregladas a color',
  },
  // TODO: Mantelería fina.
  {
    src: 'bathroom.svg',
    title: 'Baños separados para damas y caballeros',
  },
  {
    src: 'wifi.svg',
    title: 'Estacionamiento y servicio de WiFi',
  },
].map(service => ({
  ...service,
  src: require(`../../../images/icons/${service.src}`),
}));

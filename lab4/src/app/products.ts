export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string[];
  link: string;

}
export const products = [
  {
    id: 1,
    name: 'Xiaomi Mi Robot Vacuum Cleaner-Mop 2 Lite MJSTL BHR5217EN White',
    price: 102800,
    description:
        'The laser sensor is located in the center of the device, and the dust collector capacity now has a maximum capacity of 450 ml. There is a 270 ml water tank for wet cleaning.  In addition to getting rid of dust, the Xiaomi vacuum mop also removes dirt and reaches a suction power of 2200 Pa, its battery capacity is 2600 mAh, which gives us autonomy for about 1.5 hours.',
    rating: 5,
    image:
        ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/h5c/48451735191582/xiaomi-mi-robot-vacuum-mop-2-lite-mjstl-belyj-103536017-1.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5c/hd1/51216288219166/xiaomi-mi-robot-vacuum-mop-2-lite-mjstl-belyj-103536017-6.jpg'],
    link: 'https://kaspi.kz/shop/p/xiaomi-mi-robot-vacuum-mop-2-lite-mjstl-bhr5217en-belyi-103536017/?c=750000000#!/item',
  },
  {
    id:2,
    name: 'Dyson V8 Motorhead Vacuum Cleaner Silver',
    price: 272990,
    description:
      'The Dyson V8 wireless vacuum cleaner is equipped with a nickel-cobalt aluminum battery that provides up to 40 minutes of operation without loss of suction power. 15 cyclones arranged in 2 rows work in parallel, increasing the power of the air flow and effectively sifting dust from the air.\n' +
        'The color is silver.',
    rating: 4,
    image:
      ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h40/h01/32379950530590/dyson-v8-motorhead-serebristyj-100403973-1.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h86/h58/32379972648990/dyson-v8-motorhead-serebristyj-100403973-4.jpg'],
    link: 'https://kaspi.kz/shop/p/dyson-v8-motorhead-serebristyi-100403973/?c=750000000#!/item',

  },
  {
    id: 3,
    name: 'Monitor Samsung black',
    price: 91990,
    description:
        'diagonal: 27 inch, Resolution: 1920x1080, type of LCD matrix: IPS, brightness: 250 cd/m2, response time: 5ms, Max. frame refresh rate: 75Hz, inputs: HDMI, ,VGA (D-Sub)',
    rating: 5,
    image:
        ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfc/h14/33015787225118/samsung-lf27t350fhixci-cernyj-100677519-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h55/h31/50482314969118/samsung-lf27t350fhixci-cernyj-100677519-2-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h08/h4a/50482315198494/samsung-lf27t350fhixci-cernyj-100677519-3-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/samsung-lf27t350fhixci-chernyi-100677519/?c=750000000#!/item',
  },
  {
    id: 4,
    name: 'Laptop stand TATKRAFT Olaf',
    price: 13900,
    description:
        'type: no cooling, laptop diagonal: 17, backlight: no',
    rating: 4.5,
    image:
        ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he3/hdd/50016820396062/tatkraft-olaf-11878-104459101-1.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h4d/50112487718942/tatkraft-olaf-11878-104459101-2.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf2/h2f/50112488636446/tatkraft-olaf-11878-104459101-4.jpg'],
    link: 'https://kaspi.kz/shop/p/tatkraft-olaf-11878-104459101/?c=750000000#!/item',
  },
  {
    id: 5,
    name: 'TV Samsung QE55Q60AAUXCE 140 cm black',
    price: 519990,
    description:
        'Type: QLED TV, diagonal: 55 inch, Resolution: 3840x2160, HD support: HDR, Smart TV technology: Yes, wifi: yes, inputs: HDMI, Ethernet (RJ-45),USB, Bluetooth',
    rating: 5,
    image:
        ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb7/h47/34089159131166/samsung-qe55q60aauxce-139sm-chernyi-101670068-1.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h15/hdc/34089164079134/samsung-qe55q60aauxce-139sm-chernyi-101670068-2.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf5/ha1/34089167650846/samsung-qe55q60aauxce-139sm-chernyi-101670068-3.jpg'],
    link: 'https://kaspi.kz/shop/p/samsung-qe55q60aauxce-140-sm-chernyi-101670068/?c=750000000#!/item',
  },
  {
    id: 6,
    name: 'Headphones Samsung Galaxy Buds Pro black',
    price: 69835,
    description:
        'type: headset, type: intracanal, connection: wireless, type of acoustic design: open, mount type: no mount, Active Noise Cancellation: Yes, microphone: yes',
    rating: 5,
    image:
        ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4e/hc2/50133779808286/samsung-galaxy-buds-pro-sm-r190nzkacis-cernyj-100956349-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd0/h25/50133780037662/samsung-galaxy-buds-pro-sm-r190nzkacis-cernyj-100956349-2-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he9/h88/33443840262174/samsung-galaxy-buds-pro-sm-r190nzkacis-cernyj-100956349-3-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds-pro-sm-r190nzkacis-chernyi-100956349/?c=750000000#!/item',
  },
  {
    id: 7,
    name: 'Refrigerator Samsung silver',
    price: 689990,
    description:
        'type: headset, type: intracanal, connection: wireless, type of acoustic design: open, mount type: no mount, Active Noise Cancellation: Yes, microphone: yes',
    rating: 5,
    image:
        ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha1/h8d/52153347342366/samsung-rf48a4000m9-wt-serebristyj-105648516-1.jpg',  'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd6/h3d/52153347801118/samsung-rf48a4000m9-wt-serebristyj-105648516-2.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h70/hb9/52153348259870/samsung-rf48a4000m9-wt-serebristyj-105648516-3.jpg'],
    link: 'https://kaspi.kz/shop/p/samsung-rf48a4000m9-wt-serebristyi-105648516/?c=750000000#!/item',
  },
  {
    id: 8,
    name: 'Briolette pendant - gold, diamond, topaz',
    price: 422000,
    description:
        'item type: pendant, theme: universal, note: the weight of the shade in the photo and the characteristics are approximate averages and may differ from the actual, for whom: for women,sample: 585, material: gold, insert: diamond, topaz, country of origin: Armenia, product weight: 2.57g',
    rating: 5,
    image:
        ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hed/hd0/68051291209758/briolette-podveska-hb187pk-2-57-g-zoloto-brilliant-topaz-108513196-1.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h34/h18/68051295010846/briolette-podveska-hb187pk-2-57-g-zoloto-brilliant-topaz-108513196-2.jpg'],
    link: 'https://kaspi.kz/shop/p/briolette-podveska---hb187pk-2-57-g-zoloto-brilliant-topaz-108513196/?c=750000000#!/item',
  },
  {
    id: 9,
    name: 'Wardrobe ANREX, Monaco',
    price: 341900,
    description:
        'installation type: floor standing, material: chipboard, width, cm: 152, depth, cm: 62, height, cm: 214, color: beige, country: Belarus',
    rating: 5,
    image:
        ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/hb5/49215173787678/anreks-monako-3d4s-sosna-vintaz-14700062-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hba/h7a/49215174017054/anreks-monako-3d4s-sosna-vintaz-14700062-2-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5b/h3b/49215174508574/skaf-anrex-152x62x214-sm-monako-3d4s-14700062-3.jpg'],
    link: 'https://kaspi.kz/shop/p/anrex-152x62x214-sm-monako-3d4s-14700062/?c=750000000#!/item',
  },
  {
    id: 10,
    name: 'CHANEL Chance Eau Fraiche EDT',
    price: 68990 ,
    description:
        'type: edt eau de toilette, volume: 100 ml, gender: women, family: floral, brand country: France',
    rating: 5,
    image:
        ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h92/h58/31627949113374/chanel-chance-eau-fraiche-edt-100-ml-17301049-1.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h24/h9b/31627952390174/chanel-chance-eau-fraiche-edt-100-ml-17301049-2.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h83/h79/31627958190110/chanel-chance-eau-fraiche-edt-100-ml-17301049-3.jpg'],
    link: 'https://kaspi.kz/shop/p/chanel-chance-eau-fraiche-tualetnaja-voda-edt-100-ml-17301049/?c=750000000#!/item',
  },
  {
    id: 11,
    name: 'GIVENCHY Prisme Libre Pressed Powder loose 1 Pastel muslin transparent',
    price: 33989,
    description: 'texture: crumbly, skin type: combination, normal, for all types, shade: transparent, effect: leveling, UV protection: none, country of origin: France',
    rating: 5,
    image: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hea/h66/61985150861342/givenchy-matiruusaa-kompaktnaa-pudra-dla-lica-prisme-libre-pressed-powder-106194432-1.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/hcf/61985151385630/givenchy-matiruusaa-kompaktnaa-pudra-dla-lica-prisme-libre-pressed-powder-106194432-2.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h70/h43/61985151844382/givenchy-matiruusaa-kompaktnaa-pudra-dla-lica-prisme-libre-pressed-powder-106194432-3.jpg'],
    link: 'https://kaspi.kz/shop/p/givenchy-prisme-libre-pressed-powder-rassypchataja-1-pastel-nyi-muslin-prozrachnyi-106194432/?c=750000000#!/item'
  },
  {
    id: 11,
    name: 'Smart-watch Samsung Galaxy Watch 4 Classic 46 mm black',
    price: 95830,
    description:
        'platform support: Android, body material: aluminum, body color: black, interfaces: Bluetooth, ,NFC',
    rating: 5,
    image:
        ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h31/h9b/62047597559838/samsung-galaxy-watch-4-classic-sm-r890-cernyj-102170938-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h80/h2d/62047597789214/samsung-galaxy-watch-4-classic-sm-r890-cernyj-102170938-2-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h07/h68/62047598018590/samsung-galaxy-watch-4-classic-sm-r890-cernyj-102170938-3-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-4-classic-sm-r890nzkacis-46-mm-chernyi-chernyi-102170938/?c=750000000#!/item',
  }
  ];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
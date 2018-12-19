const codes = [
	{
		nameEn: 'Action & Adventure',
		nameFr: 'Action & Adventure',
		code: '1365',
	},
	{
		nameEn: 'Action Comedies',
		nameFr: 'Action Comedies',
		code: '43040',
	},
	{
		nameEn: 'Action Sci-Fi & Fantasy',
		nameFr: 'Action Sci-Fi & Fantasy',
		code: '1568',
	},
	{
		nameEn: 'Action Thrillers',
		nameFr: 'Action Thrillers',
		code: '43048',
	},
	{
		nameEn: 'Adult Animation',
		nameFr: 'Adult Animation',
		code: '11881',
	},
	{
		nameEn: 'Adventures',
		nameFr: 'Aventures',
		code: '7442',
	},
	{
		nameEn: 'African Movies',
		nameFr: 'Films africains',
		code: '3761',
	},
	{
		nameEn: 'Alien Sci-Fi',
		nameFr: 'Science-fiction extraterrestre',
		code: '3327',
	},
	{
		nameEn: 'Animal Tales',
		nameFr: 'Contes d\'animaux',
		code: '5507',
	},
	{
		nameEn: 'Anime',
		nameFr: 'Anime',
		code: '7424',
	},
	{
		nameEn: 'Anime Action',
		nameFr: 'Anime Action',
		code: '2653',
	},
	{
		nameEn: 'Anime Comedies',
		nameFr: 'Comédies Animés',
		code: '9302',
	},
	{
		nameEn: 'Anime Dramas',
		nameFr: 'Drames anime',
		code: '452',
	},
	{
		nameEn: 'Anime Fantasy',
		nameFr: 'Anime Fantasy',
		code: '11146',
	},
	{
		nameEn: 'Anime Features',
		nameFr: 'Anime Caractéristiques',
		code: '3063',
	},
	{
		nameEn: 'Anime Horror',
		nameFr: 'Anime Horreur',
		code: '10695',
	},
	{
		nameEn: 'Anime Sci-Fi',
		nameFr: 'Anime Sci-Fi',
		code: '2729',
	},
	{
		nameEn: 'Anime Series',
		nameFr: 'Série anime',
		code: '6721',
	},
	{
		nameEn: 'Art House Movies',
		nameFr: 'Films de la maison d\'art',
		code: '29764',
	},
	{
		nameEn: 'Asian Action Movies',
		nameFr: 'Films d\'action asiatiques',
		code: '77232',
	},
	{
		nameEn: 'Australian Movies',
		nameFr: 'Films australiens',
		code: '5230',
	},
	{
		nameEn: 'B-Horror Movies',
		nameFr: 'B-films d\'horreur',
		code: '8195',
	},
	{
		nameEn: 'Baseball Movies',
		nameFr: 'Films de baseball',
		code: '12339',
	},
	{
		nameEn: 'Basketball Movies',
		nameFr: 'Films de basket',
		code: '12762',
	},
	{
		nameEn: 'Belgian Movies',
		nameFr: 'Films belges',
		code: '262',
	},
	{
		nameEn: 'Biographical Documentaries',
		nameFr: 'Documentaires biographiques',
		code: '3652',
	},
	{
		nameEn: 'Biographical Dramas',
		nameFr: 'Drames biographiques',
		code: '3179',
	},
	{
		nameEn: 'Boxing Movies',
		nameFr: 'Films de boxe',
		code: '12443',
	},
	{
		nameEn: 'British Movies',
		nameFr: 'Films britanniques',
		code: '10757',
	},
	{
		nameEn: 'British TV Shows',
		nameFr: 'Émissions de télévision britanniques',
		code: '52117',
	},
	{
		nameEn: 'Campy Movies',
		nameFr: 'Campy Films',
		code: '1252',
	},
	{
		nameEn: 'Children & Family Movies',
		nameFr: 'Films pour enfants et familles',
		code: '783',
	},
	{
		nameEn: 'Chinese Movies',
		nameFr: 'Films chinois',
		code: '3960',
	},
	{
		nameEn: 'Classic Action & Adventure',
		nameFr: 'Action Classique & Aventure',
		code: '46576',
	},
	{
		nameEn: 'Classic Comedies',
		nameFr: 'Comédies Classiques',
		code: '31694',
	},
	{
		nameEn: 'Classic Dramas',
		nameFr: 'Drames classiques',
		code: '29809',
	},
	{
		nameEn: 'Classic Foreign Movies',
		nameFr: 'Films étrangers classiques',
		code: '32473',
	},
	{
		nameEn: 'Classic Movies',
		nameFr: 'Films classiques',
		code: '31574',
	},
	{
		nameEn: 'Classic Musicals',
		nameFr: 'Comédies musicales classiques',
		code: '32392',
	},
	{
		nameEn: 'Classic Romantic Movies',
		nameFr: 'Films romantiques classiques',
		code: '31273',
	},
	{
		nameEn: 'Classic Sci-Fi & Fantasy',
		nameFr: 'Sci-Fi classique & Fantasy',
		code: '47147',
	},
	{
		nameEn: 'Classic Thrillers',
		nameFr: 'Thrillers classiques',
		code: '46588',
	},
	{
		nameEn: 'Classic TV Shows',
		nameFr: 'Émissions de télévision classiques',
		code: '46553',
	},
	{
		nameEn: 'Classic War Movies',
		nameFr: 'Films de guerre classiques',
		code: '48744',
	},
	{
		nameEn: 'Classic Westerns',
		nameFr: 'Classic Westerns',
		code: '47465',
	},
	{
		nameEn: 'Comedies',
		nameFr: 'Comédies',
		code: '6548',
	},
	{
		nameEn: 'Comic Book and Superhero Movies',
		nameFr: 'Films de bandes dessinées et de super-héros',
		code: '10118',
	},
	{
		nameEn: 'Country & Western/Folk',
		nameFr: 'Country & Western / Folk',
		code: '1105',
	},
	{
		nameEn: 'Courtroom Dramas',
		nameFr: 'Drames de la salle d\'audience',
		code: '2748',
	},
	{
		nameEn: 'Creature Features',
		nameFr: 'Caractéristiques de la créature',
		code: '6895',
	},
	{
		nameEn: 'Crime Action & Adventure',
		nameFr: 'Crime Action & Aventure',
		code: '9584',
	},
	{
		nameEn: 'Crime Documentaries',
		nameFr: 'Documentaires policiers',
		code: '9875',
	},
	{
		nameEn: 'Crime Dramas',
		nameFr: 'Drames du crime',
		code: '6889',
	},
	{
		nameEn: 'Crime Thrillers',
		nameFr: 'Policiers',
		code: '10499',
	},
	{
		nameEn: 'Crime TV Shows',
		nameFr: 'Crime TV Shows',
		code: '26146',
	},
	{
		nameEn: 'Cult Comedies',
		nameFr: 'Comédies Culte',
		code: '9434',
	},
	{
		nameEn: 'Cult Horror Movies',
		nameFr: 'Films d\'horreur cultes',
		code: '10944',
	},
	{
		nameEn: 'Cult Movies',
		nameFr: 'Films cultes',
		code: '7627',
	},
	{
		nameEn: 'Cult Sci-Fi & Fantasy',
		nameFr: 'Cult Sci-Fi et Fantasy',
		code: '4734',
	},
	{
		nameEn: 'Cult TV Shows',
		nameFr: 'Émissions de télévision cultes',
		code: '74652',
	},
	{
		nameEn: 'Dark Comedies',
		nameFr: 'Comédies Noires',
		code: '869',
	},
	{
		nameEn: 'Deep Sea Horror Movies',
		nameFr: 'Films d\'horreur en mer profonde',
		code: '45028',
	},
	{
		nameEn: 'Disney',
		nameFr: 'Disney',
		code: '67673',
	},
	{
		nameEn: 'Disney Musicals',
		nameFr: 'Comédies musicales Disney',
		code: '59433',
	},
	{
		nameEn: 'Documentaries',
		nameFr: 'Documentaires',
		code: '6839',
	},
	{
		nameEn: 'Dramas',
		nameFr: 'Les drames',
		code: '5763',
	},
	{
		nameEn: 'Dramas based on Books',
		nameFr: 'Des drames basés sur des livres',
		code: '4961',
	},
	{
		nameEn: 'Dramas based on real life',
		nameFr: 'Des drames basés sur la vie réelle',
		code: '3653',
	},
	{
		nameEn: 'Dutch Movies',
		nameFr: 'Films hollandais',
		code: '10606',
	},
	{
		nameEn: 'Eastern European Movies',
		nameFr: 'Films d\'Europe de l\'Est',
		code: '5254',
	},
	{
		nameEn: 'Education for Kids',
		nameFr: 'Education pour les enfants',
		code: '10659',
	},
	{
		nameEn: 'Epics',
		nameFr: 'Épopées',
		code: '52858',
	},
	{
		nameEn: 'Experimental Movies',
		nameFr: 'Films expérimentaux',
		code: '11079',
	},
	{
		nameEn: 'Faith & Spirituality',
		nameFr: 'Foi et spiritualité',
		code: '26835',
	},
	{
		nameEn: 'Faith & Spirituality Movies',
		nameFr: 'Films de foi et de spiritualité',
		code: '52804',
	},
	{
		nameEn: 'Family Features',
		nameFr: 'Caractéristiques de la famille',
		code: '51056',
	},
	{
		nameEn: 'Fantasy Movies',
		nameFr: 'Films Fantastiques',
		code: '9744',
	},
	{
		nameEn: 'Film Noir',
		nameFr: 'Film Noir',
		code: '7687',
	},
	{
		nameEn: 'Food & Travel TV',
		nameFr: 'Food & Travel TV',
		code: '72436',
	},
	{
		nameEn: 'Football Movies',
		nameFr: 'Films de football',
		code: '12803',
	},
	{
		nameEn: 'Foreign Action & Adventure',
		nameFr: 'Action étrangère et aventure',
		code: '11828',
	},
	{
		nameEn: 'Foreign Comedies',
		nameFr: 'Comédies étrangères',
		code: '4426',
	},
	{
		nameEn: 'Foreign Documentaries',
		nameFr: 'Documentaires étrangers',
		code: '5161',
	},
	{
		nameEn: 'Foreign Dramas',
		nameFr: 'Drames étrangers',
		code: '2150',
	},
	{
		nameEn: 'Foreign Gay & Lesbian Movies',
		nameFr: 'Films étrangers gays et lesbiennes',
		code: '8243',
	},
	{
		nameEn: 'Foreign Horror Movies',
		nameFr: 'Films d\'horreur étrangers',
		code: '8654',
	},
	{
		nameEn: 'Foreign Movies',
		nameFr: 'Films étrangers',
		code: '7462',
	},
	{
		nameEn: 'Foreign Sci-Fi & Fantasy',
		nameFr: 'Science-fiction et fantastique étrangers',
		code: '6485',
	},
	{
		nameEn: 'Foreign Thrillers',
		nameFr: 'Thrillers étrangers',
		code: '10306',
	},
	{
		nameEn: 'French Movies',
		nameFr: 'Films français',
		code: '58807',
	},
	{
		nameEn: 'Gangster Movies',
		nameFr: 'Films de gangsters',
		code: '31851',
	},
	{
		nameEn: 'Gay & Lesbian Dramas',
		nameFr: 'Drames gays et lesbiennes',
		code: '500',
	},
	{
		nameEn: 'German Movies',
		nameFr: 'Films allemands',
		code: '58886',
	},
	{
		nameEn: 'Greek Movies',
		nameFr: 'Films grecs',
		code: '61115',
	},
	{
		nameEn: 'Historical Documentaries',
		nameFr: 'Documentaires historiques',
		code: '5349',
	},
	{
		nameEn: 'Horror Comedy',
		nameFr: 'Comédie d\'horreur',
		code: '89585',
	},
	{
		nameEn: 'Horror Movies',
		nameFr: 'Films d\'horreur',
		code: '8711',
	},
	{
		nameEn: 'Independent Action & Adventure',
		nameFr: 'Action indépendante et aventure',
		code: '11804',
	},
	{
		nameEn: 'Independent Comedies',
		nameFr: 'Comédies Indépendantes',
		code: '4195',
	},
	{
		nameEn: 'Independent Dramas',
		nameFr: 'Drames indépendants',
		code: '384',
	},
	{
		nameEn: 'Independent Movies',
		nameFr: 'Films indépendants',
		code: '7077',
	},
	{
		nameEn: 'Independent Thrillers',
		nameFr: 'Thrillers indépendants',
		code: '3269',
	},
	{
		nameEn: 'Indian Movies',
		nameFr: 'Films indiens',
		code: '10463',
	},
	{
		nameEn: 'Irish Movies',
		nameFr: 'Films irlandais',
		code: '58750',
	},
	{
		nameEn: 'Italian Movies',
		nameFr: 'Films italiens',
		code: '8221',
	},
	{
		nameEn: 'Japanese Movies',
		nameFr: 'Films japonais',
		code: '10398',
	},
	{
		nameEn: 'Jazz & Easy Listening',
		nameFr: 'Jazz & Easy Listening',
		code: '10271',
	},
	{
		nameEn: 'Kids Faith & Spirituality',
		nameFr: 'Enfants Foi & Spiritualité',
		code: '751423',
	},
	{
		nameEn: 'Kids Music',
		nameFr: 'Musique pour enfants',
		code: '52843',
	},
	{
		nameEn: 'Kids’ TV',
		nameFr: 'Télévision pour enfants',
		code: '27346',
	},
	{
		nameEn: 'Korean Movies',
		nameFr: 'Films coréens',
		code: '5685',
	},
	{
		nameEn: 'Korean TV Shows',
		nameFr: 'Émissions de télévision coréennes',
		code: '67879',
	},
	{
		nameEn: 'Late Night Comedies',
		nameFr: 'Comédies de fin de nuit',
		code: '1402',
	},
	{
		nameEn: 'Latin American Movies',
		nameFr: 'Films d\'Amérique latine',
		code: '1613',
	},
	{
		nameEn: 'Latin Music',
		nameFr: 'Musique latine',
		code: '10741',
	},
	{
		nameEn: 'Martial Arts Movies',
		nameFr: 'Films d\'arts martiaux',
		code: '8985',
	},
	{
		nameEn: 'Martial Arts, Boxing & Wrestling',
		nameFr: 'Arts martiaux, boxe et lutte',
		code: '6695',
	},
	{
		nameEn: 'Middle Eastern Movies',
		nameFr: 'Films du Moyen-Orient',
		code: '5875',
	},
	{
		nameEn: 'Military Action & Adventure',
		nameFr: 'Action militaire et aventure',
		code: '2125',
	},
	{
		nameEn: 'Military Documentaries',
		nameFr: 'Documentaires militaires',
		code: '4006',
	},
	{
		nameEn: 'Military Dramas',
		nameFr: 'Drames militaires',
		code: '11',
	},
	{
		nameEn: 'Military TV Shows',
		nameFr: 'Émissions de télévision militaires',
		code: '25804',
	},
	{
		nameEn: 'Miniseries',
		nameFr: 'Minisérie',
		code: '4814',
	},
	{
		nameEn: 'Mockumentaries',
		nameFr: 'Mockumentaries',
		code: '26',
	},
	{
		nameEn: 'Monster Movies',
		nameFr: 'Monster Movies',
		code: '947',
	},
	{
		nameEn: 'Movies based on children’s books',
		nameFr: 'Films basés sur des livres pour enfants',
		code: '10056',
	},
	{
		nameEn: 'Movies for ages 0 to 2',
		nameFr: 'Films pour les 0-2 ans',
		code: '6796',
	},
	{
		nameEn: 'Movies for ages 2 to 4',
		nameFr: 'Films pour les 2 à 4 ans',
		code: '6218',
	},
	{
		nameEn: 'Movies for ages 5 to 7',
		nameFr: 'Films pour les 5 à 7 ans',
		code: '5455',
	},
	{
		nameEn: 'Movies for ages 8 to 10',
		nameFr: 'Films pour les 8 à 10 ans',
		code: '561',
	},
	{
		nameEn: 'Movies for ages 11 to 12',
		nameFr: 'Films pour les 11 à 12 ans',
		code: '6962',
	},
	{
		nameEn: 'Music & Concert Documentaries',
		nameFr: 'Documentaires de musique et de concert',
		code: '90361',
	},
	{
		nameEn: 'Music',
		nameFr: 'La musique',
		code: '1701',
	},
	{
		nameEn: 'Musicals',
		nameFr: 'Comédies musicales',
		code: '13335',
	},
	{
		nameEn: 'Mysteries',
		nameFr: 'Les mystères',
		code: '9994',
	},
	{
		nameEn: 'New Zealand Movies',
		nameFr: 'Films néo-zélandais',
		code: '63782',
	},
	{
		nameEn: 'Period Pieces',
		nameFr: 'Pièces d\'époque',
		code: '12123',
	},
	{
		nameEn: 'Political Comedies',
		nameFr: 'Comédies Politiques',
		code: '2700',
	},
	{
		nameEn: 'Political Documentaries',
		nameFr: 'Documentaires politiques',
		code: '7018',
	},
	{
		nameEn: 'Political Dramas',
		nameFr: 'Drames politiques',
		code: '6616',
	},
	{
		nameEn: 'Political Thrillers',
		nameFr: 'Thrillers politiques',
		code: '10504',
	},
	{
		nameEn: 'Psychological Thrillers',
		nameFr: 'Thrillers psychologiques',
		code: '5505',
	},
	{
		nameEn: 'Quirky Romance',
		nameFr: 'Romance décalé',
		code: '36103',
	},
	{
		nameEn: 'Reality TV',
		nameFr: 'Télé réalité',
		code: '9833',
	},
	{
		nameEn: 'Religious Documentaries',
		nameFr: 'Documentaires religieux',
		code: '10005',
	},
	{
		nameEn: 'Rock & Pop Concerts',
		nameFr: 'Rock & Pop Concerts',
		code: '3278',
	},
	{
		nameEn: 'Romantic Comedies',
		nameFr: 'Comédie romantique',
		code: '5475',
	},
	{
		nameEn: 'Romantic Dramas',
		nameFr: 'Drames romantiques',
		code: '1255',
	},
	{
		nameEn: 'Romantic Favorites',
		nameFr: 'Favoris romantiques',
		code: '502675',
	},
	{
		nameEn: 'Romantic Foreign Movies',
		nameFr: 'Films étrangers romantiques',
		code: '7153',
	},
	{
		nameEn: 'Romantic Independent Movies',
		nameFr: 'Films indépendants romantiques',
		code: '9916',
	},
	{
		nameEn: 'Romantic Movies',
		nameFr: 'Films romantiques',
		code: '8883',
	},
	{
		nameEn: 'Russian',
		nameFr: 'russe',
		code: '11567',
	},
	{
		nameEn: 'Satanic Stories',
		nameFr: 'Histoires sataniques',
		code: '6998',
	},
	{
		nameEn: 'Satires',
		nameFr: 'Satires',
		code: '4922',
	},
	{
		nameEn: 'Scandinavian Movies',
		nameFr: 'Films scandinaves',
		code: '9292',
	},
	{
		nameEn: 'Sci-Fi & Fantasy',
		nameFr: 'Sci-Fi et Fantasy',
		code: '1492',
	},
	{
		nameEn: 'Sci-Fi Adventure',
		nameFr: 'Aventure de science-fiction',
		code: '6926',
	},
	{
		nameEn: 'Sci-Fi Dramas',
		nameFr: 'Drames de science-fiction',
		code: '3916',
	},
	{
		nameEn: 'Sci-Fi Horror Movies',
		nameFr: 'Films d\'horreur de science-fiction',
		code: '1694',
	},
	{
		nameEn: 'Sci-Fi Thrillers',
		nameFr: 'Thrillers Sci-Fi',
		code: '11014',
	},
	{
		nameEn: 'Science & Nature Documentaries',
		nameFr: 'Documentaires Science & Nature',
		code: '2595',
	},
	{
		nameEn: 'Science & Nature TV',
		nameFr: 'Science & Nature TV',
		code: '52780',
	},
	{
		nameEn: 'Screwball Comedies',
		nameFr: 'Comédies Screwball',
		code: '9702',
	},
	{
		nameEn: 'Showbiz Dramas',
		nameFr: 'Drames de showbiz',
		code: '5012',
	},
	{
		nameEn: 'Showbiz Musicals',
		nameFr: 'Les comédies musicales',
		code: '13573',
	},
	{
		nameEn: 'Silent Movies',
		nameFr: 'Films muets',
		code: '53310',
	},
	{
		nameEn: 'Slapstick Comedies',
		nameFr: 'Comédies Slapstick',
		code: '10256',
	},
	{
		nameEn: 'Slasher and Serial Killer Movies',
		nameFr: 'Films Slasher et Serial Killer',
		code: '8646',
	},
	{
		nameEn: 'Soccer Movies',
		nameFr: 'Films de football',
		code: '12549',
	},
	{
		nameEn: 'Social & Cultural Documentaries',
		nameFr: 'Documentaires sociaux et culturels',
		code: '3675',
	},
	{
		nameEn: 'Social Issue Dramas',
		nameFr: 'Drames sociales',
		code: '3947',
	},
	{
		nameEn: 'Southeast Asian Movies',
		nameFr: 'Films d\'Asie du Sud-Est',
		code: '9196',
	},
	{
		nameEn: 'Spanish Movies',
		nameFr: 'Films espagnols',
		code: '58741',
	},
	{
		nameEn: 'Spiritual Documentaries',
		nameFr: 'Documentaires spirituels',
		code: '2760',
	},
	{
		nameEn: 'Sports & Fitness',
		nameFr: 'Sports & Fitness',
		code: '9327',
	},
	{
		nameEn: 'Sports Comedies',
		nameFr: 'Comédies Sportives',
		code: '5286',
	},
	{
		nameEn: 'Sports Documentaries',
		nameFr: 'Documentaires sportifs',
		code: '180',
	},
	{
		nameEn: 'Sports Dramas',
		nameFr: 'Drames sportifs',
		code: '7243',
	},
	{
		nameEn: 'Sports Movies',
		nameFr: 'Films de sport',
		code: '4370',
	},
	{
		nameEn: 'Spy Action & Adventure',
		nameFr: 'Spy Action & Aventure',
		code: '10702',
	},
	{
		nameEn: 'Spy Thrillers',
		nameFr: 'Thrillers d\'espionnage',
		code: '9147',
	},
	{
		nameEn: 'Stage Musicals',
		nameFr: 'Stage Musicals',
		code: '55774',
	},
	{
		nameEn: 'Stand-up Comedy',
		nameFr: 'Comédie',
		code: '11559',
	},
	{
		nameEn: 'Steamy Romantic Movies',
		nameFr: 'Films romantiques fumants',
		code: '35800',
	},
	{
		nameEn: 'Steamy Thrillers',
		nameFr: 'Thrillers torrides',
		code: '972',
	},
	{
		nameEn: 'Supernatural Horror Movies',
		nameFr: 'Films d\'horreur surnaturels',
		code: '42023',
	},
	{
		nameEn: 'Supernatural Thrillers',
		nameFr: 'Thrillers surnaturels',
		code: '11140',
	},
	{
		nameEn: 'Tearjerkers',
		nameFr: 'Tearjerkers',
		code: '6384',
	},
	{
		nameEn: 'Teen Comedies',
		nameFr: 'Comédies Teen',
		code: '3519',
	},
	{
		nameEn: 'Teen Dramas',
		nameFr: 'Drames adolescents',
		code: '9299',
	},
	{
		nameEn: 'Teen Screams',
		nameFr: 'Cris adolescents',
		code: '52147',
	},
	{
		nameEn: 'Teen TV Shows',
		nameFr: 'Émissions de télévision pour adolescents',
		code: '60951',
	},
	{
		nameEn: 'Thrillers',
		nameFr: 'Romans policiers',
		code: '8933',
	},
	{
		nameEn: 'Travel & Adventure Documentaries',
		nameFr: 'Documentaires de voyage et d\'aventure',
		code: '1159',
	},
	{
		nameEn: 'TV Action & Adventure',
		nameFr: 'TV Action & Adventure',
		code: '10673',
	},
	{
		nameEn: 'TV Cartoons',
		nameFr: 'Dessins animés télé',
		code: '11177',
	},
	{
		nameEn: 'TV Comedies',
		nameFr: 'Comédies TV',
		code: '10375',
	},
	{
		nameEn: 'TV Documentaries',
		nameFr: 'Documentaires télévisés',
		code: '10105',
	},
	{
		nameEn: 'TV Dramas',
		nameFr: 'Drames télé',
		code: '11714',
	},
	{
		nameEn: 'TV Horror',
		nameFr: 'Horreur télé',
		code: '83059',
	},
	{
		nameEn: 'TV Mysteries',
		nameFr: 'Mystères TV',
		code: '4366',
	},
	{
		nameEn: 'TV Sci-Fi & Fantasy',
		nameFr: 'Télévision Sci-Fi & Fantasy',
		code: '1372',
	},
	{
		nameEn: 'TV Shows',
		nameFr: 'Émissions de télévision',
		code: '83',
	},
	{
		nameEn: 'Urban & Dance Concerts',
		nameFr: 'Urban & Dance Concerts',
		code: '9472',
	},
	{
		nameEn: 'Vampire Horror Movies',
		nameFr: 'Films d\'horreur de vampire',
		code: '75804',
	},
	{
		nameEn: 'Werewolf Horror Movies',
		nameFr: 'Loup-garou films d\'horreur',
		code: '75930',
	},
	{
		nameEn: 'Westerns',
		nameFr: 'Westerns',
		code: '7700',
	},
	{
		nameEn: 'World Music Concerts',
		nameFr: 'Concerts de musique du monde',
		code: '2856',
	},
	{
		nameEn: 'Zombie Horror Movies',
		nameFr: 'Films d\'horreur zombie',
		code: '75405',
	},
]
export default codes

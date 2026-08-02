/*==================================================
    ALMACÉN DE POLLO
    Base de datos del catálogo
==================================================*/

const TIENDA = {

    nombre: "Almacén de Pollo",

    slogan: "Granja Gourmet",

    whatsapp: "541131405747",

    direccion: "Rodríguez Peña 835",

    localidad: "San Miguel",

    provincia: "Buenos Aires",

    moneda: "ARS"

};



const CATALOGO = [

/*==================================================
                PRODUCTOS DE GRANJA
==================================================*/

{

    id: "granja",

    nombre: "Productos de Granja",

    productos: [

        {
            id:1,
            nombre:"Pollo entero",
            precio:6400,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/pollo-entero.webp",
            destacado:false
        },

        {
            id:2,
            nombre:"Pata muslo",
            precio:6400,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/pata-muslo.webp",
            destacado:true
        },

        {
            id:3,
            nombre:"Pechuga",
            precio:15900,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/pechuga.webp",
            destacado:true
        },

        {
            id:4,
            nombre:"Churrasquitos de pata muslo",
            precio:15900,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/churrasquitos-pata-muslo.webp",
            destacado:false
        },

        {
            id:5,
            nombre:"Recortes de pechuga",
            precio:10900,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/recortes-pechuga.webp",
            destacado:false
        },

        {
            id:6,
            nombre:"Alitas con muslo",
            precio:2500,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/alitas-muslo.webp",
            destacado:false
        },

        {
            id:7,
            nombre:"Milanesas de pechuga clásica",
            precio:14900,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/milanesa-clasica.webp",
            destacado:true
        },

        {
            id:8,
            nombre:"Milanesas de pechuga con avena",
            precio:16900,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/milanesa-avena.webp",
            destacado:false
        },

        {
            id:9,
            nombre:"Milanesas de pechuga con mix de semillas",
            precio:16900,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/milanesa-semillas.webp",
            destacado:false
        },

        {
            id:10,
            nombre:"Milanesas de pechuga con cereales",
            precio:16900,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/milanesa-cereales.webp",
            destacado:false
        },

        {
            id:11,
            nombre:"Milanesas de pata muslo",
            precio:16900,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/milanesa-pata-muslo.webp",
            destacado:false
        },

        {
            id:12,
            nombre:"Matambre de pollo",
            precio:12000,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/matambre-pollo.webp",
            destacado:false
        }

    ]

},

/*==================================================
                    CERDO
==================================================*/

{

    id:"cerdo",

    nombre:"Cerdo",

    productos:[

        {
            id:13,
            nombre:"Milanesas de carré de cerdo",
            precio:16900,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/milanesa-carre.webp",
            destacado:false
        },

        {
            id:14,
            nombre:"Pamplonas rellenas de jamón y queso",
            precio:29000,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/pamplona.webp",
            destacado:true
        },

        {
            id:15,
            nombre:"Churrasquitos de bondiola",
            precio:14000,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/churrasquitos-bondiola.webp",
            destacado:false
        },

        {
            id:16,
            nombre:"Costillitas de carré con hueso",
            precio:12500,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/costilla-hueso.webp",
            destacado:false
        },

        {
            id:17,
            nombre:"Costillitas de carré sin hueso",
            precio:14900,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/costilla-sin-hueso.webp",
            destacado:false
        },

        {
            id:18,
            nombre:"Pechito de cerdo",
            precio:12000,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/pechito.webp",
            destacado:false
        },

        {
            id:19,
            nombre:"Vacío de cerdo",
            precio:16000,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/vacio-cerdo.webp",
            destacado:false
        },

        {
            id:20,
            nombre:"Solomillo de cerdo",
            precio:15100,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/solomillo.webp",
            destacado:false
        },

        {
            id:21,
            nombre:"Ribs",
            precio:9500,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/ribs.webp",
            destacado:false
        },

        {
            id:22,
            nombre:"Chorizos de cerdo",
            precio:9100,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/chorizo-cerdo.webp",
            destacado:false
        },

        {
            id:23,
            nombre:"Matambre de cerdo",
            precio:19100,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/matambre-cerdo.webp",
            destacado:false
        },

        {
            id:24,
            nombre:"Panceta ahumada / salada",
            precio:19500,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/panceta.webp",
            destacado:false
        },

        {
            id:25,
            nombre:"Lomitos condimentados",
            precio:19500,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/lomitos.webp",
            destacado:false
        },

        {
            id:26,
            nombre:"Chorizo colorado",
            precio:19800,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/chorizo-colorado.webp",
            destacado:false
        }
    ]
},

/*==================================================
                    VACUNO
==================================================*/

{

    id:"vacuno",

    nombre:"Vacuno",

    productos:[

        {
            id:27,
            nombre:"Milanesas de peceto",
            precio:29600,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/milanesa-peceto.webp",
            destacado:false
        },

        {
            id:28,
            nombre:"Milanesas de nalga",
            precio:27900,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/milanesa-nalga.webp",
            destacado:false
        },

        {
            id:29,
            nombre:"Bife de chorizo",
            precio:30800,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/bife-chorizo.webp",
            destacado:false
        },

        {
            id:30,
            nombre:"Colita de cuadril",
            precio:27900,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/colita-cuadril.webp",
            destacado:false
        },

        {
            id:31,
            nombre:"Lomo",
            precio:null,
            unidad:"kg",
            consultar:true,
            imagen:"img/productos/lomo.webp",
            destacado:false
        },

        {
            id:32,
            nombre:"Vacío",
            precio:24900,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/vacio.webp",
            destacado:true
        }

    ]

},

/*==================================================
                    HUEVOS
==================================================*/

{

    id:"huevos",

    nombre:"Huevos",

    productos:[

        {
            id:33,
            nombre:"1/2 docena blancos",
            precio:3000,
            unidad:"unidad",
            consultar:false,
            imagen:"img/productos/huevos-media-docena.webp",
            destacado:false
        },

        {
            id:34,
            nombre:"1 docena blancos",
            precio:4200,
            unidad:"unidad",
            consultar:false,
            imagen:"img/productos/huevos-docena.webp",
            destacado:false
        },

        {
            id:35,
            nombre:"Maple blancos",
            precio:8000,
            unidad:"unidad",
            consultar:false,
            imagen:"img/productos/maple.webp",
            destacado:true
        },

        {
            id:36,
            nombre:"1/2 docena colorados de campo",
            precio:null,
            unidad:"unidad",
            consultar:true,
            imagen:"img/productos/colorados-media.webp",
            destacado:false
        },

        {
            id:37,
            nombre:"1 docena colorados de campo",
            precio:null,
            unidad:"unidad",
            consultar:true,
            imagen:"img/productos/colorados-docena.webp",
            destacado:false
        },

        {
            id:38,
            nombre:"Maple colorados de campo",
            precio:null,
            unidad:"unidad",
            consultar:true,
            imagen:"img/productos/colorados-maple.webp",
            destacado:false
        }

    ]

},

/*==================================================
                CONGELADOS
==================================================*/

{

    id:"congelados",

    nombre:"Congelados",

    productos:[

        {
            id:39,
            nombre:"Filet de merluza (apanado / sin apanar)",
            precio:15900,
            unidad:"kg",
            consultar:false,
            imagen:"img/productos/filet-merluza.webp",
            destacado:true
        },

        {
            id:40,
            nombre:"Albondigas de carne / Pulpetas",
            precio:null,
            unidad:"500 gr",
            consultar:true,
            imagen:"img/productos/albondigas.webp",
            destacado:false
        },

        {
            id:41,
            nombre:"Aros de cebolla McCain",
            precio:9900,
            unidad:"500 gr",
            consultar:false,
            imagen:"img/productos/aros-cebolla.webp",
            destacado:false
        },

        {
            id:42,
            nombre:"Bastones de mozzarella",
            precio:null,
            unidad:"500 gr",
            consultar:true,
            imagen:"img/productos/bastones-mozzarella.webp",
            destacado:false
        },

        {
            id:43,
            nombre:"Bastones de mozzarella caseros",
            precio:9000,
            unidad:"500 gr",
            consultar:false,
            imagen:"img/productos/bastones-mozzarella-caseros.webp",
            destacado:false
        },

        {
            id:44,
            nombre:"Bocaditos de calabaza",
            precio:5800,
            unidad:"500 gr",
            consultar:false,
            imagen:"img/productos/bocaditos-calabaza.webp",
            destacado:false
        },

        {
            id:45,
            nombre:"Bocaditos de espinaca y queso McCain",
            precio:9800,
            unidad:"500 gr",
            consultar:false,
            imagen:"img/productos/bocaditos-espinaca.webp",
            destacado:false
        },

        {
            id:46,
            nombre:"Croquetas de brócoli",
            precio:9400,
            unidad:"500 gr",
            consultar:false,
            imagen:"img/productos/croquetas-brocoli.webp",
            destacado:false
        },

        {
            id:47,
            nombre:"Fingers crispy caseros",
            precio:9700,
            unidad:"500 gr",
            consultar:false,
            imagen:"img/productos/fingers-caseros.webp",
            destacado:true
        },

        {
            id:48,
            nombre:"Fingers crispy Sadia",
            precio:9700,
            unidad:"500 gr",
            consultar:false,
            imagen:"img/productos/fingers-sadia.webp",
            destacado:false
        },

        {
            id:49,
            nombre:"Nuggets crispy",
            precio:6700,
            unidad:"500 gr",
            consultar:false,
            imagen:"img/productos/nuggets.webp",
            destacado:true
        },

        {
            id:50,
            nombre:"Papas fritas bastón McCain",
            precio:5100,
            unidad:"500 gr",
            consultar:false,
            imagen:"img/productos/papas-baston.webp",
            destacado:false
        },

        {
            id:51,
            nombre:"Papas noisette McCain",
            precio:7000,
            unidad:"500 gr",
            consultar:false,
            imagen:"img/productos/noisette.webp",
            destacado:false
        },

        {
            id:52,
            nombre:"Papas Smile McCain",
            precio:7000,
            unidad:"500 gr",
            consultar:false,
            imagen:"img/productos/smile.webp",
            destacado:false
        },

        {
            id:53,
            nombre:"Patitas de pollo",
            precio:5400,
            unidad:"500 gr",
            consultar:false,
            imagen:"img/productos/patitas.webp",
            destacado:false
        },

        {
            id:54,
            nombre:"Ricosaurios",
            precio:8500,
            unidad:"500 gr",
            consultar:false,
            imagen:"img/productos/ricosaurios.webp",
            destacado:false
        },

        {
            id:55,
            nombre:"Alitas rebozadas precocidas",
            precio:7900,
            unidad:"500 gr",
            consultar:false,
            imagen:"img/productos/alitas-rebozadas.webp",
            destacado:false
        }

    ]

},

/*==================================================
            HAMBURGUESAS Y MEDALLONES
==================================================*/

{

    id:"hamburguesas",

    nombre:"Hamburguesas y Medallones",

    productos:[

        {
            id:56,
            nombre:"Hamburguesa clásica",
            precio:6300,
            unidad:"4 unidades",
            consultar:false,
            imagen:"img/productos/hamburguesa-clasica.webp",
            destacado:true
        },

        {
            id:57,
            nombre:"Hamburguesa con morrón",
            precio:6300,
            unidad:"4 unidades",
            consultar:false,
            imagen:"img/productos/hamburguesa-morron.webp"
        },

        {
            id:58,
            nombre:"Hamburguesa con verdeo",
            precio:6300,
            unidad:"4 unidades",
            consultar:false,
            imagen:"img/productos/hamburguesa-verdeo.webp"
        },

        {
            id:59,
            nombre:"Hamburguesa con espinaca",
            precio:6300,
            unidad:"4 unidades",
            consultar:false,
            imagen:"img/productos/hamburguesa-espinaca.webp"
        },

        {
            id:60,
            nombre:"Hamburguesa con remolacha",
            precio:6300,
            unidad:"4 unidades",
            consultar:false,
            imagen:"img/productos/hamburguesa-remolacha.webp"
        },

        {
            id:61,
            nombre:"Medallón de pollo",
            precio:6000,
            unidad:"4 unidades",
            consultar:false,
            imagen:"img/productos/medallon-pollo.webp"
        },

        {
            id:62,
            nombre:"Medallón de brócoli y queso",
            precio:6000,
            unidad:"4 unidades",
            consultar:false,
            imagen:"img/productos/medallon-brocoli.webp"
        },

        {
            id:63,
            nombre:"Medallón de merluza, espinaca y queso",
            precio:6000,
            unidad:"4 unidades",
            consultar:false,
            imagen:"img/productos/medallon-merluza.webp"
        },

        {
            id:64,
            nombre:"Medallón de pollo con jamón y queso",
            precio:6000,
            unidad:"4 unidades",
            consultar:false,
            imagen:"img/productos/medallon-jamon.webp"
        },

        {
            id:65,
            nombre:"Medallón de pollo y espinaca",
            precio:6000,
            unidad:"4 unidades",
            consultar:false,
            imagen:"img/productos/medallon-espinaca.webp"
        },

        {
            id:66,
            nombre:"Hamburguesas saludables de pechuga",
            precio:8400,
            unidad:"4 unidades",
            consultar:false,
            imagen:"img/productos/hamburguesa-saludable.webp",
            destacado:true
        },

        {
            id:67,
            nombre:"Salchichas saludables de pechuga",
            precio:6500,
            unidad:"4 unidades",
            consultar:false,
            imagen:"img/productos/salchichas-saludables.webp"
        }

    ]

},

/*==================================================
            EMPANADAS Y TARTAS
==================================================*/

{

    id:"horno",

    nombre:"Empanadas y Tartas",

    productos:[

        {
            id:68,
            nombre:"Empanadas horno de barro",
            precio:15900,
            unidad:"6 unidades",
            consultar:false,
            imagen:"img/productos/empanadas.webp",
            destacado:true
        },

        {
            id:69,
            nombre:"Tartas horno de barro",
            precio:7000,
            unidad:"unidad",
            consultar:false,
            imagen:"img/productos/tartas.webp"
        }

    ]

},

/*==================================================
            VERDURAS CONGELADAS
==================================================*/

{

    id:"verduras",

    nombre:"Verduras Congeladas",

    productos:[

        { id:70,nombre:"Arvejas",precio:8700,unidad:"1 kg",consultar:false,imagen:"img/productos/arvejas.webp"},
        { id:71,nombre:"Brócoli",precio:11600,unidad:"1 kg",consultar:false,imagen:"img/productos/brocoli.webp"},
        { id:72,nombre:"Cebolla",precio:7600,unidad:"1 kg",consultar:false,imagen:"img/productos/cebolla.webp"},
        { id:73,nombre:"Champignon",precio:9200,unidad:"750 gr",consultar:false,imagen:"img/productos/champignon.webp"},
        { id:74,nombre:"Chaucha",precio:7600,unidad:"1 kg",consultar:false,imagen:"img/productos/chaucha.webp"},
        { id:75,nombre:"Choclo",precio:9700,unidad:"1 kg",consultar:false,imagen:"img/productos/choclo.webp"},
        { id:76,nombre:"Coliflor",precio:6500,unidad:"750 gr",consultar:false,imagen:"img/productos/coliflor.webp"},
        { id:77,nombre:"Espinaca",precio:7500,unidad:"1 kg",consultar:false,imagen:"img/productos/espinaca.webp"},
        { id:78,nombre:"Jardinera",precio:7700,unidad:"1 kg",consultar:false,imagen:"img/productos/jardinera.webp"},
        { id:79,nombre:"Mix Primavera",precio:7700,unidad:"1 kg",consultar:false,imagen:"img/productos/mix-primavera.webp"},
        { id:80,nombre:"Morrón",precio:11600,unidad:"1 kg",consultar:false,imagen:"img/productos/morron.webp"},
        { id:81,nombre:"Palta puré",precio:19900,unidad:"1 kg",consultar:false,imagen:"img/productos/palta.webp"},
        { id:82,nombre:"Zapallo",precio:6900,unidad:"1 kg",consultar:false,imagen:"img/productos/zapallo.webp"},
        { id:83,nombre:"Zucchini",precio:7500,unidad:"1 kg",consultar:false,imagen:"img/productos/zucchini.webp"}

    ]

},

/*==================================================
                    SALSAS
==================================================*/

{

    id:"salsas",

    nombre:"Salsas",

    productos:[

        {id:84,nombre:"Salsa de soja",precio:4900,unidad:"unidad",consultar:false,imagen:"img/productos/soja.webp"},
        {id:85,nombre:"Mostaza dulce",precio:4900,unidad:"unidad",consultar:false,imagen:"img/productos/mostaza.webp"},
        {id:86,nombre:"Barbacoa",precio:4900,unidad:"unidad",consultar:false,imagen:"img/productos/barbacoa.webp"},
        {id:87,nombre:"Cheddar",precio:4900,unidad:"unidad",consultar:false,imagen:"img/productos/cheddar.webp"},
        {id:88,nombre:"Alioli",precio:4900,unidad:"unidad",consultar:false,imagen:"img/productos/alioli.webp"},
        {id:89,nombre:"Teriyaki",precio:4900,unidad:"unidad",consultar:false,imagen:"img/productos/teriyaki.webp"},
        {id:90,nombre:"Mayonesa picante",precio:4900,unidad:"unidad",consultar:false,imagen:"img/productos/mayo-picante.webp"},
        {id:91,nombre:"Caesar",precio:4900,unidad:"unidad",consultar:false,imagen:"img/productos/caesar.webp"},
        {id:92,nombre:"Caesar Light",precio:4900,unidad:"unidad",consultar:false,imagen:"img/productos/caesar-light.webp"},
        {id:93,nombre:"Coleslaw",precio:4900,unidad:"unidad",consultar:false,imagen:"img/productos/coleslaw.webp"},
        {id:94,nombre:"Chimichurri",precio:4900,unidad:"unidad",consultar:false,imagen:"img/productos/chimichurri.webp"}

    ]

},

/*==================================================
                DELICATESSEN
==================================================*/

{

    id:"delicatessen",

    nombre:"Delicatessen",

    productos:[

        {id:95,nombre:"Ajo picado en aceite",precio:5200,unidad:"unidad",consultar:false,imagen:"img/productos/ajo-aceite.webp"},
        {id:96,nombre:"Ajo picado al limón",precio:5200,unidad:"unidad",consultar:false,imagen:"img/productos/ajo-limon.webp"},
        {id:97,nombre:"Ajo picado picante",precio:5200,unidad:"unidad",consultar:false,imagen:"img/productos/ajo-picante.webp"},
        {id:98,nombre:"Pasta de ajo con pimienta",precio:5200,unidad:"unidad",consultar:false,imagen:"img/productos/pasta-ajo.webp"},
        {id:99,nombre:"Sal de campo carnes rojas",precio:4500,unidad:"unidad",consultar:false,imagen:"img/productos/sal-carnes.webp"},
        {id:100,nombre:"Sal de campo pollo",precio:4500,unidad:"unidad",consultar:false,imagen:"img/productos/sal-pollo.webp"},
        {id:101,nombre:"Bolsa para horno Criollo",precio:3500,unidad:"unidad",consultar:false,imagen:"img/productos/bolsa-criollo.webp"},
        {id:102,nombre:"Bolsa para horno Finas Hierbas",precio:3500,unidad:"unidad",consultar:false,imagen:"img/productos/bolsa-hierbas.webp"},
        {id:103,nombre:"Bolsa para horno Mostaza",precio:3500,unidad:"unidad",consultar:false,imagen:"img/productos/bolsa-mostaza.webp"},
        {id:104,nombre:"Bolsa para horno Limón y Tomillo",precio:3500,unidad:"unidad",consultar:false,imagen:"img/productos/bolsa-limon.webp"},
        {id:105,nombre:"Bolsa para horno Barbacoa",precio:3500,unidad:"unidad",consultar:false,imagen:"img/productos/bolsa-barbacoa.webp"},
        {id:106,nombre:"Bolsa para horno Mexicana",precio:3500,unidad:"unidad",consultar:false,imagen:"img/productos/bolsa-mexicana.webp"},
        {id:107,nombre:"Aceite de oliva 1 litro",precio:null,unidad:"unidad",consultar:true,imagen:"img/productos/aceite1.webp"},
        {id:108,nombre:"Aceite de oliva 2 litros",precio:18000,unidad:"unidad",consultar:false,imagen:"img/productos/aceite2.webp"},
        {id:109,nombre:"Molinillos de especias",precio:7900,unidad:"unidad",consultar:false,imagen:"img/productos/molinillos.webp"}

    ]

},

/*==================================================
                    PROMOCIONES
==================================================*/

{

    id:"promociones",

    nombre:"Promociones",

    productos:[

        {
            id:110,
            nombre:"2 kg Milanesas de pechuga clásicas",
            precio:27000,
            unidad:"promo",
            consultar:false,
            imagen:"img/promos/milanesas-2kg.webp",
            destacado:true
        },

        {
            id:111,
            nombre:"16 Hamburguesas de pollo",
            descripcion:"Sabores a elección",
            precio:20000,
            unidad:"promo",
            consultar:false,
            imagen:"img/promos/hamburguesas16.webp"
        },

        {
            id:112,
            nombre:"2 kg Filet de merluza",
            precio:27000,
            unidad:"promo",
            consultar:false,
            imagen:"img/promos/merluza2kg.webp"
        },

        {
            id:113,
            nombre:"3 kg Alitas con muslo",
            precio:5000,
            unidad:"promo",
            consultar:false,
            imagen:"img/promos/alitas3kg.webp"
        },

        {
            id:114,
            nombre:"3 kg Pata Muslo",
            precio:15600,
            unidad:"promo",
            consultar:false,
            imagen:"img/promos/patamuslo3.webp"
        },

        {
            id:115,
            nombre:"5 kg Pata Muslo",
            precio:23000,
            unidad:"promo",
            consultar:false,
            imagen:"img/promos/patamuslo5.webp"
        },

        {
            id:116,
            nombre:"10 kg Pata Muslo",
            precio:39900,
            unidad:"promo",
            consultar:false,
            imagen:"img/promos/patamuslo10.webp"
        }

    ]

},

/*==================================================
                    COMBOS
==================================================*/

{

    id:"combos",

    nombre:"Combos",

    productos:[

        {

            id:117,

            nombre:"Combo 1",

            precio:null,

            consultar:true,

            unidad:"combo",

            imagen:"img/combos/combo1.webp",

            contenido:[

                "1 kg Pechuga",

                "2 kg Milanesas de pechuga",

                "3 kg Pata muslo"

            ]

        },

        {

            id:118,

            nombre:"Combo 2",

            precio:35800,

            consultar:false,

            unidad:"combo",

            imagen:"img/combos/combo2.webp",

            contenido:[

                "16 Hamburguesas",

                "1 kg Papas bastón"

            ]

        },

        {

            id:119,

            nombre:"Combo 3",

            precio:58500,

            consultar:false,

            unidad:"combo",

            imagen:"img/combos/combo3.webp",

            contenido:[

                "2 kg Milanesas de pechuga clásica"

            ]

        },

        {

            id:120,

            nombre:"Combo 4",

            precio:44200,

            consultar:false,

            unidad:"combo",

            imagen:"img/combos/combo4.webp",

            contenido:[

                "1 kg Milanesas mix semillas",

                "1 kg Papas tradicionales",

                "1 kg Papas noisette"

            ]

        },

        {

            id:121,

            nombre:"Combo 5",

            precio:54100,

            consultar:false,

            unidad:"combo",

            imagen:"img/combos/combo5.webp",

            contenido:[

                "2 kg Nuggets",

                "1 kg Papas",

                "1 Salsa"

            ]

        },

        {

            id:122,

            nombre:"Combo 6",

            precio:65600,

            consultar:false,

            unidad:"combo",

            imagen:"img/combos/combo6.webp",

            contenido:[

                "3 kg Pata muslo",

                "1 kg Filet de merluza"

            ]

        },

        {

            id:123,

            nombre:"Combo Picada",

            precio:41900,

            consultar:false,

            unidad:"combo",

            imagen:"img/combos/picada.webp",

            contenido:[

                "500 g Bastones mozzarella"

            ]

        },

        {

            id:124,

            nombre:"Combo Fitness",

            precio:67300,

            consultar:false,

            unidad:"combo",

            imagen:"img/combos/fitness.webp",

            contenido:[

                "2 kg Pechuga",

                "1 kg Filet de merluza",

                "1 kg Brócoli",

                "1 Maple huevos",

                "1 Salsa"

            ]

        },

        {

            id:125,

            nombre:"Combo de la Casa",

            precio:128200,

            consultar:false,

            unidad:"combo",

            imagen:"img/combos/casa.webp",

            contenido:[

                "2 kg Pechuga",

                "2 kg Milanesas pechuga",

                "2 kg Merluza",

                "2 kg Nuggets"

            ]

        }

    ]

}



];
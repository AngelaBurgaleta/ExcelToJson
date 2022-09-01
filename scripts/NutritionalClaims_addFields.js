//AÑADIR TODOS LOS CAMPOS
//round redondeo de ser necesario con energia, aplicable a otros campos
db.test.updateMany({ }, [{$set: {Energy: {$round: ['$Energy', 2]}}}])
db.test.updateMany({ }, [{$set: {Energykj: {$round: ['$Energykj', 2]}}}])


//Propiedades genericas 6 (tuplas meno sodium)
db.test.updateMany({ }, [{$addFields: { LowEnergy: false}}])
db.test.updateMany({ }, [{$addFields: { EnergyFree: false}}])

db.test.updateMany({ }, [{$addFields: { LowFat: false}}])
db.test.updateMany({ }, [{$addFields: { FatFree: false}}])

db.test.updateMany({ }, [{$addFields: { LowSaturatedFat: false}}])
db.test.updateMany({ }, [{$addFields: { SaturatedFatFree: false}}])

db.test.updateMany({ }, [{$addFields: { LowSugars: false}}])
db.test.updateMany({ }, [{$addFields: { SugarsFree: false}}])

db.test.updateMany({ }, [{$addFields: { LowSodium: false}}])
db.test.updateMany({ }, [{$addFields: { VeryLowSodium: false}}])
db.test.updateMany({ }, [{$addFields: { SodiumFree: false}}])

db.test.updateMany({ }, [{$addFields: { HighFibre: false}}])
db.test.updateMany({ }, [{$addFields: { SourceFibre: false}}])

//Valores dependientes de la energia 5
db.test.updateMany({ }, [{$addFields: { SourceProtein: false}}])
db.test.updateMany({ }, [{$addFields: { HighProtein: false}}])

db.test.updateMany({ }, [{$addFields: { HighMonounsaturatedFat: false}}])

db.test.updateMany({ }, [{$addFields: { HighPolyunsaturatedFat: false}}])

db.test.updateMany({ }, [{$addFields: { HighUnsaturatedFat: false}}])
//

//Nutritionalclaims vitaminas y minerales, valores RDA 24 pares
db.test.updateMany({ }, [{$addFields: { SourceA: false}}])
db.test.updateMany({ }, [{$addFields: { HighA: false}}])


db.test.updateMany({ }, [{$addFields: { SourceD: false}}])
db.test.updateMany({ }, [{$addFields: { HighD: false}}])

db.test.updateMany({ }, [{$addFields: { SourceE: false}}])
db.test.updateMany({ }, [{$addFields: { HighE: false}}])

db.test.updateMany({ }, [{$addFields: { SourceK: false}}])
db.test.updateMany({ }, [{$addFields: { HighK: false}}])


db.test.updateMany({ }, [{$addFields: { SourceC: false}}])
db.test.updateMany({ }, [{$addFields: { HighC: false}}])

db.test.updateMany({ }, [{$addFields: { SourceB2: false}}])
db.test.updateMany({ }, [{$addFields: { HighB2: false}}])

db.test.updateMany({ }, [{$addFields: { SourceB3: false}}])
db.test.updateMany({ }, [{$addFields: { HighB3: false}}])

db.test.updateMany({ }, [{$addFields: { SourceB6: false}}])
db.test.updateMany({ }, [{$addFields: { HighB6: false}}])

//esta es la B9
db.test.updateMany({ }, [{$addFields: { SourceFolicAcid: false}}])
db.test.updateMany({ }, [{$addFields: { HighFolicAcid: false}}])

db.test.updateMany({ }, [{$addFields: { SourceB12: false}}])
db.test.updateMany({ }, [{$addFields: { HighB12: false}}])

//esta es B8
db.test.updateMany({ }, [{$addFields: { SourceBiotoin: false}}])
db.test.updateMany({ }, [{$addFields: { HighBiotin: false}}])


db.test.updateMany({ }, [{$addFields: { SourceB5: false}}])
db.test.updateMany({ }, [{$addFields: { HighB5: false}}])

//Esta es B1
db.test.updateMany({ }, [{$addFields: { SourceThiamin: false}}])
db.test.updateMany({ }, [{$addFields: { HighThiamin: false}}])
//

db.test.updateMany({ }, [{$addFields: { SourcePotassium: false}}])
db.test.updateMany({ }, [{$addFields: { HighPotassium: false}}])

db.test.updateMany({ }, [{$addFields: { SourceCalcium: false}}])
db.test.updateMany({ }, [{$addFields: { HighCalcium: false}}])

db.test.updateMany({ }, [{$addFields: { SourcePhosphorus: false}}])
db.test.updateMany({ }, [{$addFields: { HighPhosphorus: false}}])


db.test.updateMany({ }, [{$addFields: { SourceMagnesium: false}}])
db.test.updateMany({ }, [{$addFields: { HighMagnesium: false}}])

db.test.updateMany({ }, [{$addFields: { SourceIron: false}}])
db.test.updateMany({ }, [{$addFields: { HighIron: false}}])

db.test.updateMany({ }, [{$addFields: { SourceZinc: false}}])
db.test.updateMany({ }, [{$addFields: { HighZinc: false}}])

db.test.updateMany({ }, [{$addFields: { SourceCopper: false}}])
db.test.updateMany({ }, [{$addFields: { HighCopper: false}}])

db.test.updateMany({ }, [{$addFields: { SourceManganese: false}}])
db.test.updateMany({ }, [{$addFields: { HighManganese: false}}])

db.test.updateMany({ }, [{$addFields: { SourceFluorine: false}}])
db.test.updateMany({ }, [{$addFields: { HighFluorine: false}}])

db.test.updateMany({ }, [{$addFields: { SourceSelenium: false}}])
db.test.updateMany({ }, [{$addFields: { HighSelenium: false}}])

db.test.updateMany({ }, [{$addFields: { SourceIodine: false}}])
db.test.updateMany({ }, [{$addFields: { HighIodine: false}}])



//QUERY PROPIEDADES DEPENDIENTES DE LAS CALORIAS 
//añadir campos auxiliares
db.food1.updateMany({ }, [{$addFields: { ProteEnergy: {$divide: ['$TotalProteins', '$Energy']}}}])
db.food1.updateMany({ }, [{$addFields: { MonoEnergy: {$divide: ['$MonounsaturatedFattyAcids', '$Energy']}}}])
db.food1.updateMany({ }, [{$addFields: { PolyEnergy: {$divide: ['$PolyunsaturatedFattyAcids', '$Energy']}}}])
db.food1.updateMany({ }, [{$addFields: { UnEnergy: {$divide: ['$UnsaturatedFattyAcids', '$Energy']}}}])

//query
db.food1.updateMany({$and: [{ProteEnergy:{$lte:0.2}}, {ProteEnergy:{$gt:0.12}}]}, [{$set: {SourceProtein: true}}])
db.food1.updateMany({ProteEnergy:{$gt:0.2}}, [{$set: {HighProtein: true}}])

db.food1.updateMany({MonoEnergy:{$gt:0.2}}, [{$set: {HighMonounsaturatedFat: true}}])
db.food1.updateMany({PolyEnergy:{$gt:0.2}}, [{$set: {HighPolyunsaturatedFat: true}}])
db.food1.updateMany({UnEnergy:{$gt:0.2}}, [{$set: {HighUnsaturatedFat: true}}])

//eliminar campos auxiliares
db.food1.updateMany({}, {$unset: {ProteEnergy: 1}})
db.food1.updateMany({}, {$unset: {MonoEnergy: 1}})
db.food1.updateMany({}, {$unset: {PolyEnergy: 1}})
db.food1.updateMany({}, {$unset: {UnEnergy: 1}})

//PROPIEDADES GENERICAS QUERY 6
db.test.updateMany({$and: [{Energy:{$lt:40}}, {Energy:{$gt:4}}]}, [{$set: {LowEnergy: true}}])
db.test.updateMany({Energy: {$lte: 4}}, [{$set: {EnergyFree: true}}])

db.test.updateMany({$and: [{TotalLipids:{$lt:3}}, {TotalLipids:{$gt:0.5}}]}, [{$set: {LowFat: true}}])
db.test.updateMany({TotalLipids: {$lte: 0.5}}, [{$set: {FatFree: true}}])

db.test.updateMany({$and: [{SaturatedFat:{$lt:1.5}}, {SaturatedFat:{$gt:0.1}}]}, [{$set: {LowSaturatedFat: true}}])
db.test.updateMany({SaturatedFat: {$lte: 0.1}}, [{$set: {SaturatedFatFree: true}}])

db.test.updateMany({$and: [{TotalSugars:{$lt:5}}, {TotalSugars:{$gt:0.5}}]}, [{$set: {LowSugars: true}}])
db.test.updateMany({TotalSugars: {$lte: 0.5}}, [{$set: {SugarsFree: true}}])

db.test.updateMany({$and: [{Sodium:{$lt:120}}, {Sodium:{$gt:0.5}}]}, [{$set: {LowSodium: true}}])
db.test.updateMany({$and: [{Sodium:{$lte:40}}, {Sodium:{$gt:5}}]}, [{$set: {VeryLowSodium: true}}])
db.test.updateMany({Sodium: {$lte: 5}}, [{$set: {SodiumFree: true}}])

db.test.updateMany({$and: [{Fibre:{$lte:6}}, {Fibre:{$gt:3}}]}, [{$set: {SourceFibre: true}}])
db.test.updateMany({Fibre: {$gt: 6}}, [{$set: {HighFibre: true}}])


//PROPIEDADES COMPARADAS CON RDA

//SIEMPRE .15 A .3
db.test.updateMany({$and: [{A:{$gt:120}}, {A:{$lte:240}}]}, [{$set: {SourceA: true}}])
db.test.updateMany({A: {$gt: 240}}, [{$set: {HighA: true}}])

db.test.updateMany({$and: [{D:{$gt:0.75}}, {D:{$lte:1.5}}]}, [{$set: {SourceD: true}}])
db.test.updateMany({D: {$gt: 1.5}}, [{$set: {HighD: true}}])


db.test.updateMany({$and: [{E:{$gt:1.8}}, {E:{$lte:3.6}}]}, [{$set: {SourceE: true}}])
db.test.updateMany({E: {$gt: 3.6}}, [{$set: {HighE: true}}])


db.test.updateMany({$and: [{K:{$gt:11.25}}, {K:{$lte:22.5}}]}, [{$set: {SourceK: true}}])
db.test.updateMany({K: {$gt: 22.5}}, [{$set: {HighK: true}}])

db.test.updateMany({$and: [{C:{$gt:12}}, {C:{$lte:24}}]}, [{$set: {SourceC: true}}])
db.test.updateMany({C: {$gt: 24}}, [{$set: {HighC: true}}])

db.test.updateMany({$and: [{B2:{$gt:0.21}}, {B2:{$lte:0.42}}]}, [{$set: {SourceB2: true}}])
db.test.updateMany({B2: {$gt: 0.42}}, [{$set: {HighB2: true}}])

//voy por aqui en valores numericos
db.test.updateMany({$and: [{B3:{$gt:2.4}}, {B3:{$lte:4.8}}]}, [{$set: {SourceB3: true}}])
db.test.updateMany({B3: {$gt: 4.8}}, [{$set: {HighB3: true}}])

db.test.updateMany({$and: [{B6:{$gt:0.21}}, {B6:{$lte:0.42}}]}, [{$set: {SourceB6: true}}])
db.test.updateMany({B6: {$gt: 0.42}}, [{$set: {HighB6: true}}])

//B9 es high folic acid
db.test.updateMany({$and: [{B9:{$gt:30}}, {B9:{$lte:60}}]}, [{$set: {SourceFolicAcid: true}}])
db.test.updateMany({B9: {$gt: 60}}, [{$set: {HighFolicAcid: true}}])
//

db.test.updateMany({$and: [{B12:{$gt:0.375}}, {B12:{$lte:0.75}}]}, [{$set: {SourceB12: true}}])
db.test.updateMany({B12: {$gt: 0.75}}, [{$set: {HighB12: true}}])


db.test.updateMany({$and: [{B8:{$gt:15}}, {B8:{$lte:30}}]}, [{$set: {SourceBiotoin: true}}])
db.test.updateMany({B8: {$gt: 30}}, [{$set: {HighBiotin: true}}])

db.test.updateMany({$and: [{B5:{$gt:0.9}}, {B5:{$lte:1.8}}]}, [{$set: {SourceB5: true}}])
db.test.updateMany({B5: {$gt: 1.8}}, [{$set: {HighB5: true}}])

db.test.updateMany({$and: [{B1:{$gt:0.165}}, {B1:{$lte:0.33}}]}, [{$set: {SourceThiamin: true}}])
db.test.updateMany({B1: {$gt: 0.33}}, [{$set: {HighThiamin: true}}])

db.test.updateMany({$and: [{Potassium:{$gt:300}}, {Potassium:{$lte:600}}]}, [{$set: {SourcePotassium: true}}])
db.test.updateMany({Potassium: {$gt: 600}}, [{$set: {HighPotassium: true}}])

db.test.updateMany({$and: [{Calcium:{$gt:120}}, {Calcium:{$lte:240}}]}, [{$set: {SourceCalcium: true}}])
db.test.updateMany({Calcium: {$gt: 240}}, [{$set: {HighCalcium: true}}])

db.test.updateMany({$and: [{Phosphorus:{$gt:105}}, {Phosphorus:{$lte:210}}]}, [{$set: {SourcePhosphorus: true}}])
db.test.updateMany({Phosphorus: {$gt: 210}}, [{$set: {HighPhosphorus: true}}])

db.test.updateMany({$and: [{Magnesium:{$gt:56.25}}, {Magnesium:{$lte:112.5}}]}, [{$set: {SourceMagnesium: true}}])
db.test.updateMany({Magnesium: {$gt: 112.5}}, [{$set: {HighMagnesium: true}}])

db.test.updateMany({$and: [{Iron:{$gt:2.1}}, {Iron:{$lte:4.2}}]}, [{$set: {SourceIron: true}}])
db.test.updateMany({Iron: {$gt: 4.2}}, [{$set: {HighIron: true}}])

db.test.updateMany({$and: [{Zinc:{$gt:1.5}}, {Zinc:{$lte:3}}]}, [{$set: {SourceZinc: true}}])
db.test.updateMany({Zinc: {$gt: 3}}, [{$set: {HighZinc: true}}])

db.test.updateMany({$and: [{Copper:{$gt:0.15}}, {Copper:{$lte:0.3}}]}, [{$set: {SourceCopper: true}}])
db.test.updateMany({Copper: {$gt: 0.3}}, [{$set: {HighCopper: true}}])


db.test.updateMany({$and: [{Manganese:{$gt:0.3}}, {Manganese:{$lte:0.6}}]}, [{$set: {SourceManganese: true}}])
db.test.updateMany({Manganese: {$gt: 0.6}}, [{$set: {HighManganese: true}}])


db.test.updateMany({$and: [{Fluorine:{$gt:0.525}}, {Fluorine:{$lte:1.05}}]}, [{$set: {SourceFluorine: true}}])
db.test.updateMany({Fluorine: {$gt: 1.05}}, [{$set: {HighFluorine: true}}])


db.test.updateMany({$and: [{Selenium:{$gt:8.25}}, {Selenium:{$lte:16.5}}]}, [{$set: {SourceSelenium: true}}])
db.test.updateMany({Selenium: {$gt: 16.5}}, [{$set: {HighSelenium: true}}])



db.test.updateMany({$and: [{Iodine:{$gt:22.5}}, {Iodine:{$lte:45}}]}, [{$set: {SourceIodine: true}}])
db.test.updateMany({Iodine: {$gt: 45}}, [{$set: {HighIodine: true}}])
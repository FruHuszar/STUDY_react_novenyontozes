export interface NovenyTipus {
  id: number;
  nev: string;
  latin: string;
  csalad: string;
  kornyezet: string;
  feny: string;
  leiras: string;
  viragzas: Date[];
  metszes: Date[];
  gyumolcs: Date[];
}

export type UjNoveny = Omit<NovenyTipus, "id">;

export const novenylista: NovenyTipus[] = [
  {
    id: 1,
    nev: "Eigia",
    latin: "Eigia longistyla",
    csalad: "Káposztafélék (Brassicaceae)",
    kornyezet: "Száraz, sziklás, mediterrán jellegű talaj",
    feny: "Teljes napfény",
    leiras:
      "Kelet-mediterrán elterjedésű, ritka virágos növényfaj, hosszú termővel.",
    viragzas: [new Date("2026-03-15"), new Date("2026-05-10")],
    metszes: [],
    gyumolcs: [],
  },
  {
    id: 2,
    nev: "Kerti bazsarózsa",
    latin: "Paeonia lactiflora",
    csalad: "Paszkorózsafélék (Paeoniaceae)",
    kornyezet: "Mély rétegű, tápdús, jó vízáteresztő kerti talaj",
    feny: "Napos vagy félárnyékos hely",
    leiras:
      "Nagy, telt, pompás virágú évelő dísznövény, amely május-júniusban borul virágba.",
    viragzas: [new Date("2026-05-10"), new Date("2026-06-15")],
    metszes: [new Date("2026-10-20")],
    gyumolcs: [],
  },
  {
    id: 3,
    nev: "Illatos levendula",
    latin: "Lavandula angustifolia",
    csalad: "Ajkosvirágúak (Lamiaceae)",
    kornyezet: "Meszes, jó vízáteresztő, szárazabb talaj",
    feny: "Erős napfény, nyílt terület",
    leiras: "Örökzöld, intenzív illatú félcserje lila virágfürtökkel.",
    viragzas: [new Date("2026-06-01"), new Date("2026-07-31")],
    metszes: [new Date("2026-03-20"), new Date("2026-08-15")],
    gyumolcs: [],
  },
  {
    id: 4,
    nev: "Bugás lángvirág",
    latin: "Phlox paniculata",
    csalad: "Salátaboglárkafélék / Phlox család (Polemoniaceae)",
    kornyezet: "Humuszos, jó vízellátású, üde kerti talaj",
    feny: "Félárnyékos, de világos hely",
    leiras:
      "Klasszikus nyári évelő, amely gazdag, színes virágzatával díszíti a kerteket.",
    viragzas: [new Date("2026-07-01"), new Date("2026-09-10")],
    metszes: [new Date("2026-10-15")],
    gyumolcs: [],
  },
  {
    id: 5,
    nev: "Kerti málna",
    latin: "Rubus idaeus",
    csalad: "Rózsafélék (Rosaceae)",
    kornyezet: "Enyhén savanyú, humuszban gazdag, nedves talaj",
    feny: "Félárnyékos vagy napos hely",
    leiras:
      "Népszerű bogyós gyümölcsű cserje, amely finom, aromás piros terméseket hoz.",
    viragzas: [new Date("2026-05-10"), new Date("2026-06-10")],
    metszes: [new Date("2026-02-20"), new Date("2026-08-20")],
    gyumolcs: [new Date("2026-06-20"), new Date("2026-07-31")],
  },
  {
    id: 6,
    nev: "Nagyvirágú liliom",
    latin: "Lilium orientale",
    csalad: "Liliomfélék (Liliaceae)",
    kornyezet: "Jó vízáteresztő, laza, enyhén savanyú humusz",
    feny: "Félárnyékos, a virágzás alatt védett hely",
    leiras: "Impozáns, hatalmas, gyakran csodás illatú virágokat hozó hagyma.",
    viragzas: [new Date("2026-07-10"), new Date("2026-08-25")],
    metszes: [new Date("2026-10-01")],
    gyumolcs: [],
  },
  {
    id: 7,
    nev: "Kerti sarkantyúka",
    latin: "Tropaeolum majus",
    csalad: "Sarkantyúkafélék (Tropaeolaceae)",
    kornyezet: "Laza, nem túl tápdús talaj, közepes vízigény",
    feny: "Napos vagy félárnyékos hely",
    leiras:
      "Fekvő vagy futó szárú, élénk sárga és narancssárga virágú egynyári, melynek levele és virága is ehető.",
    viragzas: [new Date("2026-06-10"), new Date("2026-10-30")],
    metszes: [],
    gyumolcs: [],
  },
  {
    id: 8,
    nev: "Orvosi körömvirág",
    latin: "Calendula officinalis",
    csalad: "Fészkesvirágzatúak (Asteraceae)",
    kornyezet: "Bármilyen átlagos kerti talaj, jó alkalmazkodóképesség",
    feny: "Napos hely",
    leiras:
      "Hosszan virágzó, sárga és narancsszínű, gyógyhatású virágairól ismert népszerű növény.",
    viragzas: [new Date("2026-05-01"), new Date("2026-10-31")],
    metszes: [],
    gyumolcs: [],
  },
];

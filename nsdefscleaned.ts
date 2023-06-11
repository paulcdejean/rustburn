
/** @public */
interface HP {
  current: number;
  max: number;
}
interface Skills {
  hacking: number;
  strength: number;
  defense: number;
  dexterity: number;
  agility: number;
  charisma: number;
  intelligence: number;
}
type CodingContractData = any;
type PortData = string | number;
type ScriptArg = string | number | boolean;
type FilenameOrPID = number | string;
interface Person {
  hp: HP;
  skills: Skills;
  exp: Skills;
  mults: Multipliers;
  city: CityName;
}
interface Player extends Person {
  money: number;
  numPeopleKilled: number;
  entropy: number;
  jobs: Record<string, string>;
  factions: string[];
  totalPlaytime: number;
  location: string;
}
interface SleevePerson extends Person {
  shock: number;
  sync: number;
  memory: number;
  storedCycles: number;
}
interface ResetInfo {
  lastAugReset: number;
  lastNodeReset: number;
  currentNode: number;
}
interface MoneySource {
  bladeburner: number;
  casino: number;
  class: number;
  codingcontract: number;
  corporation: number;
  crime: number;
  gang: number;
  hacking: number;
  hacknet: number;
  hacknet_expenses: number;
  hospitalization: number;
  infiltration: number;
  sleeves: number;
  stock: number;
  total: number;
  work: number;
  servers: number;
  other: number;
  augmentations: number;
}
interface MoneySources {
  sinceInstall: MoneySource;
  sinceStart: MoneySource;
}
interface Multipliers {
  hacking: number;
  strength: number;
  defense: number;
  dexterity: number;
  agility: number;
  charisma: number;
  hacking_exp: number;
  strength_exp: number;
  defense_exp: number;
  dexterity_exp: number;
  agility_exp: number;
  charisma_exp: number;
  hacking_chance: number;
  hacking_speed: number;
  hacking_money: number;
  hacking_grow: number;
  company_rep: number;
  faction_rep: number;
  crime_money: number;
  crime_success: number;
  work_money: number;
  hacknet_node_money: number;
  hacknet_node_purchase_cost: number;
  hacknet_node_ram_cost: number;
  hacknet_node_core_cost: number;
  hacknet_node_level_cost: number;
  bladeburner_max_stamina: number;
  bladeburner_stamina_gain: number;
  bladeburner_analysis: number;
  bladeburner_success_chance: number;
}
interface TailProperties {
  x: number;
  y: number;
  width: number;
  height: number;
}
interface RunningScript {
  args: (string | number | boolean)[];
  filename: string;
  logs: string[];
  offlineExpGained: number;
  offlineMoneyMade: number;
  offlineRunningTime: number;
  onlineExpGained: number;
  onlineMoneyMade: number;
  onlineRunningTime: number;
  pid: number;
  ramUsage: number;
  server: string;
  tailProperties: TailProperties | null;
  title: string;
  threads: number;
  temporary: boolean;
}
interface RunOptions {
  threads?: number;
  temporary?: boolean;
  ramOverride?: number;
  preventDuplicates?: boolean;
}
interface RecentScript extends RunningScript {
  timeOfDeath: Date;
}
interface CrimeStats {
  difficulty: number;
  karma: number;
  kills: number;
  money: number;
  time: number;
  type: string;
  hacking_success_weight: number;
  strength_success_weight: number;
  defense_success_weight: number;
  dexterity_success_weight: number;
  agility_success_weight: number;
  charisma_success_weight: number;
  hacking_exp: number;
  strength_exp: number;
  defense_exp: number;
  dexterity_exp: number;
  agility_exp: number;
  charisma_exp: number;
  intelligence_exp: number;
}
interface BasicHGWOptions {
  threads?: number;
  stock?: boolean;
  additionalMsec?: number;
}
interface AugmentPair {
  name: string;
  cost: number;
}
declare enum PositionTypes {
  Long = "L",
  Short = "S",
}
declare enum OrderTypes {
  LimitBuy = "Limit Buy Order",
  LimitSell = "Limit Sell Order",
  StopBuy = "Stop Buy Order",
  StopSell = "Stop Sell Order",
}
interface StockOrderObject {
  shares: number;
  price: number;
  type: OrderTypes;
  position: PositionTypes;
}
interface StockOrder {
  [key: string]: StockOrderObject[];
}
interface ProcessInfo {
  filename: string;
  threads: number;
  args: (string | number | boolean)[];
  pid: number;
  temporary: boolean;
}
interface HackingMultipliers {
  chance: number;
  speed: number;
  money: number;
  growth: number;
}
interface HacknetMultipliers {
  production: number;
  purchaseCost: number;
  ramCost: number;
  coreCost: number;
  levelCost: number;
}
interface HacknetNodeConstants {
  MoneyGainPerLevel: number;
  BaseCost: number;
  LevelBaseCost: number;
  RamBaseCost: number;
  CoreBaseCost: number;
  PurchaseNextMult: number;
  UpgradeLevelMult: number;
  UpgradeRamMult: number;
  UpgradeCoreMult: number;
  MaxLevel: number;
  MaxRam: number;
  MaxCores: number;
}
interface HacknetServerConstants {
  HashesPerLevel: number;
  BaseCost: number;
  RamBaseCost: number;
  CoreBaseCost: number;
  CacheBaseCost: number;
  PurchaseMult: number;
  UpgradeLevelMult: number;
  UpgradeRamMult: number;
  UpgradeCoreMult: number;
  UpgradeCacheMult: number;
  MaxServers: number;
  MaxLevel: number;
  MaxRam: number;
  MaxCores: number;
  MaxCache: number;
}
export interface Server {
  hostname: string;
  ip: string;
  sshPortOpen: boolean;
  ftpPortOpen: boolean;
  smtpPortOpen: boolean;
  httpPortOpen: boolean;
  sqlPortOpen: boolean;
  hasAdminRights: boolean;
  cpuCores: number;
  isConnectedTo: boolean;
  ramUsed: number;
  maxRam: number;
  organizationName: string;
  purchasedByPlayer: boolean;
  backdoorInstalled?: boolean;
  baseDifficulty?: number;
  hackDifficulty?: number;
  minDifficulty?: number;
  moneyAvailable?: number;
  moneyMax?: number;
  numOpenPortsRequired?: number;
  openPortCount?: number;
  requiredHackingSkill?: number;
  serverGrowth?: number;
}
interface BitNodeMultipliers {
  AgilityLevelMultiplier: number;
  AugmentationMoneyCost: number;
  AugmentationRepCost: number;
  BladeburnerRank: number;
  BladeburnerSkillCost: number;
  CharismaLevelMultiplier: number;
  ClassGymExpGain: number;
  CodingContractMoney: number;
  CompanyWorkExpGain: number;
  CompanyWorkMoney: number;
  CorporationSoftcap: number;
  CorporationValuation: number;
  CrimeExpGain: number;
  CrimeMoney: number;
  DaedalusAugsRequirement: number;
  DefenseLevelMultiplier: number;
  DexterityLevelMultiplier: number;
  FactionPassiveRepGain: number;
  FactionWorkExpGain: number;
  FactionWorkRepGain: number;
  FourSigmaMarketDataApiCost: number;
  FourSigmaMarketDataCost: number;
  GangSoftcap: number;
  HackExpGain: number;
  HackingLevelMultiplier: number;
  HacknetNodeMoney: number;
  HomeComputerRamCost: number;
  InfiltrationMoney: number;
  InfiltrationRep: number;
  ManualHackMoney: number;
  PurchasedServerCost: number;
  PurchasedServerLimit: number;
  PurchasedServerMaxRam: number;
  PurchasedServerSoftcap: number;
  RepToDonateToFaction: number;
  ScriptHackMoney: number;
  ScriptHackMoneyGain: number;
  ServerGrowthRate: number;
  ServerMaxMoney: number;
  ServerStartingMoney: number;
  ServerStartingSecurity: number;
  ServerWeakenRate: number;
  StrengthLevelMultiplier: number;
  StaneksGiftPowerMultiplier: number;
  StaneksGiftExtraSize: number;
  WorldDaemonDifficulty: number;
}
interface NodeStats {
  name: string;
  level: number;
  ram: number;
  ramUsed?: number;
  cores: number;
  cache?: number;
  hashCapacity?: number;
  production: number;
  timeOnline: number;
  totalProduction: number;
}
interface SourceFileLvl {
  n: number;
  lvl: number;
}
interface BladeburnerCurAction {
  type: string;
  name: string;
}
interface GangGenInfo {
  faction: string;
  isHacking: boolean;
  moneyGainRate: number;
  power: number;
  respect: number;
  respectGainRate: number;
  territory: number;
  territoryClashChance: number;
  wantedLevel: number;
  wantedLevelGainRate: number;
  territoryWarfareEngaged: boolean;
  wantedPenalty: number;
}
interface GangOtherInfoObject {
  power: number;
  territory: number;
}
interface GangOtherInfo {
  [key: string]: GangOtherInfoObject;
}
interface GangTaskStats {
  name: string;
  desc: string;
  isHacking: boolean;
  isCombat: boolean;
  baseRespect: number;
  baseWanted: number;
  baseMoney: number;
  hackWeight: number;
  strWeight: number;
  defWeight: number;
  dexWeight: number;
  agiWeight: number;
  chaWeight: number;
  difficulty: number;
  territory: GangTerritory;
}
interface EquipmentStats {
  str?: number;
  def?: number;
  dex?: number;
  agi?: number;
  cha?: number;
  hack?: number;
}
interface GangTerritory {
  money: number;
  respect: number;
  wanted: number;
}
interface GangMemberInfo {
  name: string;
  task: string;
  earnedRespect: number;
  hack: number;
  str: number;
  def: number;
  dex: number;
  agi: number;
  cha: number;
  hack_exp: number;
  str_exp: number;
  def_exp: number;
  dex_exp: number;
  agi_exp: number;
  cha_exp: number;
  hack_mult: number;
  str_mult: number;
  def_mult: number;
  dex_mult: number;
  agi_mult: number;
  cha_mult: number;
  hack_asc_mult: number;
  str_asc_mult: number;
  def_asc_mult: number;
  dex_asc_mult: number;
  agi_asc_mult: number;
  cha_asc_mult: number;
  hack_asc_points: number;
  str_asc_points: number;
  def_asc_points: number;
  dex_asc_points: number;
  agi_asc_points: number;
  cha_asc_points: number;

  upgrades: string[];
  augmentations: string[];

  respectGain: number;
  wantedLevelGain: number;
  moneyGain: number;
}
interface GangMemberAscension {
  respect: number;
  hack: number;
  str: number;
  def: number;
  dex: number;
  agi: number;
  cha: number;
}
type SleeveBladeburnerTask = {
  type: "BLADEBURNER";
  actionType: "General" | "Contracts";
  actionName: string;
  cyclesWorked: number;
  cyclesNeeded: number;
};
type SleeveClassTask = {
  type: "CLASS";
  classType: UniversityClassType | GymType;
  location: LocationName;
};
type SleeveCompanyTask = { type: "COMPANY"; companyName: string };
type SleeveCrimeTask = {
  type: "CRIME";
  crimeType: CrimeType;
  cyclesWorked: number;
  cyclesNeeded: number;
};
type SleeveFactionTask = {
  type: "FACTION";
  factionWorkType: FactionWorkType;
  factionName: string;
};
type SleeveInfiltrateTask = { type: "INFILTRATE"; cyclesWorked: number; cyclesNeeded: number };
type SleeveRecoveryTask = { type: "RECOVERY" };
type SleeveSupportTask = { type: "SUPPORT" };
type SleeveSynchroTask = { type: "SYNCHRO" };
export type SleeveTask =
  | SleeveBladeburnerTask
  | SleeveClassTask
  | SleeveCompanyTask
  | SleeveCrimeTask
  | SleeveFactionTask
  | SleeveInfiltrateTask
  | SleeveRecoveryTask
  | SleeveSupportTask
  | SleeveSynchroTask;
export interface NetscriptPort {
  write(value: string | number): PortData | null;
  tryWrite(value: string | number): boolean;
  nextWrite(): Promise<void>;
  read(): PortData;
  peek(): PortData;
  full(): boolean;
  empty(): boolean;
  clear(): void;
}
export interface TIX {
  hasWSEAccount(): boolean;
  hasTIXAPIAccess(): boolean;
  has4SData(): boolean;
  has4SDataTIXAPI(): boolean;
  getSymbols(): string[];
  getPrice(sym: string): number;
  getOrganization(sym: string): string;
  getAskPrice(sym: string): number;
  getBidPrice(sym: string): number;
  getPosition(sym: string): [number, number, number, number];
  getMaxShares(sym: string): number;
  getPurchaseCost(sym: string, shares: number, posType: string): number;
  getSaleGain(sym: string, shares: number, posType: string): number;
  buyStock(sym: string, shares: number): number;
  sellStock(sym: string, shares: number): number;
  buyShort(sym: string, shares: number): number;
  sellShort(sym: string, shares: number): number;
  placeOrder(sym: string, shares: number, price: number, type: string, pos: string): boolean;
  cancelOrder(sym: string, shares: number, price: number, type: string, pos: string): void;
  getOrders(): StockOrder;
  getVolatility(sym: string): number;
  getForecast(sym: string): number;
  purchase4SMarketData(): boolean;
  purchase4SMarketDataTixApi(): boolean;
  purchaseWseAccount(): boolean;
  purchaseTixApi(): boolean;
}

export interface CompanyPositionInfo {
  name: JobName;
  nextPosition: JobName | null;
  salary: number;
  requiredReputation: number;
  requiredSkills: Skills;
}
export interface Hacknet {
  numNodes(): number;
  maxNumNodes(): number;
  purchaseNode(): number;
  getPurchaseNodeCost(): number;
  getNodeStats(index: number): NodeStats;
  upgradeLevel(index: number, n?: number): boolean;
  upgradeRam(index: number, n?: number): boolean;
  upgradeCore(index: number, n?: number): boolean;
  upgradeCache(index: number, n?: number): boolean;
  getLevelUpgradeCost(index: number, n?: number): number;
  getRamUpgradeCost(index: number, n?: number): number;
  getCoreUpgradeCost(index: number, n?: number): number;
  getCacheUpgradeCost(index: number, n?: number): number;
  numHashes(): number;
  hashCapacity(): number;
  hashCost(upgName: string, count?: number): number;
  spendHashes(upgName: string, upgTarget?: string, count?: number): boolean;
  getHashUpgrades(): string[];
  getHashUpgradeLevel(upgName: string): number;
  getStudyMult(): number;
  getTrainingMult(): number;
}
export interface Bladeburner {
  getContractNames(): string[];
  getOperationNames(): string[];
  getBlackOpNames(): string[];
  getGeneralActionNames(): string[];
  getSkillNames(): string[];
  startAction(type: string, name: string): boolean;
  stopBladeburnerAction(): void;
  getCurrentAction(): BladeburnerCurAction;
  getActionTime(type: string, name: string): number;
  getActionCurrentTime(): number;
  getActionEstimatedSuccessChance(type: string, name: string): [number, number];
  getActionRepGain(type: string, name: string, level: number): number;
  getActionCountRemaining(type: string, name: string): number;
  getActionMaxLevel(type: string, name: string): number;
  getActionCurrentLevel(type: string, name: string): number;
  getActionAutolevel(type: string, name: string): boolean;
  getActionSuccesses(type: string, name: string): number;
  setActionAutolevel(type: string, name: string, autoLevel: boolean): void;
  setActionLevel(type: string, name: string, level: number): void;
  getRank(): number;
  getBlackOpRank(name: string): number;
  getSkillPoints(): number;
  getSkillLevel(name: string): number;
  getSkillUpgradeCost(name: string, count?: number): number;
  upgradeSkill(name: string, count?: number): boolean;
  getTeamSize(type: string, name: string): number;
  setTeamSize(type: string, name: string, size: number): number;
  getCityEstimatedPopulation(city: CityName): number;
  getCityCommunities(city: CityName): number;
  getCityChaos(city: CityName): number;
  getCity(): CityName;
  switchCity(city: CityName): boolean;
  getStamina(): [number, number];
  joinBladeburnerFaction(): boolean;
  joinBladeburnerDivision(): boolean;
  getBonusTime(): number;
  inBladeburner(): boolean;
}
export interface CodingContract {
  attempt(answer: string | number | any[], filename: string, host?: string): string;
  getContractType(filename: string, host?: string): string;
  getDescription(filename: string, host?: string): string;
  getData(filename: string, host?: string): CodingContractData;
  getNumTriesRemaining(filename: string, host?: string): number;
  createDummyContract(type: string): void;
  getContractTypes(): string[];
}
export interface Gang {
  createGang(faction: string): boolean;
  inGang(): boolean;
  getMemberNames(): string[];
  getGangInformation(): GangGenInfo;
  getOtherGangInformation(): GangOtherInfo;
  getMemberInformation(name: string): GangMemberInfo;
  canRecruitMember(): boolean;
  recruitMember(name: string): boolean;
  getTaskNames(): string[];
  setMemberTask(memberName: string, taskName: string): boolean;
  getTaskStats(name: string): GangTaskStats;
  getEquipmentNames(): string[];
  getEquipmentCost(equipName: string): number;
  getEquipmentType(equipName: string): string;
  getEquipmentStats(equipName: string): EquipmentStats;
  purchaseEquipment(memberName: string, equipName: string): boolean;
  ascendMember(memberName: string): GangMemberAscension | undefined;
  getAscensionResult(memberName: string): GangMemberAscension | undefined;
  setTerritoryWarfare(engage: boolean): void;
  getChanceToWinClash(gangName: string): number;
  getBonusTime(): number;
}
export interface Sleeve {
  getNumSleeves(): number;
  getSleeve(sleeveNumber: number): SleevePerson;
  getTask(sleeveNumber: number): SleeveTask | null;
  setToIdle(sleeveNumber: number): void;
  setToShockRecovery(sleeveNumber: number): boolean;
  setToSynchronize(sleeveNumber: number): boolean;
  setToCommitCrime(sleeveNumber: number, crimeType: CrimeType): boolean;
  setToFactionWork(
    sleeveNumber: number,
    factionName: string,
    factionWorkType: FactionWorkType,
  ): boolean | undefined;
  setToCompanyWork(sleeveNumber: number, companyName: string): boolean;
  setToUniversityCourse(sleeveNumber: number, university: string, className: string): boolean;
  setToGymWorkout(sleeveNumber: number, gymName: string, stat: string): boolean;
  travel(sleeveNumber: number, city: CityName): boolean;
  getSleeveAugmentations(sleeveNumber: number): string[];
  getSleeveAugmentationPrice(augName: string): number;
  getSleeveAugmentationRepReq(augName: string): number;
  getSleevePurchasableAugs(sleeveNumber: number): AugmentPair[];
  purchaseSleeveAug(sleeveNumber: number, augName: string): boolean;
  setToBladeburnerAction(sleeveNumber: number, action: string, contract?: string): boolean;
}
export interface Grafting {
  getAugmentationGraftPrice(augName: string): number;
  getAugmentationGraftTime(augName: string): number;
  getGraftableAugmentations(): string[];
  graftAugmentation(augName: string, focus?: boolean): boolean;
}
interface SkillsFormulas {
  calculateSkill(exp: number, skillMult?: number): number;
  calculateExp(skill: number, skillMult?: number): number;
}
interface WorkStats {
  money: number;
  reputation: number;
  hackExp: number;
  strExp: number;
  defExp: number;
  dexExp: number;
  agiExp: number;
  chaExp: number;
  intExp: number;
}
interface WorkFormulas {
  crimeSuccessChance(person: Person, crimeType: CrimeType): number;
  crimeGains(person: Person, crimeType: CrimeType): WorkStats;
  gymGains(person: Person, gymType: GymType, locationName: string): WorkStats;
  universityGains(
    person: Person,
    classType: UniversityClassType,
    locationName: string,
  ): WorkStats;
  factionGains(person: Person, workType: FactionWorkType, favor: number): WorkStats;
  companyGains(person: Person, companyName: string, workType: JobName, favor: number): WorkStats;
}
interface ReputationFormulas {
  calculateFavorToRep(favor: number): number;
  calculateRepToFavor(rep: number): number;
  repFromDonation(amount: number, player: Person): number;
}
interface HackingFormulas {
  hackChance(server: Server, player: Person): number;
  hackExp(server: Server, player: Person): number;
  hackPercent(server: Server, player: Person): number;
  growPercent(server: Server, threads: number, player: Person, cores?: number): number;
  growThreads(server: Server, player: Person, targetMoney: number, cores?: number): number;
  hackTime(server: Server, player: Person): number;
  growTime(server: Server, player: Person): number;
  weakenTime(server: Server, player: Person): number;
}
interface HacknetNodesFormulas {
  moneyGainRate(level: number, ram: number, cores: number, mult?: number): number;
  levelUpgradeCost(startingLevel: number, extraLevels?: number, costMult?: number): number;
  ramUpgradeCost(startingRam: number, extraLevels?: number, costMult?: number): number;
  coreUpgradeCost(startingCore: number, extraCores?: number, costMult?: number): number;
  hacknetNodeCost(n: number, mult: number): number;
  constants(): HacknetNodeConstants;
}
interface HacknetServersFormulas {
  hashGainRate(level: number, ramUsed: number, maxRam: number, cores: number, mult?: number): number;
  levelUpgradeCost(startingLevel: number, extraLevels?: number, costMult?: number): number;
  ramUpgradeCost(startingRam: number, extraLevels?: number, costMult?: number): number;
  coreUpgradeCost(startingCore: number, extraCores?: number, costMult?: number): number;
  cacheUpgradeCost(startingCache: number, extraCache?: number): number;
  hashUpgradeCost(upgName: number, level: number): number;
  hacknetServerCost(n: number, mult?: number): number;
  constants(): HacknetServerConstants;
}
interface GangFormulas {
  wantedPenalty(gang: GangGenInfo): number;
  respectGain(gang: GangGenInfo, member: GangMemberInfo, task: GangTaskStats): number;
  wantedLevelGain(gang: GangGenInfo, member: GangMemberInfo, task: GangTaskStats): number;
  moneyGain(gang: GangGenInfo, member: GangMemberInfo, task: GangTaskStats): number;
  ascensionPointsGain(exp: number): number;
  ascensionMultiplier(points: number): number;
}
export interface Formulas {
  mockServer(): Server;
  mockPlayer(): Player;
  mockPerson(): Person;
  reputation: ReputationFormulas;
  skills: SkillsFormulas;
  hacking: HackingFormulas;
  hacknetNodes: HacknetNodesFormulas;
  hacknetServers: HacknetServersFormulas;
  gang: GangFormulas;
  work: WorkFormulas;
}
interface Fragment {
  id: number;
  shape: boolean[][];
  type: number;
  power: number;
  limit: number;
}
interface ActiveFragment {
  id: number;
  highestCharge: number;
  numCharge: number;
  rotation: number;
  x: number;
  y: number;
}
interface Stanek {
  giftWidth(): number;
  giftHeight(): number;
  chargeFragment(rootX: number, rootY: number): Promise<void>;
  fragmentDefinitions(): Fragment[];
  activeFragments(): ActiveFragment[];
  clearGift(): void;
  canPlaceFragment(rootX: number, rootY: number, rotation: number, fragmentId: number): boolean;
  placeFragment(rootX: number, rootY: number, rotation: number, fragmentId: number): boolean;
  getFragment(rootX: number, rootY: number): ActiveFragment | undefined;
  removeFragment(rootX: number, rootY: number): boolean;
  acceptGift(): boolean;
}
interface InfiltrationReward {
  tradeRep: number;
  sellCash: number;
  SoARep: number;
}
interface ILocation {
  city: CityName;
  name: LocationName;
}
interface InfiltrationLocation {
  location: ILocation;
  reward: InfiltrationReward;
  difficulty: number;
}
interface Infiltration {
  getPossibleLocations(): ILocation[];
  getInfiltration(location: string): InfiltrationLocation;
}
interface UserInterface {
  windowSize(): [number, number];
  getTheme(): UserInterfaceTheme;
  setTheme(newTheme: UserInterfaceTheme): void;
  resetTheme(): void;
  getStyles(): IStyleSettings;
  setStyles(newStyles: IStyleSettings): void;
  resetStyles(): void;
  getGameInfo(): GameInfo;
  clearTerminal(): void;
}

declare enum ToastVariant {
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
  INFO = "info",
}
declare enum CrimeType {
  shoplift = "Shoplift",
  robStore = "Rob Store",
  mug = "Mug",
  larceny = "Larceny",
  dealDrugs = "Deal Drugs",
  bondForgery = "Bond Forgery",
  traffickArms = "Traffick Arms",
  homicide = "Homicide",
  grandTheftAuto = "Grand Theft Auto",
  kidnap = "Kidnap",
  assassination = "Assassination",
  heist = "Heist",
}
declare enum FactionWorkType {
  hacking = "hacking",
  field = "field",
  security = "security",
}
declare enum UniversityClassType {
  computerScience = "Computer Science",
  dataStructures = "Data Structures",
  networks = "Networks",
  algorithms = "Algorithms",
  management = "Management",
  leadership = "Leadership",
}
declare enum GymType {
  strength = "str",
  defense = "def",
  dexterity = "dex",
  agility = "agi",
}
declare enum JobName {
  software0 = "Software Engineering Intern",
  software1 = "Junior Software Engineer",
  software2 = "Senior Software Engineer",
  software3 = "Lead Software Developer",
  software4 = "Head of Software",
  software5 = "Head of Engineering",
  software6 = "Vice President of Technology",
  software7 = "Chief Technology Officer",
  IT0 = "IT Intern",
  IT1 = "IT Analyst",
  IT2 = "IT Manager",
  IT3 = "Systems Administrator",
  securityEng = "Security Engineer",
  networkEng0 = "Network Engineer",
  networkEng1 = "Network Administrator",
  business0 = "Business Intern",
  business1 = "Business Analyst",
  business2 = "Business Manager",
  business3 = "Operations Manager",
  business4 = "Chief Financial Officer",
  business5 = "Chief Executive Officer",
  security0 = "Police Officer",
  security1 = "Police Chief",
  security2 = "Security Guard",
  security3 = "Security Officer",
  security4 = "Security Supervisor",
  security5 = "Head of Security",
  agent0 = "Field Agent",
  agent1 = "Secret Agent",
  agent2 = "Special Operative",
  waiter = "Waiter",
  employee = "Employee",
  softwareConsult0 = "Software Consultant",
  softwareConsult1 = "Senior Software Consultant",
  businessConsult0 = "Business Consultant",
  businessConsult1 = "Senior Business Consultant",
  waiterPT = "Part-time Waiter",
  employeePT = "Part-time Employee",
}
type CorpEmployeePosition =
  | "Operations"
  | "Engineer"
  | "Business"
  | "Management"
  | "Research & Development"
  | "Intern"
  | "Unassigned";
type CorpIndustryName =
  | "Spring Water"
  | "Water Utilities"
  | "Agriculture"
  | "Fishing"
  | "Mining"
  | "Refinery"
  | "Restaurant"
  | "Tobacco"
  | "Chemical"
  | "Pharmaceutical"
  | "Computer Hardware"
  | "Robotics"
  | "Software"
  | "Healthcare"
  | "Real Estate";
declare enum CityName {
  Aevum = "Aevum",
  Chongqing = "Chongqing",
  Sector12 = "Sector-12",
  NewTokyo = "New Tokyo",
  Ishima = "Ishima",
  Volhaven = "Volhaven",
}
declare enum LocationName {
  AevumAeroCorp = "AeroCorp",
  AevumBachmanAndAssociates = "Bachman & Associates",
  AevumClarkeIncorporated = "Clarke Incorporated",
  AevumCrushFitnessGym = "Crush Fitness Gym",
  AevumECorp = "ECorp",
  AevumFulcrumTechnologies = "Fulcrum Technologies",
  AevumGalacticCybersystems = "Galactic Cybersystems",
  AevumNetLinkTechnologies = "NetLink Technologies",
  AevumPolice = "Aevum Police Headquarters",
  AevumRhoConstruction = "Rho Construction",
  AevumSnapFitnessGym = "Snap Fitness Gym",
  AevumSummitUniversity = "Summit University",
  AevumWatchdogSecurity = "Watchdog Security",
  AevumCasino = "Iker Molina Casino",

  ChongqingKuaiGongInternational = "KuaiGong International",
  ChongqingSolarisSpaceSystems = "Solaris Space Systems",
  ChongqingChurchOfTheMachineGod = "Church of the Machine God",

  Sector12AlphaEnterprises = "Alpha Enterprises",
  Sector12BladeIndustries = "Blade Industries",
  Sector12CIA = "Central Intelligence Agency",
  Sector12CarmichaelSecurity = "Carmichael Security",
  Sector12CityHall = "Sector-12 City Hall",
  Sector12DeltaOne = "DeltaOne",
  Sector12FoodNStuff = "FoodNStuff",
  Sector12FourSigma = "Four Sigma",
  Sector12IcarusMicrosystems = "Icarus Microsystems",
  Sector12IronGym = "Iron Gym",
  Sector12JoesGuns = "Joe's Guns",
  Sector12MegaCorp = "MegaCorp",
  Sector12NSA = "National Security Agency",
  Sector12PowerhouseGym = "Powerhouse Gym",
  Sector12RothmanUniversity = "Rothman University",
  Sector12UniversalEnergy = "Universal Energy",

  NewTokyoDefComm = "DefComm",
  NewTokyoGlobalPharmaceuticals = "Global Pharmaceuticals",
  NewTokyoNoodleBar = "Noodle Bar",
  NewTokyoVitaLife = "VitaLife",
  NewTokyoArcade = "Arcade",

  IshimaNovaMedical = "Nova Medical",
  IshimaOmegaSoftware = "Omega Software",
  IshimaStormTechnologies = "Storm Technologies",
  IshimaGlitch = "0x6C1",

  VolhavenCompuTek = "CompuTek",
  VolhavenHeliosLabs = "Helios Labs",
  VolhavenLexoCorp = "LexoCorp",
  VolhavenMilleniumFitnessGym = "Millenium Fitness Gym",
  VolhavenNWO = "NWO",
  VolhavenOmniTekIncorporated = "OmniTek Incorporated",
  VolhavenOmniaCybersystems = "Omnia Cybersystems",
  VolhavenSysCoreSecurities = "SysCore Securities",
  VolhavenZBInstituteOfTechnology = "ZB Institute of Technology",

  Hospital = "Hospital",
  Slums = "The Slums",
  TravelAgency = "Travel Agency",
  WorldStockExchange = "World Stock Exchange",

  Void = "The Void",
}
export type NSEnums = {
  CityName: typeof CityName;
  CrimeType: typeof CrimeType;
  FactionWorkType: typeof FactionWorkType;
  GymType: typeof GymType;
  JobName: typeof JobName;
  LocationName: typeof LocationName;
  ToastVariant: typeof ToastVariant;
  UniversityClassType: typeof UniversityClassType;
};
export interface OfficeAPI {
  hireEmployee(divisionName: string, city: CityName, employeePosition?: CorpEmployeePosition): boolean;
  upgradeOfficeSize(divisionName: string, city: CityName, size: number): void;
  throwParty(divisionName: string, city: CityName, costPerEmployee: number): number;
  buyTea(divisionName: string, city: CityName): boolean;
  hireAdVert(divisionName: string): void;
  research(divisionName: string, researchName: string): void;
  getOffice(divisionName: string, city: CityName): Office;
  getHireAdVertCost(divisionName: string): number;
  getHireAdVertCount(divisionName: string): number;
  getResearchCost(divisionName: string, researchName: string): number;
  hasResearched(divisionName: string, researchName: string): boolean;
  setAutoJobAssignment(divisionName: string, city: CityName, job: string, amount: number): boolean;
  getOfficeSizeUpgradeCost(divisionName: string, city: CityName, asize: number): number;
}
export interface WarehouseAPI {
  sellMaterial(
    divisionName: string,
    city: CityName,
    materialName: string,
    amt: string,
    price: string,
  ): void;
  sellProduct(
    divisionName: string,
    city: CityName,
    productName: string,
    amt: string,
    price: string,
    all: boolean,
  ): void;
  discontinueProduct(divisionName: string, productName: string): void;
  setSmartSupply(divisionName: string, city: CityName, enabled: boolean): void;
  setSmartSupplyOption(
    divisionName: string,
    city: CityName,
    materialName: string,
    option: string,
  ): void;
  buyMaterial(divisionName: string, city: CityName, materialName: string, amt: number): void;
  bulkPurchase(divisionName: string, city: CityName, materialName: string, amt: number): void;
  getWarehouse(divisionName: string, city: CityName): Warehouse;
  getProduct(divisionName: string, cityName: CityName, productName: string): Product;
  getMaterial(divisionName: string, city: CityName, materialName: string): Material;
  setMaterialMarketTA1(divisionName: string, city: CityName, materialName: string, on: boolean): void;
  setMaterialMarketTA2(divisionName: string, city: CityName, materialName: string, on: boolean): void;
  setProductMarketTA1(divisionName: string, productName: string, on: boolean): void;
  setProductMarketTA2(divisionName: string, productName: string, on: boolean): void;
  exportMaterial(
    sourceDivision: string,
    sourceCity: CityName,
    targetDivision: string,
    targetCity: CityName,
    materialName: string,
    amt: number | string,
  ): void;
  cancelExportMaterial(
    sourceDivision: string,
    sourceCity: CityName,
    targetDivision: string,
    targetCity: CityName,
    materialName: string,
  ): void;
  purchaseWarehouse(divisionName: string, city: CityName): void;
  upgradeWarehouse(divisionName: string, city: CityName, amt?: number): void;
  makeProduct(
    divisionName: string,
    city: CityName,
    productName: string,
    designInvest: number,
    marketingInvest: number,
  ): void;
  limitMaterialProduction(
    divisionName: string,
    city: CityName,
    materialName: string,
    qty: number,
  ): void;
  limitProductProduction(divisionName: string, city: CityName, productName: string, qty: number): void;
  getUpgradeWarehouseCost(divisionName: string, city: CityName, amt?: number): number;
  hasWarehouse(divisionName: string, city: CityName): boolean;
}
export interface Corporation extends WarehouseAPI, OfficeAPI {
  hasCorporation(): boolean;
  createCorporation(corporationName: string, selfFund: boolean): boolean;
  hasUnlock(upgradeName: string): boolean;
  getUnlockCost(upgradeName: string): number;
  getUpgradeLevel(upgradeName: string): number;
  getUpgradeLevelCost(upgradeName: string): number;
  getInvestmentOffer(): InvestmentOffer;
  getConstants(): CorpConstants;
  getIndustryData(industryName: CorpIndustryName): CorpIndustryData;
  getMaterialData(materialName: CorpMaterialName): CorpMaterialConstantData;
  acceptInvestmentOffer(): boolean;
  goPublic(numShares: number): boolean;
  bribe(factionName: string, amountCash: number): boolean;
  getCorporation(): CorporationInfo;
  getDivision(divisionName: string): Division;
  expandIndustry(industryType: CorpIndustryName, divisionName: string): void;
  expandCity(divisionName: string, city: CityName): void;
  purchaseUnlock(upgradeName: string): void;
  levelUpgrade(upgradeName: string): void;
  issueDividends(rate: number): void;
  issueNewShares(amount?: number): number;
  buyBackShares(amount: number): void;
  sellShares(amount: number): void;
  getBonusTime(): number;
}
interface CorpProductData {
  name: string;
  verb: string;
  desc: string;
  ratingWeights: {
    aesthetics?: number;
    durability?: number;
    features?: number;
    quality?: number;
    performance?: number;
    reliability?: number;
  };
}
interface CorpIndustryData {
  startingCost: number;
  description: string;
  product?: CorpProductData;
  recommendStarting: boolean;
  requiredMaterials: Partial<Record<CorpMaterialName, number>>;
  realEstateFactor?: number;
  scienceFactor?: number;
  hardwareFactor?: number;
  robotFactor?: number;
  aiCoreFactor?: number;
  advertisingFactor?: number;
  producedMaterials?: CorpMaterialName[];
}
interface CorporationInfo {
  name: string;
  funds: number;
  revenue: number;
  expenses: number;
  public: boolean;
  totalShares: number;
  numShares: number;
  shareSaleCooldown: number;
  issuedShares: number;
  sharePrice: number;
  dividendRate: number;
  dividendTax: number;
  dividendEarnings: number;
  state: string;
  divisions: string[];
}
interface CorpConstants {
  stateNames: CorpStateName[];
  industryNames: CorpIndustryName[];
  materialNames: CorpMaterialName[];
  unlockNames: CorpUnlockName[];
  upgradeNames: CorpUpgradeName[];
  researchNamesBase: CorpResearchName[];
  researchNamesProductOnly: CorpResearchName[];
  researchNames: CorpResearchName[];
  initialShares: number;
  sharesPerPriceUpdate: number;
  issueNewSharesCooldown: number;
  sellSharesCooldown: number;
  teaCostPerEmployee: number;
  gameCyclesPerMarketCycle: number;
  gameCyclesPerCorpStateCycle: number;
  secondsPerMarketCycle: number;
  warehouseInitialCost: number;
  warehouseInitialSize: number;
  warehouseSizeUpgradeCostBase: number;
  officeInitialCost: number;
  officeInitialSize: number;
  officeSizeUpgradeCostBase: number;
  bribeThreshold: number;
  bribeAmountPerReputation: number;
  baseProductProfitMult: number;
  dividendMaxRate: number;
  employeeSalaryMultiplier: number;
  marketCyclesPerEmployeeRaise: number;
  employeeRaiseAmount: number;
  maxProductsBase: number;
  minEmployeeDecay: number;
}
type CorpStateName = "START" | "PURCHASE" | "PRODUCTION" | "EXPORT" | "SALE";
type CorpMaterialName =
  | "Minerals"
  | "Ore"
  | "Water"
  | "Food"
  | "Plants"
  | "Metal"
  | "Hardware"
  | "Chemicals"
  | "Drugs"
  | "Robots"
  | "AI Cores"
  | "Real Estate";
type CorpUnlockName =
  | "Export"
  | "Smart Supply"
  | "Market Research - Demand"
  | "Market Data - Competition"
  | "VeChain"
  | "Shady Accounting"
  | "Government Partnership"
  | "Warehouse API"
  | "Office API";
type CorpUpgradeName =
  | "Smart Factories"
  | "Smart Storage"
  | "DreamSense"
  | "Wilson Analytics"
  | "Nuoptimal Nootropic Injector Implants"
  | "Speech Processor Implants"
  | "Neural Accelerators"
  | "FocusWires"
  | "ABC SalesBots"
  | "Project Insight";
type CorpResearchName =
  | "Hi-Tech R&D Laboratory"
  | "AutoBrew"
  | "AutoPartyManager"
  | "Automatic Drug Administration"
  | "CPH4 Injections"
  | "Drones"
  | "Drones - Assembly"
  | "Drones - Transport"
  | "Go-Juice"
  | "HRBuddy-Recruitment"
  | "HRBuddy-Training"
  | "Market-TA.I"
  | "Market-TA.II"
  | "Overclock"
  | "Self-Correcting Assemblers"
  | "Sti.mu"
  | "uPgrade: Capacity.I"
  | "uPgrade: Capacity.II"
  | "uPgrade: Dashboard"
  | "uPgrade: Fulcrum"
  | "sudo.Assist";
interface CorpMaterialConstantData {
  name: string;
  size: number;
  demandBase: number;
  demandRange: [number, number];
  competitionBase: number;
  competitionRange: [number, number];
  baseCost: number;
  maxVolatility: number;
  baseMarkup: number;
}
interface IndustryData {
  type: CorpIndustryName;
  cost: number;
  requiredMaterials: Record<string, number>;
  producedMaterials?: string[];
  makesMaterials: boolean;
  makesProducts: boolean;
  productType?: string;
}
interface Product {
  name: string;
  demand: number | undefined;
  competition: number | undefined;
  rating: number;
  effectiveRating: number;
  stats: {
    quality: number;
    performance: number;
    durability: number;
    reliability: number;
    aesthetics: number;
    features: number;
  };
  productionCost: number;
  desiredSellPrice: string | number;
  desiredSellAmount: string | number;
  stored: number;
  productionAmount: number;
  actualSellAmount: number;
  developmentProgress: number;
}
interface Material {
  name: CorpMaterialName;
  stored: number;
  quality: number;
  demand: number | undefined;
  competition: number | undefined;
  productionAmount: number;
  actualSellAmount: number;
  marketPrice: number;
  desiredSellPrice: string | number;
  desiredSellAmount: string | number;
  exports: Export[];
}
interface Export {
  division: string;
  city: CityName;
  amount: string;
}
interface Warehouse {
  level: number;
  city: CityName;
  size: number;
  sizeUsed: number;
  smartSupplyEnabled: boolean;
}
export interface Office {
  city: CityName;
  size: number;
  maxEnergy: number;
  maxMorale: number;
  numEmployees: number;
  avgEnergy: number;
  avgMorale: number;
  totalExperience: number;
  employeeProductionByJob: Record<CorpEmployeePosition, number>;
  employeeJobs: Record<CorpEmployeePosition, number>;
}
interface Division {
  name: string;
  type: CorpIndustryName;
  awareness: number;
  popularity: number;
  productionMult: number;
  researchPoints: number;
  lastCycleRevenue: number;
  lastCycleExpenses: number;
  thisCycleRevenue: number;
  thisCycleExpenses: number;
  numAdVerts: number;
  cities: CityName[];
  products: string[];
  makesProducts: boolean;
  maxProducts: number;
}
interface InvestmentOffer {
  funds: number;
  shares: number;
  round: number;
}
interface UserInterfaceTheme {
  [key: string]: string | undefined;
  primarylight: string;
  primary: string;
  primarydark: string;
  successlight: string;
  success: string;
  successdark: string;
  errorlight: string;
  error: string;
  errordark: string;
  secondarylight: string;
  secondary: string;
  secondarydark: string;
  warninglight: string;
  warning: string;
  warningdark: string;
  infolight: string;
  info: string;
  infodark: string;
  welllight: string;
  well: string;
  white: string;
  black: string;
  hp: string;
  money: string;
  hack: string;
  combat: string;
  cha: string;
  int: string;
  rep: string;
  disabled: string;
  backgroundprimary: string;
  backgroundsecondary: string;
  button: string;
}
interface IStyleSettings {
  fontFamily: string;
  lineHeight: number;
}
interface GameInfo {
  version: string;
  commit: string;
  platform: string;
}
interface AutocompleteData {
  servers: string[];
  scripts: string[];
  txts: string[];
  flags(schema: [string, string | number | boolean | string[]][]): { [key: string]: ScriptArg | string[] };
}

export interface NS {
  readonly hacknet: Hacknet;
  readonly bladeburner: Bladeburner;
  readonly codingcontract: CodingContract;
  readonly gang: Gang;
  readonly sleeve: Sleeve;
  readonly stock: TIX;
  readonly formulas: Formulas;
  readonly stanek: Stanek;
  readonly infiltration: Infiltration;
  readonly corporation: Corporation;
  readonly ui: UserInterface;
  readonly singularity: Singularity;
  readonly grafting: Grafting;
  readonly args: (string | number | boolean)[];
  readonly pid: number;
  hack(host: string, opts?: BasicHGWOptions): Promise<number>;
  grow(host: string, opts?: BasicHGWOptions): Promise<number>;
  weaken(host: string, opts?: BasicHGWOptions): Promise<number>;
  weakenAnalyze(threads: number, cores?: number): number;
  hackAnalyzeThreads(host: string, hackAmount: number): number;
  hackAnalyze(host: string): number;
  hackAnalyzeSecurity(threads: number, hostname?: string): number;
  hackAnalyzeChance(host: string): number;
  growthAnalyze(host: string, multiplier: number, cores?: number): number;
  growthAnalyzeSecurity(threads: number, hostname?: string, cores?: number): number;
  sleep(millis: number): Promise<true>;
  asleep(millis: number): Promise<true>;
  print(...args: any[]): void;
  printf(format: string, ...args: any[]): void;
  tprint(...args: any[]): void;
  tprintf(format: string, ...values: any[]): void;
  clearLog(): void;
  disableLog(fn: string): void;
  enableLog(fn: string): void;
  isLogEnabled(fn: string): boolean;
  getScriptLogs(fn?: string, host?: string, ...args: (string | number | boolean)[]): string[];
  getRecentScripts(): RecentScript[];
  tail(fn?: FilenameOrPID, host?: string, ...args: (string | number | boolean)[]): void;
  moveTail(x: number, y: number, pid?: number): void;
  resizeTail(width: number, height: number, pid?: number): void;
  closeTail(pid?: number): void;
  scan(host?: string): string[];
  hasTorRouter(): boolean;
  nuke(host: string): void;
  brutessh(host: string): void;
  ftpcrack(host: string): void;
  relaysmtp(host: string): void;
  httpworm(host: string): void;
  sqlinject(host: string): void;
  run(script: string, threadOrOptions?: number | RunOptions, ...args: (string | number | boolean)[]): number;
  exec(
    script: string,
    hostname: string,
    threadOrOptions?: number | RunOptions,
    ...args: (string | number | boolean)[]
  ): number;
  spawn(script: string, threadOrOptions?: number | RunOptions, ...args: (string | number | boolean)[]): void;
  kill(pid: number): boolean;
  kill(filename: string, hostname?: string, ...args: ScriptArg[]): boolean;
  killall(host?: string, safetyguard?: boolean): boolean;
  scp(files: string | string[], destination: string, source?: string): boolean;
  ls(host: string, substring?: string): string[];
  ps(host?: string): ProcessInfo[];
  hasRootAccess(host: string): boolean;
  getHostname(): string;
  getHackingLevel(): number;
  getHackingMultipliers(): HackingMultipliers;
  getHacknetMultipliers(): HacknetMultipliers;
  getServer(host?: string): Server;
  getServerMoneyAvailable(host: string): number;
  getServerMaxMoney(host: string): number;
  getServerGrowth(host: string): number;
  getServerSecurityLevel(host: string): number;
  getServerMinSecurityLevel(host: string): number;
  getServerBaseSecurityLevel(host: string): number;
  getServerMaxRam(host: string): number;
  getServerUsedRam(host: string): number;
  getServerRequiredHackingLevel(host: string): number;
  getServerNumPortsRequired(host: string): number;
  serverExists(host: string): boolean;
  fileExists(filename: string, host?: string): boolean;
  isRunning(script: FilenameOrPID, host?: string, ...args: (string | number | boolean)[]): boolean;
  getRunningScript(
    filename?: FilenameOrPID,
    hostname?: string,
    ...args: (string | number | boolean)[]
  ): RunningScript | null;
  getPurchasedServerCost(ram: number): number;
  purchaseServer(hostname: string, ram: number): string;
  getPurchasedServerUpgradeCost(hostname: string, ram: number): number;
  upgradePurchasedServer(hostname: string, ram: number): boolean;
  renamePurchasedServer(hostname: string, newName: string): boolean;
  deleteServer(host: string): boolean;
  getPurchasedServers(): string[];
  getPurchasedServerLimit(): number;
  getPurchasedServerMaxRam(): number;
  write(filename: string, data?: string, mode?: "w" | "a"): void;
  tryWritePort(portNumber: number, data: string | number): boolean;
  read(filename: string): string;
  peek(portNumber: number): PortData;
  clear(handle: string): void;
  clearPort(handle: number): void;
  writePort(portNumber: number, data: string | number): PortData | null;
  readPort(portNumber: number): PortData;
  getPortHandle(portNumber: number): NetscriptPort;
  rm(name: string, host?: string): boolean;
  scriptRunning(script: string, host: string): boolean;
  scriptKill(script: string, host: string): boolean;
  getScriptName(): string;
  getScriptRam(script: string, host?: string): number;
  getHackTime(host: string): number;
  getGrowTime(host: string): number;
  getWeakenTime(host: string): number;
  getTotalScriptIncome(): [number, number];
  getScriptIncome(script: string, host: string, ...args: (string | number | boolean)[]): number;
  getTotalScriptExpGain(): number;
  getScriptExpGain(script: string, host: string, ...args: (string | number | boolean)[]): number;
  getTimeSinceLastAug(): number;
  sprintf(format: string, ...args: any[]): string;
  vsprintf(format: string, args: any[]): string;
  formatNumber(n: number, fractionalDigits?: number, suffixStart?: number, isInteger?: boolean): string;
  formatRam(n: number, fractionalDigits?: number): string;
  formatPercent(n: number, fractionalDigits?: number, multStart?: number): string;
  nFormat(n: number, format: string): string;
  tFormat(milliseconds: number, milliPrecision?: boolean): string;
  prompt(
    txt: string,
    options?: { type?: "boolean" | "text" | "select"; choices?: string[] },
  ): Promise<boolean | string>;
  alert(msg: string): void;
  toast(msg: string, variant?: ToastVariant, duration?: number | null): void;
  wget(url: string, target: string, host?: string): Promise<boolean>;
  getFavorToDonate(): number;
  getBitNodeMultipliers(n?: number, lvl?: number): BitNodeMultipliers;
  getPlayer(): Player;
  getMoneySources(): MoneySources;
  mv(host: string, source: string, destination: string): void;
  getResetInfo(): ResetInfo;
  getFunctionRamCost(name: string): number;
  flags(schema: [string, string | number | boolean | string[]][]): { [key: string]: ScriptArg | string[] };
  share(): Promise<void>;
  getSharePower(): number;

  enums: NSEnums;
}

export interface Singularity {
  exportGame(): void;
  exportGameBonus(): boolean;
  universityCourse(universityName: string, courseName: string, focus?: boolean): boolean;
  gymWorkout(gymName: string, stat: string, focus?: boolean): boolean;
  travelToCity(city: CityName): boolean;
  purchaseTor(): boolean;
  purchaseProgram(programName: string): boolean;
  isBusy(): boolean;
  stopAction(): boolean;
  upgradeHomeRam(): boolean;
  upgradeHomeCores(): boolean;
  getUpgradeHomeRamCost(): number;
  getUpgradeHomeCoresCost(): number;
  getCompanyPositionInfo(companyName: string, positionName: JobName): CompanyPositionInfo;
  getCompanyPositions(companyName: string): JobName[];
  workForCompany(companyName: string, focus?: boolean): boolean;
  quitJob(companyName?: string): void;
  applyToCompany(companyName: string, field: string): boolean;
  getCompanyRep(companyName: string): number;
  getCompanyFavor(companyName: string): number;
  getCompanyFavorGain(companyName: string): number;
  checkFactionInvitations(): string[];
  joinFaction(faction: string): boolean;
  workForFaction(faction: string, workType: FactionWorkType, focus?: boolean): boolean;
  getFactionRep(faction: string): number;
  getFactionFavor(faction: string): number;
  getFactionFavorGain(faction: string): number;
  donateToFaction(faction: string, amount: number): boolean;
  createProgram(program: string, focus?: boolean): boolean;
  commitCrime(crime: CrimeType, focus?: boolean): number;
  getCrimeChance(crime: CrimeType): number;
  getCrimeStats(crime: CrimeType): CrimeStats;
  getOwnedAugmentations(purchased?: boolean): string[];
  getOwnedSourceFiles(): SourceFileLvl[];
  getAugmentationsFromFaction(faction: string): string[];
  getAugmentationPrereq(augName: string): string[];
  getAugmentationPrice(augName: string): number;
  getAugmentationBasePrice(augName: string): number;
  getAugmentationRepReq(augName: string): number;
  purchaseAugmentation(faction: string, augmentation: string): boolean;
  getAugmentationStats(name: string): Multipliers;
  installAugmentations(cbScript?: string): void;
  hospitalize(): void;
  softReset(cbScript: string): void;
  goToLocation(locationName: string): boolean;
  getCurrentServer(): string;
  connect(hostname: string): boolean;
  manualHack(): Promise<number>;
  installBackdoor(): Promise<void>;
  isFocused(): boolean;
  setFocus(focus: boolean): boolean;
  getDarkwebPrograms(): string[];
  getDarkwebProgramCost(programName: string): number;
  b1tflum3(nextBN: number, callbackScript?: string): void;
  destroyW0r1dD43m0n(nextBN: number, callbackScript?: string): void;
  getCurrentWork(): any | null;
}
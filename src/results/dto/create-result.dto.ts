import { Base64Id } from "@/utils/dto/base64.dto"
import { CoopStage, Enemy, Scale, Stage, WeaponInfo } from "@/utils/dto/common.dto"
import * as S from "@effect/schema/Schema"

export class HistoryDetail extends S.Class<HistoryDetail>("HistoryDetail")({
  id: S.String,
}) {}

export class TextColor extends S.Class<TextColor>("TextColor")({
  a: S.Number,
  b: S.Number,
  g: S.Number,
  r: S.Number,
}) {}

export class Image extends S.Class<Image>("Image")({
  url: S.String,
}) {}

export class BossResult extends S.Class<BossResult>("BossResult")({
  hasDefeatBoss: S.Boolean,
  boss: Stage,
}) {}

export class Boss extends S.Class<Boss>("Boss")({
  coopEnemyId: S.Number,
  name: S.String,
  id: S.String,
}) {}

export class AfterGrade extends S.Class<AfterGrade>("AfterGrade")({
  name: S.String,
  id: S.String,
}) {}

export class WaveResult extends S.Class<WaveResult>("WaveResult")({
  waveNumber: S.Number,
  waterLevel: S.Number,
  eventWave: S.Union(AfterGrade, S.Null),
  deliverNorm: S.Union(S.Number, S.Null),
  goldenPopCount: S.Number,
  teamDeliverCount: S.Union(S.Number, S.Null),
  specialWeapons: S.Array(WeaponInfo.Specal),
}) {}

export class CoopHistoryDetail extends S.Class<CoopHistoryDetail>("CoopHistoryDetail")({
  __typename: S.String,
  id: S.String,
  afterGrade: AfterGrade,
  myResult: S.suspend(() => MemberResult),
  memberResults: S.Array(S.suspend(() => MemberResult)),
  bossResult: BossResult,
  enemyResults: S.Array(S.suspend(() => EnemyResult)),
  waveResults: S.Array(WaveResult),
  resultWave: S.Number,
  playedTime: S.String,
  rule: S.String,
  coopStage: Stage,
  dangerRate: S.Number,
  scenarioCode: S.Null,
  smellMeter: S.Number,
  weapons: S.Array(S.suspend(() => Weapon)),
  boss: Boss,
  afterGradePoint: S.Number,
  scale: Scale,
  jobPoint: S.Number,
  jobScore: S.Number,
  jobRate: S.Number,
  jobBonus: S.Number,
  nextHistoryDetail: HistoryDetail,
  previousHistoryDetail: HistoryDetail,
}) {}

export class Data extends S.Class<Data>("Data")({
  coopHistoryDetail: CoopHistoryDetail,
}) {}

export class Weapon extends S.Class<Weapon>("Weapon")({
  name: S.String,
  image: Image,
}) {}

export class SpecialWeapon extends S.Class<SpecialWeapon>("SpecialWeapon")({
  name: S.String,
  image: Image,
  weaponId: S.Number,
}) {}

export class Badge extends S.Class<Badge>("Badge")({
  image: Image,
  id: S.String,
}) {}

export class CreateResultDto extends S.Class<CreateResultDto>("CreateResultDto")({
  data: Data,
}) {}

export class Background extends S.Class<Background>("Background")({
  textColor: TextColor,
  image: Image,
  id: S.String,
}) {}

export class Nameplate extends S.Class<Nameplate>("Nameplate")({
  badges: S.Array(S.Union(Badge, S.Null)),
  background: Background,
}) {}

export class ResultPlayer extends S.Class<ResultPlayer>("ResultPlayer")({
  __isPlayer: S.String,
  byname: S.String,
  name: S.String,
  nameId: S.String,
  nameplate: Nameplate,
  // uniform: Base64Id(),
  id: S.String,
  species: S.String,
}) {}

export class MemberResult extends S.Class<MemberResult>("MemberResult")({
  player: ResultPlayer,
  weapons: S.Array(Weapon),
  specialWeapon: SpecialWeapon,
  defeatEnemyCount: S.Number,
  deliverCount: S.Number,
  goldenAssistCount: S.Number,
  goldenDeliverCount: S.Number,
  rescueCount: S.Number,
  rescuedCount: S.Number,
}) {}

export class EnemyResult extends S.Class<EnemyResult>("EnemyResult")({
  defeatCount: S.Number,
  teamDefeatCount: S.Number,
  popCount: S.Number,
  enemy: Enemy,
}) {}

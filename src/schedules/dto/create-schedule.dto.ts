import * as S from "@effect/schema/Schema"

export class Wave extends S.Class<Wave>("Wave")({
  tide: S.String,
  event: S.String
}) {}

export class Reward extends S.Class<Reward>("Reward")({
  reward: S.Number,
  topPercent: S.Number,
  minimumScore: S.Number
}) {}

export class Rewards extends S.Class<Rewards>("Rewards")({
  normal: Reward,
  bronze: Reward,
  silver: Reward,
  gold: Reward
}) {}

export class RewardGear extends S.Class<RewardGear>("RewardGear")({
  rewardId: S.String,
  kind: S.String,
  id: S.Number
}) {}

export class Schedule extends S.Class<Schedule>("Schedule")({
  bigBoss: S.optional(S.Union(S.Null, S.String)),
  rewards: S.optional(S.Union(Rewards, S.Null)),
  phaseId: S.String,
  startTime: S.String,
  endTime: S.String,
  stage: S.Number,
  weapons: S.Array(S.Number),
  rareWeapons: S.Array(S.Number),
  rewardGear: S.optional(S.Union(RewardGear, S.Null)),
  specials: S.optional(S.Union(S.Array(S.Number), S.Null)),
  waves: S.optional(S.Union(S.Array(Wave), S.Null))
}) {}

export class CreateScheduleDto extends S.Class<CreateScheduleDto>("CreateScheduleDto")({
  Normals: S.Array(Schedule),
  BigRun: S.Array(Schedule),
  TeamContest: S.Array(Schedule)
}) {}

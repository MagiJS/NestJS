import {
  CoopEnemy,
  CoopGrade,
  CoopMode,
  CoopRule,
  CoopStage,
  CoopTrophy,
  Grade,
  GradePointDiff,
  Scale,
} from "@/utils/dto/common.dto"
import * as S from "@effect/schema/Schema"

export class PointCard extends S.Class<PointCard>("PointCard")({
  defeatBossCount: S.Number,
  deliverCount: S.Number,
  goldenDeliverCount: S.Number,
  playCount: S.Number,
  rescueCount: S.Number,
  regularPoint: S.Number,
  totalPoint: S.Number,
  limitedPoint: S.Null,
}) {}

export class HistoryDetailsNode extends S.Class<HistoryDetailsNode>("HistoryDetailsNode")({
  id: S.String,
}) {}

export class HistoryDetails extends S.Class<HistoryDetails>("HistoryDetails")({
  nodes: S.Array(HistoryDetailsNode),
}) {}

export class HighestResult extends S.Class<HighestResult>("HighestResult")({
  grade: Grade,
  gradePoint: S.Number,
  jobScore: S.Number,
  trophy: S.Union(S.Null, CoopTrophy),
}) {}

export class HistoryGroupsNode extends S.Class<HistoryGroupsNode>("HistoryGroupsNode")({
  startTime: S.String,
  endTime: S.String,
  mode: S.String,
  playCount: S.Number,
  rule: S.String,
  highestResult: HighestResult,
  historyDetails: S.suspend(() => HistoryDetails),
}) {}

export class HistoryGroups extends S.Class<HistoryGroups>("HistoryGroups")({
  nodes: S.Array(HistoryGroupsNode),
}) {}

export class CoopResult extends S.Class<CoopResult>("CoopResult")({
  regularAverageClearWave: S.Number,
  scale: Scale,
  pointCard: PointCard,
  historyGroups: HistoryGroups,
}) {}

export class Data extends S.Class<Data>("Data")({
  coopResult: CoopResult,
}) {}

export class CreateHistoryDto extends S.Class<CreateHistoryDto>("CreateHistoryDto")({
  data: Data,
}) {}

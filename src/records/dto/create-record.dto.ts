import { Base64Id } from "@/utils/dto/base64.dto"
import {
  CoopEnemy,
  CoopGrade,
  CoopMode,
  CoopRule,
  CoopStage,
  CoopTrophy,
  Enemy,
  Grade,
  GradePointDiff,
  Stage,
} from "@/utils/dto/common.dto"
import { CoopBossInfo, CoopEnemyInfo } from "@/utils/enums/coop_enemy"
import * as S from "@effect/schema/Schema"

export class StageHighestRecord extends S.Class<StageHighestRecord>("StageHighestRecord")({
  coopStage: Stage,
  grade: Grade,
  gradePoint: S.Number,
}) {}

export class BigRunRecordNode extends S.Class<Node>("Node")({
  startTime: S.String,
  endTime: S.String,
  trophy: S.String,
  coopStage: Stage,
  highestGrade: Grade,
  highestGradePoint: S.Number,
  highestJobScore: S.Number,
  rankPercentile: S.Union(S.Number, S.Null),
  // __typename: S.String
}) {}

export class Edge extends S.Class<Edge>("Edge")({
  node: BigRunRecordNode,
  // cursor: S.String
}) {}

export class Records extends S.Class<Records>("Records")({
  edges: S.Array(Edge),
}) {}

export class BigRunRecord extends S.Class<BigRunRecord>("BigRunRecord")({
  records: Records,
}) {}

export class DefeatRecord extends S.Class<DefeatRecord>("DefeatRecord")({
  enemy: Base64Id(CoopEnemyInfo.Id),
  defeatCount: S.Number,
}) {}

export class CoopRecordClass extends S.Class<CoopRecordClass>("CoopRecordClass")({
  stageHighestRecords: S.Array(S.suspend(() => StageHighestRecord)),
  bigRunRecord: BigRunRecord,
  // teamContestRecord: S.Null,
  defeatEnemyRecords: S.Array(S.suspend(() => DefeatRecord)),
  // defeatBossRecords: S.Array(S.suspend(() => DefeatRecord))
}) {}

export class Data extends S.Class<Data>("Data")({
  coopRecord: CoopRecordClass,
}) {}

export class CreateRecordDto extends S.Class<CreateRecordDto>("CreateRecordDto")({
  data: Data,
}) {}

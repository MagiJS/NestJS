import * as S from "@effect/schema/Schema"

const CoopTrophy = S.Literal("GOLD", "SILVER", "BRONZE")
type CoopTrophy = S.Schema.Type<typeof CoopTrophy>

const CoopMode = S.Literal("REGULAR", "LIMITED", "PRIVATE_CUSTOM", "PRIVATE_SCENARIO")
type CoopMode = S.Schema.Type<typeof CoopMode>

const CoopRule = S.Literal("REGULAR", "BIG_RUN", "TEAM_CONTEST")
type CoopRule = S.Schema.Type<typeof CoopMode>

const CoopEnemy = S.Literal(
  "Q29vcEVuZW15LTIz", // CoopEnemy-23
  "Q29vcEVuZW15LTI0", // CoopEnemy-24
  "Q29vcEVuZW15LTI1", // CoopEnemy-25
  "Q29vcEVuZW15LTMx" // CoopEnemy-31
)
type CoopEnemy = S.Schema.Type<typeof CoopEnemy>

const CoopGrade = S.Literal(
  "Q29vcEdyYWRlLTA=", // CoopGrade-0
  "Q29vcEdyYWRlLTE=", // CoopGrade-1
  "Q29vcEdyYWRlLTI=", // CoopGrade-2
  "Q29vcEdyYWRlLTM=", // CoopGrade-3
  "Q29vcEdyYWRlLTQ=", // CoopGrade-4
  "Q29vcEdyYWRlLTU=", // CoopGrade-5
  "Q29vcEdyYWRlLTY=", // CoopGrade-6
  "Q29vcEdyYWRlLTc=", // CoopGrade-7
  "Q29vcEdyYWRlLTg=" // CoopGrade-8
)
type CoopGrade = S.Schema.Type<typeof CoopGrade>

const CoopStage = S.Literal(
  "Q29vcFN0YWdlLS05OTk=", // CoopStage--999
  "Q29vcFN0YWdlLTA=", // CoopStage-0
  "Q29vcFN0YWdlLTE=", // CoopStage-1
  "Q29vcFN0YWdlLTI=", // CoopStage-2
  "Q29vcFN0YWdlLTM=", // CoopStage-3
  "Q29vcFN0YWdlLTQ=", // CoopStage-4
  "Q29vcFN0YWdlLTU=", // CoopStage-5
  "Q29vcFN0YWdlLTY=", // CoopStage-6
  "Q29vcFN0YWdlLTc=", // CoopStage-7
  "Q29vcFN0YWdlLTg=", // CoopStage-8
  "Q29vcFN0YWdlLTk=", // CoopStage-9
  "Q29vcFN0YWdlLTEwMA==", // CoopStage-100
  "Q29vcFN0YWdlLTEwMQ==", // CoopStage-101
  "Q29vcFN0YWdlLTEwMg==", // CoopStage-102
  "Q29vcFN0YWdlLTEwMw==", // CoopStage-103
  "Q29vcFN0YWdlLTEwNA==", // CoopStage-104
  "Q29vcFN0YWdlLTEwNQ==", // CoopStage-105
  "Q29vcFN0YWdlLTEwNg==" // CoopStage-106
)
type CoopStage = S.Schema.Type<typeof CoopStage>

const RegularGradeName = S.Literal(
  "Bonerattle Arena",
  "Cohozuna",
  "Eggsecutive VP",
  "Horrorboros",
  "Salmonid Smokeyard"
)
type RegularGradeName = S.Schema.Type<typeof RegularGradeName>

const GradePointDiff = S.Literal("DOWN", "KEEP", "UP")
type GradePointDiff = S.Schema.Type<typeof GradePointDiff>

export class PointCard extends S.Class<PointCard>("PointCard")({
  defeatBossCount: S.Number,
  deliverCount: S.Number,
  goldenDeliverCount: S.Number,
  playCount: S.Number,
  rescueCount: S.Number,
  regularPoint: S.Number,
  totalPoint: S.Number,
  limitedPoint: S.Null
}) {}

export class HistoryDetailsNode extends S.Class<HistoryDetailsNode>("HistoryDetailsNode")({
  id: S.String
}) {}

export class HistoryDetails extends S.Class<HistoryDetails>("HistoryDetails")({
  nodes: S.Array(HistoryDetailsNode)
}) {}

export class Grade extends S.Class<Grade>("Grade")({
  id: CoopGrade
}) {}

export class HighestResult extends S.Class<HighestResult>("HighestResult")({
  grade: Grade,
  gradePoint: S.Number,
  jobScore: S.Number,
  trophy: S.Union(S.Null, CoopTrophy)
}) {}

export class HistoryGroupsNode extends S.Class<HistoryGroupsNode>("HistoryGroupsNode")({
  startTime: S.String,
  endTime: S.String,
  mode: S.String,
  playCount: S.Number,
  rule: S.String,
  highestResult: HighestResult,
  historyDetails: S.suspend(() => HistoryDetails)
}) {}

export class HistoryGroups extends S.Class<HistoryGroups>("HistoryGroups")({
  nodes: S.Array(HistoryGroupsNode)
}) {}

export class Scale extends S.Class<Scale>("Scale")({
  gold: S.Number,
  silver: S.Number,
  bronze: S.Number
}) {}

export class CoopResult extends S.Class<CoopResult>("CoopResult")({
  regularAverageClearWave: S.Number,
  scale: Scale,
  pointCard: PointCard,
  historyGroups: HistoryGroups
}) {}

export class Data extends S.Class<Data>("Data")({
  coopResult: CoopResult
}) {}

export class CreateHistoryDto extends S.Class<CreateHistoryDto>("CreateHistoryDto")({
  data: Data
}) {}

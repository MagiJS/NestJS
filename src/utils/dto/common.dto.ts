import { Schema as S } from "@effect/schema"

export const CoopTrophy = S.Literal("GOLD", "SILVER", "BRONZE")
export type CoopTrophy = S.Schema.Type<typeof CoopTrophy>

export const CoopMode = S.Literal("REGULAR", "LIMITED", "PRIVATE_CUSTOM", "PRIVATE_SCENARIO")
export type CoopMode = S.Schema.Type<typeof CoopMode>

export const CoopRule = S.Literal("REGULAR", "BIG_RUN", "TEAM_CONTEST")
export type CoopRule = S.Schema.Type<typeof CoopMode>

export const CoopEnemy = S.Literal(
  "Q29vcEVuZW15LTQ=", // CoopEnemy-04
  "Q29vcEVuZW15LTU=", // CoopEnemy-05
  "Q29vcEVuZW15LTY=", // CoopEnemy-06
  "Q29vcEVuZW15LTc=", // CoopEnemy-07
  "Q29vcEVuZW15LTg=", // CoopEnemy-08
  "Q29vcEVuZW15LTk=", // CoopEnemy-09
  "Q29vcEVuZW15LTEw", // CoopEnemy-10
  "Q29vcEVuZW15LTEx", // CoopEnemy-11
  "Q29vcEVuZW15LTEy", // CoopEnemy-12
  "Q29vcEVuZW15LTEz", // CoopEnemy-13
  "Q29vcEVuZW15LTE0", // CoopEnemy-14
  "Q29vcEVuZW15LTE1", // CoopEnemy-15
  "Q29vcEVuZW15LTE3", // CoopEnemy-17
  "Q29vcEVuZW15LTIw", // CoopEnemy-20
  "Q29vcEVuZW15LTIz", // CoopEnemy-23
  "Q29vcEVuZW15LTI0", // CoopEnemy-24
  "Q29vcEVuZW15LTI1", // CoopEnemy-25
  "Q29vcEVuZW15LTMx", // CoopEnemy-31
)
export type CoopEnemy = S.Schema.Type<typeof CoopEnemy>

export const CoopGrade = S.Literal(
  "Q29vcEdyYWRlLTA=", // CoopGrade-0
  "Q29vcEdyYWRlLTE=", // CoopGrade-1
  "Q29vcEdyYWRlLTI=", // CoopGrade-2
  "Q29vcEdyYWRlLTM=", // CoopGrade-3
  "Q29vcEdyYWRlLTQ=", // CoopGrade-4
  "Q29vcEdyYWRlLTU=", // CoopGrade-5
  "Q29vcEdyYWRlLTY=", // CoopGrade-6
  "Q29vcEdyYWRlLTc=", // CoopGrade-7
  "Q29vcEdyYWRlLTg=", // CoopGrade-8
)
export type CoopGrade = S.Schema.Type<typeof CoopGrade>

export const CoopStage = S.Literal(
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
  "Q29vcFN0YWdlLTEwNg==", // CoopStage-106
)
export type CoopStage = S.Schema.Type<typeof CoopStage>

export const GradePointDiff = S.Literal("DOWN", "KEEP", "UP")
export type GradePointDiff = S.Schema.Type<typeof GradePointDiff>

export class Grade extends S.Class<Grade>("Grade")({
  id: CoopGrade,
}) {}

export class Stage extends S.Class<Stage>("Stage")({
  id: CoopStage,
}) {}

export class Enemy extends S.Class<Enemy>("Enemy")({
  id: CoopEnemy,
}) {}

export class Scale extends S.Class<Scale>("Scale")({
  gold: S.Number,
  silver: S.Number,
  bronze: S.Number,
}) {}

export namespace WeaponInfo {
  export class Specal extends S.Class<Specal>("Specal")({
    id: S.Number,
    count: S.Number,
  }) {}
}

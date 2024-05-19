import * as S from "@effect/schema/Schema"
import { EnumsDefinition } from "@effect/schema/Schema"
import { Console, Effect, Either } from "effect"

const decode = (x: string): string => btoa(x)

// export const Base64Id = <T extends EnumsDefinition>(value: T) =>
//   S.Struct({
//     id: S.String.pipe(Effect.andThen(decode)),
//   })

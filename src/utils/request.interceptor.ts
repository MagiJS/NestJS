import { CreateScheduleDto } from "@/schedules/dto/create-schedule.dto"
import { HttpServerError } from "@effect/platform/Http/ServerError"
import * as Http from "@effect/platform/HttpServer"
import { ParseError } from "@effect/schema/ParseResult"
import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Response } from "@nestjs/common"
import { validate } from "class-validator"
import { Console, Effect } from "effect"
import { Observable } from "rxjs"
import { tap } from "rxjs/operators"

// export interface Response<T> {
//   data: T
// }

@Injectable()
export class RequestInterceptor<T> implements NestInterceptor<T> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<T> {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const body: any = context.switchToHttp().getRequest().body
    Effect.runPromise(Effect.log(body))
    return next.handle().pipe()
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  validate<T>(body: any): Promise<T> {
    Http.body.json(body).pipe(Http.body.json, Effect.andThen(Effect.parse), Effect.scoped)
  }
}

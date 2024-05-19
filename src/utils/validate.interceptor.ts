import * as Http from "@effect/platform/HttpServer"
import { AST, Schema } from "@effect/schema"
import { ParseError, decode, validateSync } from "@effect/schema/ParseResult"
import { Annotations, Class } from "@effect/schema/Schema"
import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  Response,
  Type,
} from "@nestjs/common"
import { ClassConstructor } from "class-transformer"
import { Console, Effect, Either } from "effect"
import { Observable, map } from "rxjs"

type RequestType<T> = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  new (...args: any[]): T
}

@Injectable()
export class ValidateInterceptor<T> implements NestInterceptor {
  constructor(private readonly Type: RequestType<T>) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<T> {
    const body: unknown = context.switchToHttp().getRequest().body
    // @ts-ignore
    const decode: Either.Either<T, ParseError> = Schema.decodeUnknownEither(this.Type)(body)
    if (Either.isLeft(decode)) {
      console.error(decode.left.toString())
      throw new BadRequestException(decode.left.toString())
    }
    if (Either.isRight(decode)) {
    }
    return next.handle().pipe(map(() => decode.right))
  }
}

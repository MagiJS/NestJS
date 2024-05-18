import {
  BadGatewayException,
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from "@nestjs/common"
import { Observable, throwError } from "rxjs"
import { catchError } from "rxjs/operators"

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(catchError((err) => throwError(() => new BadRequestException())))
  }
}

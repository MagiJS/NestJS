import { HttpClientError } from "@effect/platform/Http/ClientError"
import * as Http from "@effect/platform/HttpClient"
import { ParseError } from "@effect/schema/ParseResult"
import { Injectable } from "@nestjs/common"
import { Console, Effect, Either } from "effect"
import { CreateScheduleDto } from "./dto/create-schedule.dto"
import { UpdateScheduleDto } from "./dto/update-schedule.dto"

@Injectable()
export class SchedulesService {
  create(createScheduleDto: CreateScheduleDto) {
    return createScheduleDto
  }

  async findAll() {
    // const request: CreateScheduleDto = await Effect.runPromise(this.getSchedules())
    // return request
    return
  }

  findOne(id: number) {
    return `This action returns a #${id} schedule`
  }

  update(id: number, updateScheduleDto: UpdateScheduleDto) {
    return `This action updates a #${id} schedule`
  }

  remove(id: number) {
    return `This action removes a #${id} schedule`
  }

  private getSchedules(): Effect.Effect<CreateScheduleDto, HttpClientError | ParseError> {
    return Http.request
      .get("https://splatoon.oatmealdome.me/api/v1/three/coop/phases?count=5")
      .pipe(Http.client.fetchOk, Effect.andThen(Http.response.schemaBodyJson(CreateScheduleDto)), Effect.scoped)
      .pipe(Effect.andThen((schedules) => schedules))
  }
}

import { ErrorsInterceptor } from "@/utils/errors.interceptor"
import { RequestInterceptor } from "@/utils/request.interceptor"
import { CacheInterceptor } from "@nestjs/cache-manager"
import { Body, Controller, Delete, Get, Param, Patch, Post, UseInterceptors } from "@nestjs/common"
import { CreateScheduleDto } from "./dto/create-schedule.dto"
import { UpdateScheduleDto } from "./dto/update-schedule.dto"
import { SchedulesService } from "./schedules.service"

@Controller("schedules")
@UseInterceptors(CacheInterceptor)
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

  @Post()
  @UseInterceptors(RequestInterceptor<CreateScheduleDto>)
  create(@Body() createScheduleDto: CreateScheduleDto) {
    return this.schedulesService.create(createScheduleDto)
  }

  @Get()
  findAll() {
    return this.schedulesService.findAll()
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.schedulesService.findOne(+id)
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateScheduleDto: UpdateScheduleDto) {
    return this.schedulesService.update(+id, updateScheduleDto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.schedulesService.remove(+id)
  }
}

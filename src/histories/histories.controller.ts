import { ValidateInterceptor } from "@/utils/validate.interceptor"
import { Body, Controller, Delete, Get, Param, Patch, Post, UseInterceptors } from "@nestjs/common"
import { CreateHistoryDto } from "./dto/create-history.dto"
import { UpdateHistoryDto } from "./dto/update-history.dto"
import { HistoriesService } from "./histories.service"

@Controller("histories")
export class HistoriesController {
  constructor(private readonly historiesService: HistoriesService) {}

  @Post()
  @UseInterceptors(new ValidateInterceptor<CreateHistoryDto>(CreateHistoryDto))
  create(@Body() createHistoryDto: CreateHistoryDto) {
    return this.historiesService.create(createHistoryDto)
  }

  @Get()
  findAll() {
    return this.historiesService.findAll()
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.historiesService.findOne(+id)
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateHistoryDto: UpdateHistoryDto) {
    return this.historiesService.update(+id, updateHistoryDto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.historiesService.remove(+id)
  }
}

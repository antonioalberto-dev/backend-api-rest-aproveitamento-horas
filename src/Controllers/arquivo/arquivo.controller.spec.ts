import { Test, TestingModule } from '@nestjs/testing';
import { ArquivoController } from './arquivo.controller';

describe('ArquivoController', () => {
  let controller: ArquivoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArquivoController],
    }).compile();

    controller = module.get<ArquivoController>(ArquivoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

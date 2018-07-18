import { IjpModule } from './ijp.module';

describe('IjpModule', () => {
  let ijpModule: IjpModule;

  beforeEach(() => {
    ijpModule = new IjpModule();
  });

  it('should create an instance', () => {
    expect(ijpModule).toBeTruthy();
  });
});

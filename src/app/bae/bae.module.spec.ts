import { BaeModule } from './bae.module';

describe('BaeModule', () => {
  let baeModule: BaeModule;

  beforeEach(() => {
    baeModule = new BaeModule();
  });

  it('should create an instance', () => {
    expect(baeModule).toBeTruthy();
  });
});

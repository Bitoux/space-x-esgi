import { AppSharerModule } from './app-sharer.module';

describe('AppSharerModule', () => {
  let appSharerModule: AppSharerModule;

  beforeEach(() => {
    appSharerModule = new AppSharerModule();
  });

  it('should create an instance', () => {
    expect(appSharerModule).toBeTruthy();
  });
});

import { EquipementsModule } from './equipements.module';

describe('EquipementsModule', () => {
  let equipementsModule: EquipementsModule;

  beforeEach(() => {
    equipementsModule = new EquipementsModule();
  });

  it('should create an instance', () => {
    expect(equipementsModule).toBeTruthy();
  });
});

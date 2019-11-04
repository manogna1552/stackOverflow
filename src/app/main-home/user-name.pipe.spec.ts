import { TestBed } from '@angular/core/testing';
import { UserNamePipe } from './user-name.pipe';
describe('UserNamePipe', () => {
  let pipe: UserNamePipe;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [UserNamePipe] });
    pipe = TestBed.get(UserNamePipe);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('transforms X to Y', () => {
    const value: any = 'X';
   // const args: string[] = [];
    expect(pipe.transform(value)).toEqual('Y');
  });
});

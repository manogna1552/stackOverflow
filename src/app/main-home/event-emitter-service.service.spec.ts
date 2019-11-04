import { TestBed } from '@angular/core/testing';
import { EventEmitterServiceService } from './event-emitter-service.service';
describe('EventEmitterServiceService', () => {
  let service: EventEmitterServiceService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [EventEmitterServiceService] });
    service = TestBed.get(EventEmitterServiceService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});

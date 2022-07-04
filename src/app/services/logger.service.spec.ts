import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;
 //const service=new LoggerService
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should not have any messages at starting', () => {
    let count=service.message.length;
    expect(count).toBe(0);
  });
  it('should add the messages when log is called', () => {
   service.log("hello")
    expect(service.message.length).toBe(1);
  });
  it('should clear all  the messages when clear is called', () => {
    service.clear()
     expect(service.message.length).toBe(0);
   });

});

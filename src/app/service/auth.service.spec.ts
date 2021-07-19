import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { AuthenticationService } from './auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
class MockHttpClient {
  post() {};
}

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    // service = new AuthenticationService({});
  });

  it('should run #login()', async () => {
    (service as any).http = (service as any).http || {};
    spyOn((service as any).http, 'post').and.returnValue(observableOf('post'));
    ( service as any).login({}, {});
    // expect(service.http.post).toHaveBeenCalled();
  });

});

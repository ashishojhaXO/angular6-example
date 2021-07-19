import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
class MockHttpClient {
  post() {};
}

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    // service = new UserService({});
  });

  it('should run #getUsers()', async () => {
    (service as any).http = (service as any).http || {};
    spyOn((service as any).http, 'get');
    ( service as any).getUsers();
    // expect(service.http.get).toHaveBeenCalled();
  });

  it('should run #getUserById()', async () => {
    (service as any).http = (service as any).http || {};
    spyOn((service as any).http, 'get');
    ( service as any).getUserById({});
    // expect(service.http.get).toHaveBeenCalled();
  });

  it('should run #createUser()', async () => {
    (service as any).http = (service as any).http || {};
    spyOn((service as any).http, 'post').and.returnValue(observableOf('post'));
    ( service as any).createUser({});
    // expect(service.http.post).toHaveBeenCalled();
  });

  it('should run #updateUser()', async () => {
    (service as any).http = (service as any).http || {};
    spyOn((service as any).http, 'put').and.returnValue(observableOf('put'));
    ( service as any).updateUser({
      id: {}
    });
    // expect(service.http.put).toHaveBeenCalled();
  });

  it('should run #deleteUser()', async () => {
    (service as any).http = (service as any).http || {};
    spyOn((service as any).http, 'delete');
    ( service as any).deleteUser({});
    // expect(service.http.delete).toHaveBeenCalled();
  });

});

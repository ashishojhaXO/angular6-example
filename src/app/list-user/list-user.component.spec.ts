// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { ListUserComponent } from './list-user.component';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Injectable()
class MockRouter {
  navigate() {};
}

@Injectable()
class MockUserService {}

describe('ListUserComponent', () => {
  let fixture: ComponentFixture<ListUserComponent>;
  let component: ListUserComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        ListUserComponent,

      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        { provide: Router, useClass: MockRouter },
        { provide: UserService, useClass: MockUserService }
      ]
    })
    // .overrideComponent(ListUserComponent, {
    // 
    // })
    .compileComponents();

    fixture = TestBed.createComponent(ListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //afterEach(() => {
    //component.ngOnDestroy = function() {};
    //fixture.destroy();
  //});

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  // NOTE: ORI: accessorTests

  // NOTE: ORI: functionTests

  // NOTE: NEW: functionTests

  it('should run #ngOnInit()', async () => {
    (component as any).userService = (component as any).userService || {};
    spyOn((component as any).userService, 'getUsers').and.returnValue(observableOf({}));
    ( component as any).ngOnInit();
    // expect(component.userService.getUsers).toHaveBeenCalled();
  });

  it('should run #deleteUser()', async () => {
    (component as any).userService = (component as any).userService || {};
    spyOn((component as any).userService, 'deleteUser').and.returnValue(observableOf({}));
    (component as any).users = (component as any).users || {};
    (component as any).users = ['users'];
    ( component as any).deleteUser({
      id: {}
    });
    // expect(component.userService.deleteUser).toHaveBeenCalled();
  });

  it('should run #editUser()', async () => {
    (component as any).router = (component as any).router || {};
    spyOn((component as any).router, 'navigate');
    ( component as any).editUser({
      id: {
        toString: function() {}
      }
    });
    // expect(component.router.navigate).toHaveBeenCalled();
  });

  it('should run #addUser()', async () => {
    (component as any).router = (component as any).router || {};
    spyOn((component as any).router, 'navigate');
    ( component as any).addUser();
    // expect(component.router.navigate).toHaveBeenCalled();
  });

});

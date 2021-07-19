// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { AddUserComponent } from './add-user.component';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Injectable()
class MockRouter {
  navigate() {};
}

@Injectable()
class MockUserService {}

describe('AddUserComponent', () => {
  let fixture: ComponentFixture<AddUserComponent>;
  let component: AddUserComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        AddUserComponent,

      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        FormBuilder,
        { provide: Router, useClass: MockRouter },
        { provide: UserService, useClass: MockUserService }
      ]
    })
    // .overrideComponent(AddUserComponent, {
    // 
    // })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserComponent);
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
    (component as any).formBuilder = (component as any).formBuilder || {};
    spyOn((component as any).formBuilder, 'group');
    ( component as any).ngOnInit();
    // expect(component.formBuilder.group).toHaveBeenCalled();
  });

  it('should run #onSubmit()', async () => {
    (component as any).userService = (component as any).userService || {};
    spyOn((component as any).userService, 'createUser').and.returnValue(observableOf({}));
    (component as any).addForm = (component as any).addForm || {};
    (component as any).addForm.value = 'value';
    (component as any).router = (component as any).router || {};
    spyOn((component as any).router, 'navigate');
    ( component as any).onSubmit();
    // expect(component.userService.createUser).toHaveBeenCalled();
    // expect(component.router.navigate).toHaveBeenCalled();
  });

});

// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { LoginComponent } from './login.component';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/auth.service';

@Injectable()
class MockRouter {
  navigate() {};
}

@Injectable()
class MockAuthenticationService {}

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let component: LoginComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        LoginComponent,

      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        FormBuilder,
        { provide: Router, useClass: MockRouter },
        { provide: AuthenticationService, useClass: MockAuthenticationService }
      ]
    })
    // .overrideComponent(LoginComponent, {
    // 
    // })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
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

  it('should run #onSubmit()', async () => {
    (component as any).loginForm = (component as any).loginForm || {};
    (component as any).loginForm.invalid = 'invalid';
    (component as any).loginForm.controls = {
      email: {
        value: {}
      },
      password: {
        value: {}
      }
    };
    (component as any).router = (component as any).router || {};
    spyOn((component as any).router, 'navigate');
    ( component as any).onSubmit();
    // expect(component.router.navigate).toHaveBeenCalled();
  });

  it('should run #ngOnInit()', async () => {
    (component as any).formBuilder = (component as any).formBuilder || {};
    spyOn((component as any).formBuilder, 'group');
    ( component as any).ngOnInit();
    // expect(component.formBuilder.group).toHaveBeenCalled();
  });

});
